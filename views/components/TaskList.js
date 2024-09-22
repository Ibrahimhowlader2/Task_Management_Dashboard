import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTaskList } from '../../store/task/actions';


const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.taskList);

  useEffect(() => {
    dispatch(fetchTaskList());
  }, [dispatch]);

  return (
    <View>
      {tasks.map(task => (
        <Text key={task.id}>{task.title}</Text>
      ))}
    </View>
  );
};

export default TaskList;
