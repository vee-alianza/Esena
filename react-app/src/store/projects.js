const GET_PROJECT = "project/GET_PROJECT"
const SET_PROJECTS = "projects/SET_PROJECTS";
const CREATE_PROJECT = "projects/CREATE_PROJECT";
const EDIT_PROJECT = "projects/EDIT_PROJECT";

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

<<<<<<< HEAD



export const fetchProject = (projectId) => async dispatch => {
  const response = await fetch(`/api/projects/${projectId}`);
  // console.log(project, "============")
  if (response.ok) {
    const project = await response.json();
    dispatch(getProject(project));
    return response;
  }
}

// const initialState = { ownedProjects: {}, joinedProjects: {}, projects: [] };
const initialState = { currentProject: null, allProjects: null };
=======
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

const initialState = {};
>>>>>>> ba84b39927b5c7db895e08359390680524a04d9a

const projectReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_PROJECT:
      newState = Object.assign({}, state);
      newState.currentProject = action.project;
      return newState;

    case SET_PROJECTS:
<<<<<<< HEAD
      // const allProjects = new Set(
      //   ... Object.entries(action.payload.owned_projects),
      //   ... Object.entries(action.payload.joined_projects)
      // );
      // return {
      //   ...state,
      //   ownedProjects: action.payload.owned_projects,
      //   joinedProjects: action.payload.joined_projects,
      //   projects: Array.from(allProjects),
      // };
      newState = Object.assign({}, state);
      newState.allProjects = action.projects;
      return newState;
    // return {
    //   ...state,
    //   ...action.projects
    // }
=======
      return {
        ...state,
        ...action.projects,
      };
    case EDIT_PROJECT:
      return {
        ...state,
        [action.project.id]: action.project,
      };
>>>>>>> ba84b39927b5c7db895e08359390680524a04d9a
    default:
      return state;
  }
};

export default projectReducer;
