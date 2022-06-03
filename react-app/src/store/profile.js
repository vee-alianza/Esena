const SET_PROFILE = "tasks/SET_PROFILE";
const UPDATE_PROFILE = "tasks/UPDATE_PROFILE";

export const setProfile = (user) => {
  return {
    type: SET_PROFILE,
    user,
  };
};

export const updateProfile = (userInfo) => {
  return {
    type: UPDATE_PROFILE,
    userInfo,
  };
};

export const viewProfile = (userId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}`);
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }
    dispatch(setProfile(data));
  }
};

export const editProfile = (formData, userId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(updateProfile(data));
    return null
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return "An error occurred. Please try again.";
  }
};

const initialState = {};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        ...action.user,
      };
    case UPDATE_PROFILE:
        const newState = {...state};
        for (let key of Object.keys(action.userInfo)) {
            newState[key] = action.userInfo[key]
        }
        return newState
    default:
      return state;
  }
};

export default profileReducer;
