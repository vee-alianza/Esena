const SET_PROJECTS = "projects/SET_PROJECTS";

const setProjects = (payload) => {
  return {
    type: SET_PROJECTS,
    payload,
  };
};

const initialState = { ownedProjects: {}, joinedProjects: {} };

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECTS:
      return { ...state, action };
  }
};
