import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TaskListScreen from '../views/screens/allTasks/TaskListScreen';
import HomeScreens from '../views/screens/home/HomeScreens';
import ProfileScreen from '../views/screens/profile/ProfileScreen';
import NotificationScreen from '../views/screens/notifications/NotificationScreen';


const Tab = createBottomTabNavigator();
const BottomNavigator = () => {


  return (
    <Tab.Navigator

      screenOptions={{
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#8C8C8C',
        tabBarStyle: {
          height: 70,
          width: '100%',
          backgroundColor: "#fff",
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreens}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return focused ? (
              <View style={styles.labelContainer}>
                <Icon name="home" color="#000" size={22} />
                <Text style={[styles.label, { color: "#000" }]}>Home</Text>
              </View>
            ) : (
              <View style={styles.labelContainer}>
                <Icon name="home" color="#8C8C8C" size={22} />
                <Text style={styles.label}>Home</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Task list"
        component={TaskListScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <View style={styles.labelContainer}>
                <Octicons name="checklist" color="#000" size={22} />
                <Text style={[styles.label, { color: "#000" }]}>Task</Text>
              </View>
            ) : (
              <View style={styles.labelContainer}>
                <Octicons name="checklist" color="#8C8C8C" size={22} />
                <Text style={styles.label}>Task</Text>
              </View>
            );
          },
        }}
      />
       <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <View style={styles.labelContainer}>
                <Icon name="notifications" color="#000" size={22} />
                <Text style={[styles.label, { color: "#000" }]}>Notifications</Text>
              </View>
            ) : (
              <View style={styles.labelContainer}>
                <Icon name="notifications" color="#8C8C8C" size={22} />
                <Text style={styles.label}>Notifications</Text>
              </View>
            );
          },
        }}

      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <View style={styles.labelContainer}>
                <FontAwesome name="user-circle-o" color="#000" size={22} />
                <Text style={[styles.label, { color: "#000" }]}>Profile</Text>
              </View>
            ) : (
              <View style={styles.labelContainer}>
                <FontAwesome name="user-circle-o" color="#8C8C8C" size={22} />
                <Text style={styles.label}>Profile</Text>
              </View>
            );
          },
        }}
      />


    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    fontSize: 11,
    fontWeight:'bold',
    color: '#8C8C8C'
  },
});
