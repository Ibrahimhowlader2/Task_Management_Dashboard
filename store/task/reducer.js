import types from './types';
const INITIAL_STATE = {
  listLoading: false,
  taskList: [],
};

export const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.TASK_LIST_LOADING:
      return { ...state, listLoading: true };
    case types.TASK_LIST_SUCCESS:
      return { ...state, taskList: action.payload.data, listLoading: false };
    case types.TASK_LIST_FAILED:
      return { ...state, listLoading: false };
    case types.ADD_TASK:
      return { ...state, taskList: [...state.taskList, action.payload.task] };
    case types.EDIT_TASK:
      return {
        ...state,
        taskList: state.taskList.map(task => task.id === action.payload.id ? action.payload.task : task)
      };
    case types.TOGGLE_TASK_STATUS:
      return {
        ...state,
        taskList: state.taskList.map(task => task.id === action.payload.id ? { ...task, completed: !task.completed } : task)
      };
    default:
      return state;
  }
};
