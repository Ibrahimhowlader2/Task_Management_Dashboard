import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button, TextInput, Switch, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FloatingButton from '../../components/FloatingButton';
import CreateTaskModal from '../../components/CreateTaskModal';
import FilterModal from '../../components/FilterModal';
import taskService from '../../../services/api.service';
import Modal from 'react-native-modal';
import CommonStyles from '../../../constants/CommonStyles';
import DotMenu from '../../components/DotMenu';
import FlashMessage, { showMessage } from 'react-native-flash-message';

const HomeScreens = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [searchText, setSearchText] = useState('');
  const [statistics, setStatistics] = useState({ total: 0, completed: 0, pending: 0 });

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const fetchedTasks = await taskService.getList();
      setTasks(fetchedTasks);
      updateStatistics(fetchedTasks);
      setLoading(false);
    } catch (error) {
      console.error("Error loading tasks: ", error);
      setLoading(false);
    }
  };

  const updateStatistics = (tasks) => {
    const total = tasks.length;
    const completed = tasks.filter(task => task.status === 'completed').length;
    const pending = total - completed;
    setStatistics({ total, completed, pending });
  };

  const toggleTaskStatus = async (task) => {
    const updatedStatus = task.status === 'pending' ? 'completed' : 'pending';
    await taskService.update(task.id, { status: updatedStatus });
    loadTasks();
  };

  const filteredTasks = tasks
    .filter(task => {
      if (selectedStatus === 'all') return true;
      return task.status === selectedStatus;
    })
    .filter(task => {
      if (selectedPriority === 'all') return true;
      return task.priority === selectedPriority;
    })
    .filter(task => task.title.toLowerCase().includes(searchText.toLowerCase()));

  const handleApplyFilter = () => {
    setFilterModalVisible(false);
    loadTasks();
  };

  return (
    <>
      <FloatingButton
        onPressTaskCreate={() => {
          setSelectedTask(null);
          setModalVisible(true);
        }}
      />



      <View style={styles.container}>
        {/* Task Statistics */}
        <View style={styles.statsContainer}>
          <Text style={styles.statsTotal}>Total Tasks: {statistics.total}</Text>
          <Text style={styles.statsCom}>Completed: {statistics.completed}</Text>
          <Text style={styles.statsPend}>Pending: {statistics.pending}</Text>
        </View>

        {/* Search and Filter */}
        <View style={styles.filterContainer}>

          <TextInput
            placeholder="Search tasks..."
            style={styles.searchInput}
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity activeOpacity={.8} onPress={() => setFilterModalVisible(true)} style={styles.filterBtn}>
            <AntDesign
              name="filter"
              size={24}

            />
            <Text style={{ marginLeft: 4, fontWeight: '500' }}>Filter</Text>
          </TouchableOpacity>
        </View>


        {loading ? (
          <Text>Loading tasks...</Text>
        ) : (
          <FlatList
            data={filteredTasks}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.taskItem}>
                <View>
                  <Text style={styles.taskTitle}>{item.title}</Text>
                  <Text style={styles.taskStatus}>{item.status}</Text>
                  <Text style={{color:'#000'}}>Priority: {item.priority || 'No Priority'}</Text>
                </View>

                <View>
                  <Switch
                    value={item.status === 'completed'}
                    onValueChange={() => toggleTaskStatus(item)}
                    style={{marginBottom:8}}
                  />
                  <DotMenu
                    title={item.title}
                    onPressEdit={() => {
                      setSelectedTask(item);
                      setModalVisible(true);
                    }}
                    onPressDelete={async () => {
                      await taskService.delete(item.id);
                      loadTasks();
                      showMessage({
                        message: "Task deleted successfully!",
                        type: "success", 
                      });
                    }}
                  />
                </View>
              </View>
            )}
          />
        )}

        {/* Filter Modal */}
        <FilterModal
          isVisible={filterModalVisible}
          onClose={() => setFilterModalVisible(false)}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          selectedPriority={selectedPriority}
          setSelectedPriority={setSelectedPriority}
          onApplyFilter={handleApplyFilter}
        />
      </View>

      {/* Create/Edit Task Modal */}
      <Modal
        avoidKeyboard={true}
        isVisible={isModalVisible}
        backdropOpacity={0.4}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={600}
        animationOutTiming={600}
        onBackdropPress={() => setModalVisible(false)}
        onRequestClose={() => setModalVisible(false)}
        style={{ marginVertical: 0, marginHorizontal: 0 }}
      >
        <View style={[CommonStyles.modalContent, { backgroundColor: "#fff" }]}>
          <CreateTaskModal
            existingTask={selectedTask}
            onSaveSuccess={loadTasks}
            onPress={() => setModalVisible(false)}

          />
        </View>
      </Modal>
    </>
  );
};

export default HomeScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  taskItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#F1F1F1',
    backgroundColor: '#F1F1F1',
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8
  },
  taskTitle: { fontSize: 18, color: '#000' },
  taskStatus: { color: '#888' },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    margin: 12,
  },
  statsTotal: {
    backgroundColor: '#FFFFFF',
    borderColor: '#195ADC',
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    color: '#195ADC'
  },
  statsCom: {
    backgroundColor: '#ECF9EF',
    borderColor: '#4CBA68',
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    color: '#4CBA68'
  },
  statsPend: {
    backgroundColor: '#FFEBEA',
    borderColor: '#C40E17',
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    color: '#C40E17'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  searchInput: {
    padding: 6,
    paddingHorizontal: 12,
    width: '60%'
  },
  filterBtn: {
    marginRight: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#747474',
    paddingLeft: 10
  },
  editBtn: {
    backgroundColor: '#195ADC',
    margin: 6,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 6
  }
});
