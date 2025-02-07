import React from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Beginner = () => {
  const navigation = useNavigation();

  // Data structure for vocabulary levels
  const difficultyLevels = [
    { id: '1', level: 'Vocabulary I', wordsMastered: 0, totalWords: 357 },
    { id: '2', level: 'Vocabulary II', wordsMastered: 0, totalWords: 77 },
  ];

  // Navigate to Question Screen
  const handleNavigation = (level) => {
    if (level === 'Vocabulary I') {
      navigation.navigate('VocabQuestion1', { level });
    } else if (level === 'Vocabulary II') {
      navigation.navigate('VocabQuestion2', { level });
    }
  };
  

  // Render vocabulary levels
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.levelContainer}
      onPress={() => handleNavigation(item.level)}
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

export default Beginner;
