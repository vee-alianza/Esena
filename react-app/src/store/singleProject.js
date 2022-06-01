const SET_ONE_PROJECT = "projects/SET_ONE_PROJECT";

export const setOneProject = (project) => {
  return {
    type: SET_ONE_PROJECT,
    project,
  };
};

export const viewProject = (projectId) => async (dispatch) => {
  const response = await fetch(`/api/projects/${projectId}`);
  if (response.ok) {
    const data = await response.json();
    dispatch(setOneProject(data));
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

const initialState = {};

const singleProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ONE_PROJECT:
      return {
        ...state,
        ...action.project,
      };
    default:
      return state;
  }
};

export default singleProjectReducer;
