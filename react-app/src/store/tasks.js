const SET_TASKS = "tasks/SET_TASKS";

export const setTasks = (tasks) => {
  return {
    type: SET_TASKS,
    tasks,
  };
};

const initialState = { assignedTasks: {} };

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS:
      return {
        ...state,
        assignedTasks: action.tasks,
      };
    default:
      return state;
  }
};

export default taskReducer;
