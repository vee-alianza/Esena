const SET_PROJECTS = "projects/SET_PROJECTS";
const CREATE_PROJECT = "projects/CREATE_PROJECT"

export const setProjects = (projects) => {
  return {
    type: SET_PROJECTS,
    projects,
  };
};

export const createProject = (project) => {
  return {
    type: CREATE_PROJECT,
    project
  }
}

export const addProject = (payload, userId) => async(dispatch) => {
  console.log(payload)
  const response = await fetch(`/api/users/${userId}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
  if (response.ok) {
    const data = await response.json();
    dispatch(createProject(data));
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
}

const initialState = {};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECTS:
      return {
        ...state,
        ...action.projects
      }
    default:
      return state;
  }
};

export default projectReducer;
