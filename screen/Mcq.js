import React from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Mcq = () => {
  const navigation = useNavigation();

  // Data structure for vocabulary levels
  const difficultyLevels = [
    { id: '1', level: 'Set I', wordsMastered: 0, totalWords: 500 },
    { id: '2', level: 'Set II', wordsMastered: 0, totalWords: 77 },
  ];

  // Navigate to Question Screen with level data
  const handleNavigation = (levelData) => {
    navigation.navigate('Mcq_question', { levelData });
  };

  // Render vocabulary levels
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.levelContainer}
      onPress={() => handleNavigation(item)} // Pass entire item with data
    >
      <Text style={styles.levelTitle}>{item.level}</Text>
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>
          {item.wordsMastered} out of {item.totalWords} words mastered
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={difficultyLevels}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#e6f7ff',
  },
  flatListContent: {
    paddingBottom: 20,
  },
  levelContainer: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    elevation: 3,
  },
  levelTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  progressContainer: {
    marginTop: 10,
  },
  progressText: {
    fontSize: 16,
    color: '#555',
  },
});

export default Mcq;
