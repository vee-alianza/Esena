const GET_PROJECT = "project/GET_PROJECT"
const SET_PROJECTS = "projects/SET_PROJECTS";

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

const projectReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_PROJECT:
      newState = Object.assign({}, state);
      newState.currentProject = action.project;
      return newState;

    case SET_PROJECTS:
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
    default:
      return state;
  }
};

export default projectReducer;
