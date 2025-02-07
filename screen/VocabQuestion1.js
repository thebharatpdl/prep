import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "vocab_current_index"; // Key to store index

const VocabQuestion1 = () => {
    const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bht1010/sorces/main/simple.json")
            .then((response) => response.json())
            .then((json) => {
                // Convert the object into an array of { word, details } objects
                const vocabArray = Object.entries(json).map(([word, details]) => ({
                    word,
                    details
                }));
                setData(vocabArray);
            })
            .catch((error) => console.error("Error fetching JSON:", error));

        loadStoredIndex(); // Load index when component mounts
    }, []);

    // Load stored index from AsyncStorage
    const loadStoredIndex = async () => {
        try {
            const storedIndex = await AsyncStorage.getItem(STORAGE_KEY);
            if (storedIndex !== null) {
                setCurrentIndex(parseInt(storedIndex, 10));
            }
        } catch (error) {
            console.error("Error loading stored index:", error);
        }
    };

    // Save current index to AsyncStorage
    const saveIndex = async (index) => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, index.toString());
        } catch (error) {
            console.error("Error saving index:", error);
        }
    };

    if (!data.length) {
        return <Text style={styles.loadingText}>Loading...</Text>;
    }

    const currentWord = data[currentIndex].word;
    const currentWordDetails = data[currentIndex].details;

    const handleNext = () => {
        if (currentIndex < data.length - 1) {
            const newIndex = currentIndex + 1;
            setCurrentIndex(newIndex);
            saveIndex(newIndex);
            setShowDetails(false);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            const newIndex = currentIndex - 1;
            setCurrentIndex(newIndex);
            saveIndex(newIndex);
            setShowDetails(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.wordText}>{currentWord}</Text>

            <TouchableOpacity onPress={() => setShowDetails(!showDetails)}>
                <Text style={styles.detailToggleText}>
                    {showDetails ? "Hide details" : "Show details"}
                </Text>
            </TouchableOpacity>

            {showDetails && (
                <View style={styles.detailsContainer}>
                    <Text style={styles.sectionTitle}>Meaning:</Text>
                    <Text style={styles.detailText}>• {currentWordDetails.meaning}</Text>

                    <Text style={styles.sectionTitle}>Synonyms:</Text>
                    {currentWordDetails.synonyms.map((synonym, index) => (
                        <Text key={index} style={styles.detailText}>• {synonym}</Text>
                    ))}
                </View>
            )}

            {/* "I know that" block */}
            <View style={styles.newContainer1}>
                <Text style={styles.sectionTitle}> ✅ I know that</Text>
            </View>

            {/* "I don't know that" block */}
            <View style={styles.newContainer2}>
                <Text style={styles.sectionTitle}> ❌ I don't know that</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.navButton, currentIndex === 0 ? styles.disabledButton : {}]}
                    onPress={handlePrevious}
                    disabled={currentIndex === 0}
                >
                    <Text style={styles.navButtonText}>Previous</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.navButton, currentIndex === data.length - 1 ? styles.disabledButton : {}]}
                    onPress={handleNext}
                    disabled={currentIndex === data.length - 1}
                >
                    <Text style={styles.navButtonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


    const styles = StyleSheet.create({
      container: { flex: 1, padding: 20, backgroundColor: "#e6f7ff" },
      loadingText: { fontSize: 20, textAlign: "center", marginTop: 20 },
      wordText: { fontSize: 30, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
      detailToggleText: { fontSize: 18, fontStyle: "italic", textAlign: "center", color: "#007bff" },
      detailsContainer: { padding: 15, backgroundColor: "#fefae0", borderRadius: 10, marginTop: 20 },
      sectionTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 5 },
      detailText: { fontSize: 18, textAlign: "left", marginBottom: 5 },
      buttonContainer: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 40, marginTop: 20 },
      navButton: { paddingVertical: 12, paddingHorizontal: 30, backgroundColor: "#333", borderRadius: 8 },
      disabledButton: { opacity: 0.5 },
      navButtonText: { fontSize: 16, color: "#fff", textAlign: "center" },
      newContainer1: {
          width: '100%',
          backgroundColor: '#a2d2ff',
          borderRadius: 10,
          padding: 10,
          alignItems: 'center',
          marginVertical: 10,
          elevation: 3,
          shadowColor: '#000',
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
          marginVertical: 10,
          elevation: 3,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
      },
  });
  
  export default VocabQuestion1;