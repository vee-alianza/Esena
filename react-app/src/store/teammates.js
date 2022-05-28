const SET_TEAMMATES = "teammates/SET_TEAMMATES";
const SET_USERS = "teammates/SET_USERS";

export const setTeammates = (teammates) => {
  return {
    type: SET_TEAMMATES,
    teammates,
  };
};

export const setAllUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

const initialState = { teammates: [], allUsers: [] };

const teammateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEAMMATES:
      return {
        ...state,
        teammates: action.teammates,
      };
    case SET_USERS:
      return {
        ...state,
        allUsers: action.users,
      };
    default:
      return state;
  }
};

export default teammateReducer;
