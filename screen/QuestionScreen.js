import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import data from '../src/simple.json'; // Import your JSON file

const QuestionScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const wordsObject = data.GRE_Words[0]; // Access the first (and only) object inside the array
  const wordKeys = Object.keys(wordsObject); // Get all word keys (e.g., ['abate', 'aberrant', 'abjure'])
  const currentWordKey = wordKeys[currentIndex]; // Determine the current word key
  const currentWordDetails = wordsObject[currentWordKey]; // Get details for the current word

  const handleNext = () => {
    if (currentIndex < wordKeys.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setShowDetails(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      setShowDetails(false);
    }
  };

  useEffect(() => {
    console.log("Current Index Updated:", currentIndex);
  }, [currentIndex]);

  if (!currentWordDetails) {
    return <Text>Loading word...</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.wordText}>{currentWordKey}</Text>

        <TouchableOpacity onPress={() => setShowDetails(!showDetails)}>
          <Text style={styles.detailTexts}>
            Tap to {showDetails ? 'hide' : 'show'} details
          </Text>
        </TouchableOpacity>
      </View>

      {/* Only show details when showDetails is true */}
      {showDetails && (
        <View style={styles.detailsContainer}>
          {/* Meaning Section */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Meaning:</Text>
            <Text style={styles.detailText}>{currentWordDetails.meaning}</Text>
          </View>

          {/* Synonyms Section */}
          <View style={styles.sectionContainer}>
  <Text style={styles.sectionTitle}>Synonyms:</Text>
  <Text style={styles.detailText}>
    {currentWordDetails.synonyms.join(', ')}
  </Text>
</View>


        </View>
      )}
       {/* "I know that" block */}
    <View style={styles.newContainer1}>
      <Text style={styles.sectionTitle}> ✅ I know that</Text>
      {/* Add any buttons or functionality inside this container */}
    </View>


     {/* "I don't know " block */}
     <View style={styles.newContainer2}>
      <Text style={styles.sectionTitle}> ❌I don't know that</Text>
      {/* Add any buttons or functionality inside this container */}
    </View>


      {/* Adjust button container position dynamically */}
      <View
        style={[
          styles.buttonContainer,
          { marginTop: showDetails ? 20 : 0 }, // Adjust buttons position when details are shown
        ]}
      >
        <TouchableOpacity
          style={[styles.navButton, currentIndex === 0 ? { opacity: 0.5 } : {}]}
          onPress={handlePrevious}
          disabled={currentIndex === 0}
        >
          <Text style={styles.navButtonText}>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navButton,
            currentIndex === wordKeys.length - 1 ? { opacity: 0.5 } : {},
          ]}
          onPress={handleNext}
          disabled={currentIndex === wordKeys.length - 1}
        >
          <Text style={styles.navButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e6f7ff',
  },
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    width: '100%',
    marginBottom: 20,
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0d1b2a',
    marginBottom: 10,
  },
 
  wordText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  newContainer1: {
    width: '100%',
    backgroundColor: '#a2d2ff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginVertical: 10, // Combines marginTop and marginBottom
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // iOS & Android shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  newContainer2: {
    width: '100%',
    backgroundColor: '#f4acb7',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginVertical: 10, // Combines marginTop and marginBottom
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  
  toggleText: {
    fontSize: 18,
    color: '#007bff',
    marginVertical: 10,
    textAlign: 'center',
  },
  detailsContainer: {
    width: '100%',
    backgroundColor: '#fefae0',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  detailText: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
    textAlign: 'center',
  },
  detailTexts: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#555',
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  navButton: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: '#333',
    borderRadius: 8,
  },
  navButtonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});

export default QuestionScreen;
