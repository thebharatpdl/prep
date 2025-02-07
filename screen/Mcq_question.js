import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import mcqData from "../src/mcq.json"; // Adjust the path to mcq.json

const QuestionScreen = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [checkedAnswers, setCheckedAnswers] = useState(null);
  const [showAnswers, setShowAnswers] = useState(false);

  const handleOptionSelect = (questionId, placeholder, option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        [placeholder]: option,
      },
    }));
  };

  const handleNext = () => {
    if (currentIndex < mcqData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCheckedAnswers(null); // Reset checked answers for the next question
      setShowAnswers(false);   // Hide answers when navigating to the next question
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setCheckedAnswers(null); // Reset checked answers for the previous question
      setShowAnswers(false);   // Hide answers when navigating to the previous question
    }
  };

  const checkAnswers = () => {
    const currentQuestion = mcqData[currentIndex];
    const answerDetails = {};

    // Checking answers for the current question
    Object.keys(currentQuestion.answers).forEach((key) => {
      const selected = selectedAnswers[currentQuestion.id]?.[key];
      const correctAnswer = currentQuestion.answers[key];

      answerDetails[key] = {
        selected: selected || "Not Selected",
        correct: correctAnswer,
        isCorrect: selected === correctAnswer, // Check if the answer is correct
      };
    });

    // Store answer details and show the answers
    setCheckedAnswers(answerDetails);
    setShowAnswers(true); // Show answers after checking
  };

  const hideAnswers = () => {
    setShowAnswers(false); // Hides the answers when "Hide Answers" is clicked
  };

  const { text, options, id } = mcqData[currentIndex];
  const questionText = Object.keys(options).reduce((acc, key) => {
    const selected = selectedAnswers[id] && selectedAnswers[id][key];
    return acc.replace(`{${key}}`, selected || `___${key}___`);
  }, text);

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{questionText}</Text>

      {/* Displaying All Options in Separate Lines */}
      <View style={styles.optionsContainer}>
        {Object.keys(options).map((key) => {
          return options[key].map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedAnswers[id] && selectedAnswers[id][key] === option
                  ? { borderColor: 'green' }
                  : { borderColor: 'gray' }
              ]}
              onPress={() => handleOptionSelect(id, key, option)}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedAnswers[id] && selectedAnswers[id][key] === option
                    ? { color: 'green' }
                    : { color: 'black' },
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ));
        })}
      </View>
      
      {/* Check Answers Button */}
      <Button
        title={showAnswers ? "Hide Answers" : "Check Answers"}
        onPress={showAnswers ? hideAnswers : checkAnswers}
        style={styles.checkButton}
        color="#007bff"
      />

      {/* Display Correct Answers */}
      {showAnswers && checkedAnswers && (
        <View style={styles.answerContainer}>
          <Text style={styles.answerText}>Correct Answers:</Text>
          {Object.keys(checkedAnswers).map((key) => (
            <Text key={key} style={styles.answerDetail}>
              Answer {key}: {checkedAnswers[key].correct}
              {checkedAnswers[key].selected !== "Not Selected" && (
                <Text style={styles.icon}>
                  {checkedAnswers[key].isCorrect ? " ✅" : " ❌"}
                </Text>
              )}
            </Text>
          ))}
        </View>
      )}

      {/* Navigation Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.navButton, currentIndex === 0 ? { opacity: 0.5 } : {}]}
          onPress={handlePrevious}
          disabled={currentIndex === 0}
        >
          <Text style={styles.navButtonText}>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navButton, currentIndex === mcqData.length - 1 ? { opacity: 0.5 } : {}]}
          onPress={handleNext}
          disabled={currentIndex === mcqData.length - 1}
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
    backgroundColor: '#e6f7ff', // Light blue background
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  optionsContainer: {
    marginBottom: 20,
  },
  optionsContainer1: {
    marginBottom: 20,
    flexDirection: "column",
  },
  optionButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  optionText: {
    fontSize: 16,
    textAlign: 'center',
  },
  checkButton: {
    marginTop: 20,
  },
  answerContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#a2d2ff', // Light blue answer section
  },
  answerText: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  answerDetail: {
    fontSize: 16,
    marginBottom: 5,
  },
  icon: {
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  navButton: {
    padding: 10,
    backgroundColor: '#007bff', // Primary blue for buttons
    borderRadius: 5,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 18,
  },

});
export default QuestionScreen;