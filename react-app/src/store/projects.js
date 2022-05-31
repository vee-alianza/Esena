const SET_PROJECTS = "projects/SET_PROJECTS";
const CREATE_PROJECT = "projects/CREATE_PROJECT";
const GET_PROJECT = "projects/GET_PROJECT";

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

const getProject = (project) => {
  return {
    type: GET_PROJECT,
    project
  }
}

export const fetchProject = (projectId) => async (dispatch) => {
  const response = await fetch(`/api/projects/${projectId}`);

  if (response.ok) {
    const data = await response.json();
    dispatch(getProject(data));
  }
}

export const addProject = (payload, userId) => async (dispatch) => {
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

const initialState = { currentProject: null, allProjects: null };

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECTS:
      return {
        ...state,
        ...action.projects
      }
    case GET_PROJECT:
      return { ...state, currentProject: action.project };
    default:
      return state;
  }
};

export default projectReducer;
