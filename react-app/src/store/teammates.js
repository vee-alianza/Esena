const SET_TEAMMATES = "teammates/SET_TEAMMATES";

export const setTeammates = (teammates) => {
  return {
    type: SET_TEAMMATES,
    teammates,
  };
};

const initialState = { teammates: {}, allUsers: {} };

const teammateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEAMMATES:
      return {
        ...state,
        teammates: action.teammates,
      };
    default:
      return state;
  }
};

export default teammateReducer;
