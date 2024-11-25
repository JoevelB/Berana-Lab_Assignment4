import React from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from './theme'; 

export default function Settings() {
  const { isDarkMode, toggleDarkMode, colors } = useTheme(); 

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: colors.background }, 
      ]}
    >
      <Text style={[styles.sectionLabel, { color: colors.text }]}>Tools and Resources</Text>
      <TouchableOpacity style={[styles.settingOption, { backgroundColor: colors.background }]}>
        <Icon name="cogs" size={18} color={colors.secondary} style={styles.icon} />
        <Text style={[styles.settingText, { color: colors.text }]}>Account Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.settingOption, { backgroundColor: colors.background }]}>
        <Icon name="key" size={18} color={colors.secondary} style={styles.icon} />
        <Text style={[styles.settingText, { color: colors.text }]}>Privacy Checkup</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.settingOption, { backgroundColor: colors.background }]}>
        <Icon name="home" size={18} color={colors.secondary} style={styles.icon} />
        <Text style={[styles.settingText, { color: colors.text }]}>Supervision</Text>
      </TouchableOpacity>

      <Text style={[styles.sectionLabel, { color: colors.text }]}>Preferences</Text>
      <TouchableOpacity
        style={[styles.settingOption, { backgroundColor: colors.background }]}
        onPress={toggleDarkMode}
      >
        <Icon
          name={isDarkMode ? 'sun-o' : 'moon-o'} 
          size={18}
          color={colors.secondary}
          style={styles.icon}
        />
        <Text style={[styles.settingText, { color: colors.text }]}>Darkmode</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.settingOption, { backgroundColor: colors.background }]}>
        <Icon name="bell" size={18} color={colors.secondary} style={styles.icon} />
        <Text style={[styles.settingText, { color: colors.text }]}>Notification</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.settingOption, { backgroundColor: colors.background }]}>
        <Icon name="language" size={18} color={colors.secondary} style={styles.icon} />
        <Text style={[styles.settingText, { color: colors.text }]}>Language</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.settingOption, { backgroundColor: colors.background }]}>
        <Icon name="universal-access" size={18} color={colors.secondary} style={styles.icon} />
        <Text style={[styles.settingText, { color: colors.text }]}>Accessibility</Text>
      </TouchableOpacity>
      
      <Text style={[styles.sectionLabel, { color: colors.text }]}>Legal Policies</Text>
      <TouchableOpacity style={[styles.settingOption, { backgroundColor: colors.background }]}>
        <Icon name="file" size={18} color={colors.secondary} style={styles.icon} />
        <Text style={[styles.settingText, { color: colors.text }]}>Terms of Service</Text>
      </TouchableOpacity>
      <View style={[styles.footerSpacing, { backgroundColor: colors.background }]} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  sectionLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  settingOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 5,
  },
  settingText: {
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  footerSpacing: {
    height: 50, 
  },
});
