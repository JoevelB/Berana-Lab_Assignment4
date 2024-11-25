import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '../theme'; 

const Profile = () => {
  const { isDarkMode, colors } = useTheme(); 

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Image source={require('../../../assets/joevel.jpeg')} style={styles.profileImage} />

        <View style={styles.nameContainer}>
          <Text style={[styles.nameText, { color: colors.text }]}>Joevel Berana</Text>
          <Icon name="check-circle" size={18} color={colors.primary} style={styles.verifiedIcon} />
        </View>

        <TouchableOpacity style={[styles.editProfileButton, { backgroundColor: colors.primary }]}>
          <Text style={[styles.editProfileText, { color: isDarkMode ? '#fff' : colors.buttonText }]}>Edit Profile</Text>
          <Icon name="edit" size={16} color={isDarkMode ? '#fff' : colors.buttonText} style={styles.editProfileIcon} />
        </TouchableOpacity>

        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={[styles.statValue, { color: isDarkMode ? '#fff' : '#000' }]}>45</Text>
            <Text style={[styles.statLabel, { color: isDarkMode ? '#fff' : 'gray' }]}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={[styles.statValue, { color: isDarkMode ? '#fff' : '#000' }]}>20</Text>
            <Text style={[styles.statLabel, { color: isDarkMode ? '#fff' : 'gray' }]}>Following</Text>
          </View>
          <View style={styles.stat}>
            <Text style={[styles.statValue, { color: isDarkMode ? '#fff' : '#000' }]}>50</Text>
            <Text style={[styles.statLabel, { color: isDarkMode ? '#fff' : 'gray' }]}>Projects</Text>
          </View>
        </View>

        <View style={[styles.divider, { backgroundColor: colors.divider }]} />

        <View style={styles.skillsContainer}>
          <Text style={[styles.skillsTitle, { color: colors.text }]}>Programming Skills</Text>

          <View style={styles.skillBarContainer}>
            <Text style={[styles.skillLabel, { color: colors.text }]}>JavaScript</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: '80%', backgroundColor: colors.primary }]} />
            </View>
          </View>

          <View style={styles.skillBarContainer}>
            <Text style={[styles.skillLabel, { color: colors.text }]}>React Native</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: '70%', backgroundColor: colors.primary }]} />
            </View>
          </View>

          <View style={styles.skillBarContainer}>
            <Text style={[styles.skillLabel, { color: colors.text }]}>Node.js</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: '60%', backgroundColor: colors.primary }]} />
            </View>
          </View>
        </View>

        <TouchableOpacity style={[styles.editSkillsButton, { backgroundColor: colors.primary }]}>
            <Text style={[styles.editSkillsText, { color: isDarkMode ? '#fff' : colors.buttonText }]}>Edit/Add Skills</Text>
            <Icon name="edit" size={16} color={isDarkMode ? '#fff' : colors.buttonText} style={styles.editSkillsIcon} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#3e7139',
    marginTop: 10,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  verifiedIcon: {
    marginLeft: 6,
  },
  editProfileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 15,
  },
  editProfileText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 8,
  },
  editProfileIcon: {
    marginLeft: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    marginVertical: 15,
    justifyContent: 'space-around',
    width: '90%',
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
  },
  divider: {
    width: '90%',
    height: 2,
    marginTop: 15,
  },
  skillsContainer: {
    width: '90%',
    marginTop: 20,
  },
  skillsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  skillBarContainer: {
    marginVertical: 8,
  },
  skillLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressBar: {
    width: '100%',
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginTop: 5,
  },
  progress: {
    height: '100%',
  },
  editSkillsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 20,
  },
  editSkillsText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 8,
  },
  editSkillsIcon: {
    marginLeft: 5,
  },
});

export default Profile;
