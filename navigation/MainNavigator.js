import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screen/Home";
import Beginner from '../screen/Beginner';  // Make sure the path is correct
import QuestionScreen from '../screen/QuestionScreen'; 
import Mcq from '../screen/Mcq';
import Mcq_question from '../screen/Mcq_question';
// Make sure the path is correct
const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true, // Display the header
          title: 'GITT', // Set the app name
          headerStyle: {
            backgroundColor: '#80ed99', // Set header background color
          },
          headerTitleStyle: {
            fontSize: 30, // Customize font size for the app name
            fontWeight: 'bold', // Bold font for the app name
            color: '#000000', // Set color of the text in the header
          },
          headerTintColor: '#fff', // Set color for the default back button or icons
        }}
      />
  <Stack.Screen name="Beginner" component={Beginner} 
   options={{
    headerShown: true, // Display the header
    title: 'Beginner Practice', // Set the app name
    headerStyle: {
      backgroundColor: '#80ed99', // Set header background color
    },
    headerTitleStyle: {
      fontSize: 20, // Customize font size for the app name
      fontWeight: 'bold', // Bold font for the app name
      color: '#000000', // Set color of the text in the header
    },
    headerTintColor: '#fff', // Set color for the default back button or icons
  }}
  
  />
 <Stack.Screen name="QuestionScreen" component={QuestionScreen} 
  options={{
    headerShown: true, // Display the header
    title: 'Beginner Practices', // Set the app name
    headerStyle: {
      backgroundColor: '#80ed99', // Set header background color
    },
    headerTitleStyle: {
      fontSize: 20, // Customize font size for the app name
      fontWeight: 'bold', // Bold font for the app name
      color: '#000000', // Set color of the text in the header
    },
    headerTintColor: '#fff', // Set color for the default back button or icons
  }}
 
 />

<Stack.Screen name="Mcq" component={Mcq} 
  options={{
    headerShown: true, // Display the header
    title: 'Mcq Practices', // Set the app name
    headerStyle: {
      backgroundColor: '#80ed99', // Set header background color
    },
    headerTitleStyle: {
      fontSize: 20, // Customize font size for the app name
      fontWeight: 'bold', // Bold font for the app name
      color: '#000000', // Set color of the text in the header
    },
    headerTintColor: '#fff', // Set color for the default back button or icons
  }}
 
 />
 <Stack.Screen name="Mcq_question" component={Mcq_question} 
  options={{
    headerShown: true, // Display the header
    title: 'Mcq Practices', // Set the app name
    headerStyle: {
      backgroundColor: '#80ed99', // Set header background color
    },
    headerTitleStyle: {
      fontSize: 20, // Customize font size for the app name
      fontWeight: 'bold', // Bold font for the app name
      color: '#000000', // Set color of the text in the header
    },
    headerTintColor: '#fff', // Set color for the default back button or icons
  }}
 
 />
    </Stack.Navigator>
  );
};

export default MainNavigator;
