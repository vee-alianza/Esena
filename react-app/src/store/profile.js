const SET_PROFILE = "tasks/SET_PROFILE";

export const setProfile = (user) => {
  return {
    type: SET_PROFILE,
    user,
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
const initialState = {};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        ...action.user,
      };
    default:
      return state;
  }
};

export default profileReducer;
