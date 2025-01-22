import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '../theme';  

const Add = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rate, setRate] = useState('');
  const { isDarkMode, colors } = useTheme();  

  const handlePost = () => {
    console.log('Project Posted:', { title, description, rate });
    setTitle('');
    setDescription('');
    setRate('');
  };

  const handleSaveDraft = () => {
    console.log('Project Saved as Draft:', { title, description, rate });
    setTitle('');
    setDescription('');
    setRate('');
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Add Project Idea</Text>

      <Text style={[styles.label, { color: colors.text }]}>Project Title</Text>
      <TextInput
        style={[styles.input, { backgroundColor: colors.card, color: colors.text }]}
        placeholder="Enter project title"
        value={title}
        onChangeText={setTitle}
        placeholderTextColor={isDarkMode ? '#bbb' : '#888'} 
      />

      <Text style={[styles.label, { color: colors.text }]}>Project Description</Text>
      <TextInput
        style={[styles.input, styles.textArea, { backgroundColor: colors.card, color: colors.text }]}
        placeholder="Enter project description"
        value={description}
        onChangeText={setDescription}
        multiline
        placeholderTextColor={isDarkMode ? '#bbb' : '#888'} 
      />

      <Text style={[styles.label, { color: colors.text }]}>Estimated Rate</Text>
      <TextInput
        style={[styles.input, { backgroundColor: colors.card, color: colors.text }]}
        placeholder="Enter estimated rate"
        value={rate}
        onChangeText={setRate}
        keyboardType="numeric"
        placeholderTextColor={isDarkMode ? '#bbb' : '#888'} 
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.postButton, { backgroundColor: colors.primary }]} onPress={handlePost}>
          <Icon name="check" size={15} color="#fff" />
          <Text style={styles.postText}>Publish</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.draftButton, { backgroundColor: '#8a8a8a' }]} onPress={handleSaveDraft}>
          <Icon name="save" size={15} color="#fff" />
          <Text style={styles.draftText}>Save as Draft</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  postButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginRight: 10,
  },
  draftButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  postText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 8,
  },
  draftText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 8,
  },
});

export default Add;
