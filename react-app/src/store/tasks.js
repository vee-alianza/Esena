const SET_TASKS = "tasks/SET_TASKS";
const ADD_TASK = "tasks/ADD_TASK";
const UPDATE_TASK = "tasks/UPDATE_TASK";
const REMOVE_TASK = "tasks/REMOVE_TASK";
const REMOVE_ALL_TASKS = "projects/REMOVE_ALL_TASKS";


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

export const updateTask = (task) => {
  return {
    type: UPDATE_TASK,
    task,
  };
};

export const removeTask = (taskId) => {
  return {
    type: REMOVE_TASK,
    taskId,
  };
};

export const removeAllTasks = () => ({
  type: REMOVE_ALL_TASKS,
});


export const createTask = (formData, projectId) => async (dispatch) => {
  // console.log(formData)
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
    return "An error occurred. Please try again.";
  }
};

export const editTask = (formData, taskId) => async (dispatch) => {
  const response = await fetch(`/api/tasks/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(updateTask(data));
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

export const deleteTask = (taskId) => async (dispatch) => {
  const response = await fetch(`/api/tasks/${taskId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(removeTask(taskId));
    return data;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

export const markTaskComplete = (taskId) => async (dispatch) => {
  const response = await fetch(`/api/tasks/${taskId}/complete`, {
    method: "PATCH",
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(updateTask(data));
    return data;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

const initialState = {};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS:
      return {
        ...state,
        ...action.tasks,
      };
    case ADD_TASK:
      return {
        ...state,
        [action.task.id]: action.task,
      };
    case UPDATE_TASK: {
      let newState = {
        ...state,
        [action.task.id]: action.task,
      };
      return newState;
    }
    case REMOVE_TASK: {
      let newState = { ...state };
      delete newState[action.taskId];
      return newState;
    }
    case REMOVE_ALL_TASKS:
      return {...initialState}
    default:
      return state;
  }
};

export default taskReducer;
