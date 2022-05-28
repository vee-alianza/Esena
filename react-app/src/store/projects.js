const SET_PROJECTS = "projects/SET_PROJECTS";

export const setProjects = (payload) => {
  return {
    type: SET_PROJECTS,
    payload,
  };
};

const initialState = { ownedProjects: {}, joinedProjects: {}, projects: [] };

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECTS:
      const allProjects = new Set(
        Object.entries(action.payload.owned_projects),
        Object.entries(action.payload.joined_projects)
      );
      return {
        ...state,
        ownedProjects: action.payload.owned_projects,
        joinedProjects: action.payload.joined_projects,
        projects: Array.from(allProjects),
      };
    default:
      return state;
  }
};

export default projectReducer;
