const GET_PROJECT = "project/GET_PROJECT"
const SET_PROJECTS = "projects/SET_PROJECTS";
const CREATE_PROJECT = "projects/CREATE_PROJECT";
const EDIT_PROJECT = "projects/EDIT_PROJECT";
const REMOVE_PROJECT = "project/REMOVE_PROJECT"

export const getProject = (project) => {
  return {
    type: GET_PROJECT,
    project
  }
}

export const setProjects = (projects) => {
  return {
    type: SET_PROJECTS,
    projects,
  };
};

export const createProject = (project) => {
  return {
    type: CREATE_PROJECT,
    project,
  };
};

export const editProject = (project) => {
  return {
    type: EDIT_PROJECT,
    project,
  };
};

export const removeProject = (projectId) => {
  return {
    type: REMOVE_PROJECT,
    projectId,
  };
};

export const addProject = (payload, userId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
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
};

export const updateProject = (payload, projectId) => async (dispatch) => {
  const response = await fetch(`/api/projects/${projectId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(editProject(data));
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

export const deleteProject = (projectId) => async (dispatch) => {
  const response = await fetch(`/api/projects/${projectId}`, {
    method: "DELETE"
  });

  // if (response.ok) {
  //   const data = await response.json();
  //   dispatch(removeProject(projectId));
  //   return data;
  // } else if (response.status < 500) {
  //   if (data.errors) {
  //     return data;
  //   }
  // } else {
  //   return ["An error occurred. Please try again."]
  // }
};

const initialState = {};

const projectReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_PROJECT:
      newState = Object.assign({}, state);
      newState.currentProject = action.project;
      return newState;

    case SET_PROJECTS:
      return {
        ...state,
        ...action.projects,
      };
    case CREATE_PROJECT:
      return {
        ...state,
        [action.project.id]: action.project
      }
    case EDIT_PROJECT:
      return {
        ...state,
        [action.project.id]: action.project,
      };
    case REMOVE_PROJECT: {
      let newState = { ...state };
      delete newState[action.projectId];
      return newState
    }
    default:
      return state;
  }
};

export default projectReducer;
