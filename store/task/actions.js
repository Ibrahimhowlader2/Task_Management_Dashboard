
import taskService from '../../services/api.service';
import { taskListSuccess, taskListFailed, saveSuccess, saveFailed } from './actions';

// Fetch task list action
export const fetchTaskList = () => {
  return async (dispatch) => {
    try {
      const tasks = await taskService.getList();
      dispatch(taskListSuccess(tasks));
    } catch (error) {
      dispatch(taskListFailed());
      console.error("Error fetching task list: ", error);
    }
  };
};

// Save task action
export const saveTask = (data) => {
  return async (dispatch) => {
    try {
      const updatedTasks = await taskService.save(data);
      dispatch(saveSuccess());
      dispatch(fetchTaskList()); // Fetch updated task list after saving
    } catch (error) {
      dispatch(saveFailed());
      console.error("Error saving task: ", error);
    }
  };
};

// Edit/Update task action
export const updateTask = (id, data) => {
  return async (dispatch) => {
    try {
      const updatedTasks = await taskService.update(id, data);
      dispatch(saveSuccess());
      dispatch(fetchTaskList()); // Fetch updated task list after updating
    } catch (error) {
      dispatch(saveFailed());
      console.error("Error updating task: ", error);
    }
  };
};

// Delete task action
export const deleteTask = (id) => {
  return async (dispatch) => {
    try {
      const updatedTasks = await taskService.delete(id);
      dispatch(saveSuccess());
      dispatch(fetchTaskList()); // Fetch updated task list after deletion
    } catch (error) {
      dispatch(saveFailed());
      console.error("Error deleting task: ", error);
    }
  };
};
