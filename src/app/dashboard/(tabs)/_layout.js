import React from 'react';
import { Tabs } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useTheme } from '../theme';  

const DashboardLayout = () => {
  const { isDarkMode, colors } = useTheme(); 

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary, 
        tabBarInactiveTintColor: '#000', 
        tabBarActiveBackgroundColor: '#e0f2f1', 
        tabBarInactiveBackgroundColor: '#ffffff', 
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          marginBottom: 5,
          borderRadius: 10,
          height: 60,
          backgroundColor: colors.background, // Adjust background based on the theme
          borderTopWidth: 2,
          borderColor: colors.primary, // Adjust border color based on theme
        },
        tabBarShowLabel: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <Icon name="home" size={20} color={focused ? colors.primary : '#000'} />
          ),
        }}
      />
      <Tabs.Screen
        name="project"
        options={{
          title: 'Projects',
          tabBarIcon: ({ focused }) => (
            <Icon name="folder" size={20} color={focused ? colors.primary : '#000'} />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <Icon name="plus" size={30} color={focused ? colors.primary : '#000'} />
          ),
          tabBarLabel: '',
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: 'Inbox',
          tabBarIcon: ({ focused }) => (
            <Icon name="envelope" size={20} color={focused ? colors.primary : '#000'} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <Icon name="user" size={20} color={focused ? colors.primary : '#000'} />
          ),
        }}
      />
    </Tabs>
  );
};

export default DashboardLayout;
