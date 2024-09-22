import AsyncStorage from '@react-native-async-storage/async-storage';

// Define your initial tasks
const TASK_STORAGE_KEY = 'TASKS';
const initialTasks = [
    { id: 1, title: 'Task 1', status: 'pending', priority: 'high' },
    { id: 2, title: 'Task 2', status: 'completed', priority: 'medium' },
    { id: 3, title: 'Task 3', status: 'pending', priority: 'low' },
    { id: 4, title: 'Task 4', status: 'completed',priority: 'medium' },
    { id: 5, title: 'Task 5', status: 'pending',priority: 'low' },
];

const useAsyncStorage = true; 

const taskService = {
    getList: async () => {
        if (useAsyncStorage) {
            try {
                const tasks = await AsyncStorage.getItem(TASK_STORAGE_KEY);
                if (tasks !== null) {
                    return JSON.parse(tasks);
                } else {
                    await AsyncStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(initialTasks));
                    return initialTasks;
                }
            } catch (error) {
                console.error("Error fetching tasks: ", error);
                return initialTasks; 
            }
        } else {
            return await getApi("task/task-lists", {}, {}); // Live API request
        }
    },

    save: async (data) => {
        if (useAsyncStorage) {
            try {
                const tasks = await taskService.getList();
                const updatedTasks = [...tasks, { ...data, id: tasks.length + 1 }];
                await AsyncStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(updatedTasks));
                return updatedTasks;
            } catch (error) {
                console.error("Error saving task: ", error);
            }
        } else {
            return await postApi("task/task-create", {}, data); // Live API request
        }
    },

    update: async (id, data) => {
        if (useAsyncStorage) {
            try {
                const tasks = await taskService.getList();
                const updatedTasks = tasks.map(task => task.id === id ? { ...task, ...data } : task);
                await AsyncStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(updatedTasks));
                return updatedTasks;
            } catch (error) {
                console.error("Error updating task: ", error);
            }
        } else {
            return await putApi(`task/task-update/${id}`, {}, data); // Live API request
        }
    },


    delete: async (id) => {
        if (useAsyncStorage) {
            try {
                const tasks = await taskService.getList();
                const updatedTasks = tasks.filter(task => task.id !== id);
                await AsyncStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(updatedTasks));
                return updatedTasks;
            } catch (error) {
                console.error("Error deleting task: ", error);
            }
        } else {
            return await deleteApi(`task/task-delete/${id}`, {}, {}); // Live API request
        }
    }
};

export default taskService;
