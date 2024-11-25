import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTheme } from '../theme';  // Import the useTheme hook

const Home = () => {
  const { colors } = useTheme(); // Access the theme colors

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.logoContainer}>
        <View style={styles.circleContainer}>
          <Image 
            source={require('../../../assets/AppLogo.png')} 
            style={styles.logo} 
            resizeMode="cover" 
          />
        </View>
      </View>
      <Text style={[styles.title, { color: colors.text }]}>Welcome to JB Dynamics!</Text>
      <Text style={[styles.description, { color: colors.text }]}>
        JB Dynamics helps programmers find mobile programming jobs and connect with clients. 
        It’s a simple way to showcase skills, work on projects, and be part of a growing tech community.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  circleContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Adjust based on dark mode
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    overflow: 'hidden',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
    marginVertical: 5,
  },
});

export default Home;
