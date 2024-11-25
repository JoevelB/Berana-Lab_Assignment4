// app/screens/Inbox.js
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { useTheme } from '../theme'; 

const Inbox = () => {
  const { isDarkMode, colors } = useTheme();  

  // Sample notification message
  const notifications = [
    { id: '1', name: 'Gabriel Felicitas', message: 'Good Morning Mr. Berana! Gusto kaayo ko magtinabangay ta sa BuyNaBay project. Naa kay panahon?' },
    { id: '2', name: 'John Lloyd Morden', message: 'Good Day Sir! Pwede pa magg-apil sa BuyNaBay project. When ta start?' },
    { id: '3', name: 'Emmanuel Redoble', message: 'Nice ang idea sa BuyNaBay project Mr Berana. Can we work on this?' },
    { id: '4', name: 'Allyn Kyle Cambaya', message: 'Hello Boss! Interesado ko nga magtrabaho sa BuyNaBay project. Pwede ba ta magsabot?' },
    { id: '5', name: 'John Kenneth Pang-an', message: 'Good Evening Sir! Excited ko mag-apil sa BuyNaBay project. Karon ba ang imong schedule?' },
    { id: '6', name: 'Evegen Dela Cruz', message: 'Ganahan ko sa offer aning BuyNaBay project. Asa ta magsugod?' },
    { id: '7', name: 'Alaiza Rose Olores', message: 'Good Morning Mr. Joevel! Ready ko nga mag-apil sa BuyNaBay project. Unsa may next step nato?' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Messages</Text>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="search" size={30} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.notificationCard, { backgroundColor: colors.card, borderLeftColor: colors.primary }]}>
            <Text style={[styles.name, { color: colors.primary }]}>{item.name}</Text>
            <Text style={[styles.message, { color: colors.text }]}>{item.message}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  iconContainer: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 45,
    textAlign: 'center',
    flex: 1,
  },
  notificationCard: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
    borderLeftWidth: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  message: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default Inbox;
