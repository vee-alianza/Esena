const SET_TEAMMATES = "teammates/SET_TEAMMATES";
const SET_USERS = "teammates/SET_USERS";
const ADDTO_ALLUSERS = "teammates/ADDTO_ALLUSERS";
const REMOVE_ALL_TEAMMATES = "projects/REMOVE_ALL_TEAMMATES";


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

export const addToAllUsers = (user) => {
  return {
    type: ADDTO_ALLUSERS,
    user,
  };
};

export const removeAllTeammates = () => ({
  type: REMOVE_ALL_TEAMMATES,
});

const initialState = { teammates: [], allUsers: {} };

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
        allUsers: {...action.users},
      };
    case ADDTO_ALLUSERS:
      return {
        ...state,
        allUsers: {...state.allUsers, [action.user.id]: action.user},
      };
    case REMOVE_ALL_TEAMMATES:
      return {... initialState};
    default:
      return state;
  }
};

export default teammateReducer;
