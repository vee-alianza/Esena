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

// const initialState = { ownedProjects: {}, joinedProjects: {}, projects: [] };
const initialState = {};

const projectReducer = (state = initialState, action) => {
  const newState = { project: { ...state.project } }
  switch (action.type) {
    case GET_PROJECT:
      newState = Object.assign({}, state);
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
      return {
        ...state,
        ...action.projects
      }
    default:
      return state;
  }
};

export default projectReducer;
