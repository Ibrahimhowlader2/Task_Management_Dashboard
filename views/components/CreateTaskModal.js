import React, { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, View, Text, ScrollView, Alert } from 'react-native';
import RoundedButton from '../components/RoundedButton';
import { useDispatch, useSelector } from 'react-redux';
import HeaderModal from './HeaderModal';
import Input from '../components/Input';
import RoundedInput from './RoundedInput';
import taskService from '../../services/api.service';

const CreateTaskModal = ({ onPress, existingTask = null, onSaveSuccess }) => {
  const saveLoading = useSelector(state => state.taskReducer.saveLoading);
  const [inputData, setInputData] = useState({
    Title: '',
    Description: '',
    Priority: 'low', // Default priority
  });

  useEffect(() => {
    if (existingTask) {
      setInputData({
        Title: existingTask.title || '',
        Description: existingTask.description || '',
        Priority: existingTask.priority || 'low', // Set existing priority
      });
    }
  }, [existingTask]);

  const saveTask = async () => {
    if (!inputData.Title || !inputData.Description) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }

    try {
      const taskData = {
        title: inputData.Title,
        description: inputData.Description,
        status: existingTask ? existingTask.status : 'pending',
        priority: inputData.Priority, // Include priority
      };

      if (existingTask) {
        await taskService.update(existingTask.id, taskData);
        Alert.alert('Success', 'Task updated successfully!');
      } else {
        await taskService.save(taskData);
        Alert.alert('Success', 'Task created successfully!');
      }

      if (onSaveSuccess) {
        onSaveSuccess();
      }

      onPress(); // Close the modal
    } catch (error) {
      console.error('Error saving task:', error);
      Alert.alert('Error', 'Failed to save task.');
    }
  };

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <HeaderModal title={existingTask ? "Edit Task" : "Create Task"} onPress={onPress} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Task Title</Text>
        <RoundedInput
          value={inputData.Title}
          onChangeText={text => setInputData({ ...inputData, Title: text })}
          placeholder="Task Title"
          containerStyle={styles.inputContainerStyle}
        />

        <Text style={styles.title}>Description</Text>
        <Input
          value={inputData.Description}
          onChangeText={text => setInputData({ ...inputData, Description: text })}
          style={styles.descriptionInput}
          textStyle={{ height: 100 }}
          placeholder="Write Details Here"
          multiline={true}
        />

        {/* Priority Picker */}
        <Text style={styles.title}>Priority</Text>
        <Picker
          selectedValue={inputData.Priority}
          onValueChange={(itemValue) => setInputData({ ...inputData, Priority: itemValue })}>
          <Picker.Item label="High" value="high" />
          <Picker.Item label="Medium" value="medium" />
          <Picker.Item label="Low" value="low" />
        </Picker>

        <RoundedButton
          title={existingTask ? 'Update' : 'Save'}
          onPress={saveTask}
          loading={saveLoading}
          containerStyle={{
            backgroundColor: '#74C2F2',
            borderColor: '#89CBF4',
          }}
        />
      </ScrollView>
    </View>
  );
};

export default CreateTaskModal;

const styles = StyleSheet.create({
  inputContainerStyle: {
    borderRadius: 15,
  },
  title: {
    fontWeight: '600',
    color: '#8A9DB3',
    marginVertical: 10,
  },
  descriptionInput: {
    height: 100,
    alignItems: 'flex-start',
  },
});
