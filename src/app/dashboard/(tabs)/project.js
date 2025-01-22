import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useTheme } from '../theme';  

const Project = () => {
  const { isDarkMode, colors } = useTheme();  

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Project Ideas</Text>

      <View style={[styles.projectItem, { backgroundColor: colors.cardBackground }]}>
        <Text style={[styles.projectName, { color: colors.primary }]}>1. MotorSekyo</Text>
        <Text style={[styles.projectDescription, { color: colors.text }]}>
          Maghimo ka ug mobile app nga mag-monitor ug mag-alert sa mga tag-iya sa ilang motor kung kini maligsan o mawala. 
          Gamiton ang GPS tracking ug alarm system para sa proteksyon sa motor gikan sa kawat.
        </Text>
        <Text style={[styles.projectRate, { color: colors.text }]}>Estimated Rate: PHP 35,000 - PHP 55,000</Text>
        <TouchableOpacity style={[styles.applyButton, { backgroundColor: colors.primary }]}>
          <Icon name="check" size={20} color="#fff" />
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.projectItem, { backgroundColor: colors.cardBackground }]}>
        <Text style={[styles.projectName, { color: colors.primary }]}>2. CodeRed</Text>
        <Text style={[styles.projectDescription, { color: colors.text }]}>
          Maghimo ka ug app nga mag-connect sa mga nanginahanglan ug dugo ug sa mga available nga blood donors sa ilang lugar. 
          Gamiton ang geolocation ug profiles aron mas dali makit-an ang mga donors ug recipients.
        </Text>
        <Text style={[styles.projectRate, { color: colors.text }]}>Estimated Rate: PHP 20,000 - PHP 40,000</Text>
        <TouchableOpacity style={[styles.applyButton, { backgroundColor: colors.primary }]}>
          <Icon name="check" size={20} color="#fff" />
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.projectItem, { backgroundColor: colors.cardBackground }]}>
        <Text style={[styles.projectName, { color: colors.primary }]}>3. LALONG Navigator</Text>
        <Text style={[styles.projectDescription, { color: colors.text }]}>
          Maghimo ka ug campus map app para sa USTP nga magpakita sa mga building, direksyon, ug updates sa mga kalihokan. 
          Gamiton ang GPS ug real-time notifications aron matabangan ang mga estudyante.
        </Text>
        <Text style={[styles.projectRate, { color: colors.text }]}>Estimated Rate: PHP 25,000 - PHP 40,000</Text>
        <TouchableOpacity style={[styles.applyButton, { backgroundColor: colors.primary }]}>
          <Icon name="check" size={20} color="#fff" />
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  projectItem: {
    marginBottom: 20,
    borderRadius: 10,
    padding: 15,
  },
  projectName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  projectDescription: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'justify',
  },
  projectRate: {
    fontSize: 16,
    marginTop: 5,
  },
  applyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  applyText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default Project;
