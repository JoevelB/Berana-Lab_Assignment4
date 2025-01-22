import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          animation: 'none',
        }}
      >
        <Stack.Screen name="index" options={{
          headerShown: false
        }} />
        <Stack.Screen name="register" options={{ title: 'Registration' }} />
        <Stack.Screen name="recover" options={{ title: 'Forgot Password?' }} />
        <Stack.Screen name="dashboard"
          options={{
            title: 'Dashboard',
            headerShown: false
          }}
        />
      </Stack>
    </SafeAreaView>
  );
};

export default RootLayout;
