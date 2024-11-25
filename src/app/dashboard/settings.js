import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(false); // State to track dark mode

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, isDarkMode && styles.darkContainer]}>
      {/* Tools and Resources Section */}
      <Text style={[styles.sectionLabel, isDarkMode && styles.darkText]}>Tools and Resources</Text>
      <TouchableOpacity style={[styles.settingOption, isDarkMode && styles.darkOption]}>
        <Icon name="cogs" size={18} color={isDarkMode ? '#dcdcdc' : '#3e7139'} style={styles.icon} />
        <Text style={[styles.settingText, isDarkMode && styles.darkText]}>Account Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.settingOption, isDarkMode && styles.darkOption]}>
        <Icon name="key" size={18} color={isDarkMode ? '#dcdcdc' : '#3e7139'} style={styles.icon} />
        <Text style={[styles.settingText, isDarkMode && styles.darkText]}>Privacy Checkup</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.settingOption, isDarkMode && styles.darkOption]}>
        <Icon name="home" size={18} color={isDarkMode ? '#dcdcdc' : '#3e7139'} style={styles.icon} />
        <Text style={[styles.settingText, isDarkMode && styles.darkText]}>Supervision</Text>
      </TouchableOpacity>

      {/* Preferences Section */}
      <Text style={[styles.sectionLabel, isDarkMode && styles.darkText]}>Preferences</Text>
      <TouchableOpacity style={[styles.settingOption, isDarkMode && styles.darkOption]} onPress={toggleDarkMode}>
        <Icon 
          name={isDarkMode ? "sun-o" : "moon-o"} // Change icon based on dark mode state
          size={18} 
          color={isDarkMode ? '#dcdcdc' : '#6b8f71'} 
          style={styles.icon} 
        />
        <Text style={[styles.settingText, isDarkMode && styles.darkText]}>Darkmode</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.settingOption, isDarkMode && styles.darkOption]}>
        <Icon name="bell" size={18} color={isDarkMode ? '#dcdcdc' : '#6b8f71'} style={styles.icon} />
        <Text style={[styles.settingText, isDarkMode && styles.darkText]}>Notification</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.settingOption, isDarkMode && styles.darkOption]}>
        <Icon name="language" size={18} color={isDarkMode ? '#dcdcdc' : '#6b8f71'} style={styles.icon} />
        <Text style={[styles.settingText, isDarkMode && styles.darkText]}>Language</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.settingOption, isDarkMode && styles.darkOption]}>
        <Icon name="universal-access" size={18} color={isDarkMode ? '#dcdcdc' : '#6b8f71'} style={styles.icon} />
        <Text style={[styles.settingText, isDarkMode && styles.darkText]}>Accessibility</Text>
      </TouchableOpacity>

      {/* Legal Policies Section */}
      <Text style={[styles.sectionLabel, isDarkMode && styles.darkText]}>Legal Policies</Text>
      <TouchableOpacity style={[styles.settingOption, isDarkMode && styles.darkOption]}>
        <Icon name="file" size={18} color={isDarkMode ? '#dcdcdc' : '#3e7139'} style={styles.icon} />
        <Text style={[styles.settingText, isDarkMode && styles.darkText]}>Terms of Service</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  sectionLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3e7139',
    marginVertical: 10,
  },
  darkText: {
    color: '#dcdcdc', // Dark mode text color
  },
  settingOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    // Removed borderBottomWidth and borderBottomColor to eliminate the lines between touchables
  },
  darkOption: {
    backgroundColor: 'transparent', // Removes background color in dark mode
  },
  settingText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
  icon: {
    marginRight: 10,
  },
});
