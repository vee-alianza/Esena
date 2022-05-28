const SET_TASKS = "tasks/SET_TASKS";
const ADD_TASK = "tasks/ADD_TASK";

export const setTasks = (tasks) => {
  return {
    type: SET_TASKS,
    tasks,
  };
};

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    task,
  };
};

export const createTask = (formData, projectId) => async (dispatch) => {
  console.log(formData)
  const response = await fetch(`/api/projects/${projectId}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(addTask(data));
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





const initialState = { assignedTasks: {} };

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS:
      return {
        ...state,
        assignedTasks: action.tasks,
      };
    case ADD_TASK:
      const newState = {...state}
      newState.assignedTasks[action.task.id] = action.task
      return newState
    default:
      return state;
  }
};

export default taskReducer;
