import React from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation

const HomeScreen = () => {
  const navigation = useNavigation(); // Initialize useNavigation hook

  // Data structure representing each difficulty level with its corresponding topics
  const difficultyLevels = [
    { id: '1', level: ' Vocabulary', sections: ['level I', 'level II', 'level III'] },
    { id: '2', level: ' Text Completion', sections: ['level I', 'level II', 'level III'] },
    { id: '3', level: 'Advanced Vocabulary', sections: ['level I', 'level II', 'level III'] },
    { id: '4', level: 'Mock Tests', sections: ['Full-Length Mock Test'] },
  ];

  // Handle navigation based on difficulty level
  const handleNavigation = (level) => {
    if (level === ' Vocabulary') {
      navigation.navigate('Beginner');
      
    } else if (level === ' Text Completion') {
      navigation.navigate('Mcq'); // Make sure 'Mcq' matches the name in the Stack
    }
    // Add more conditions for other levels if needed
  };

  // Render each difficulty level
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.levelContainer} onPress={() => handleNavigation(item.level)}>
      <Text style={styles.levelTitle}>{item.level}</Text>
      <View style={styles.sectionContainer}>
        {item.sections.map((section, index) => (
          <Text key={index} style={styles.sectionItem}>{section}</Text>
        ))}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={difficultyLevels}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#e6f7ff', // Screen background color
  },
  flatListContent: {
    paddingBottom: 20, // To add spacing below the list
  },
  levelContainer: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#ffffff', // FlatList item background color
    elevation: 3,
  },
  levelTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  sectionContainer: {
    marginTop: 10,
  },
  sectionItem: {
    fontSize: 16,
    color: '#555',
    marginVertical: 5,
  },
});

export default HomeScreen;
