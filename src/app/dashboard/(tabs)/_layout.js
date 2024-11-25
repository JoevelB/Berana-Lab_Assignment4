import React from 'react';
import { Tabs } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useTheme } from '../theme';  // Import the useTheme hook

const DashboardLayout = () => {
  const { isDarkMode, colors } = useTheme(); // Access dark mode state and colors

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary, // Active tab icon and label color
        tabBarInactiveTintColor: '#000', // Inactive tab icon and label color
        tabBarActiveBackgroundColor: '#e0f2f1', // Active background color for tab
        tabBarInactiveBackgroundColor: '#ffffff', // Inactive background color for tab
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
            <Icon name={focused ? 'envelope' : 'envelope-o'} size={20} color={focused ? colors.primary : '#000'} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <Icon name={focused ? 'user' : 'user-o'} size={20} color={focused ? colors.primary : '#000'} />
          ),
        }}
      />
    </Tabs>
  );
};

export default DashboardLayout;
