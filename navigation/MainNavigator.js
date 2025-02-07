import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import Home from "../screen/Home";
import Profile from "../screen/Profile";
import Analyze from "../screen/Analyze";
import Beginner from '../screen/Beginner';
import VocabQuestion1 from '../screen/VocabQuestion1';
import VocabQuestion2 from '../screen/VocabQuestion2';
import Mcq from '../screen/Mcq';
import Mcq_question from '../screen/Mcq_question';

// Create Bottom Tabs & Stack Navigators
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack for Home (includes MainNavigator screens)
const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="HomeScreen" 
      component={Home} 
      options={{ 
        headerShown: true, 
        title: "GITT",
        headerStyle: { backgroundColor: "#80ed99" },
        headerTitleStyle: { fontSize: 30, fontWeight: "bold", color: "#000000" },
        headerTintColor: "#fff",
      }} 
    />
    <Stack.Screen 
      name="Beginner" 
      component={Beginner} 
      options={{ 
        headerShown: true, 
        title: "Beginner Practice",
        headerStyle: { backgroundColor: "#80ed99" },
        headerTitleStyle: { fontSize: 20, fontWeight: "bold", color: "#000000" },
        headerTintColor: "#fff",
      }} 
    />
    <Stack.Screen 
      name="VocabQuestion1" 
      component={VocabQuestion1} 
      options={{ 
        headerShown: true, 
        title: "Beginner Practices",
        headerStyle: { backgroundColor: "#80ed99" },
        headerTitleStyle: { fontSize: 20, fontWeight: "bold", color: "#000000" },
        headerTintColor: "#fff",
      }} 
    />
    <Stack.Screen 
      name="VocabQuestion2" 
      component={VocabQuestion2} 
      options={{ 
        headerShown: true, 
        title: "Beginner Practices",
        headerStyle: { backgroundColor: "#80ed99" },
        headerTitleStyle: { fontSize: 20, fontWeight: "bold", color: "#000000" },
        headerTintColor: "#fff",
      }} 
    />
    <Stack.Screen 
      name="Mcq" 
      component={Mcq} 
      options={{ 
        headerShown: true, 
        title: "Mcq Practices",
        headerStyle: { backgroundColor: "#80ed99" },
        headerTitleStyle: { fontSize: 20, fontWeight: "bold", color: "#000000" },
        headerTintColor: "#fff",
      }} 
    />
    <Stack.Screen 
      name="Mcq_question" 
      component={Mcq_question} 
      options={{ 
        headerShown: true, 
        title: "Mcq Practices",
        headerStyle: { backgroundColor: "#80ed99" },
        headerTitleStyle: { fontSize: 20, fontWeight: "bold", color: "#000000" },
        headerTintColor: "#fff",
      }} 
    />
  </Stack.Navigator>
);

// Stack for Profile
const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="ProfileScreen" 
      component={Profile} 
      options={{ 
        headerShown: true, 
        title: "Profile",
        headerStyle: { backgroundColor: "#80ed99" },
        headerTitleStyle: { fontSize: 20, fontWeight: "bold", color: "#000000" },
        headerTintColor: "#fff",
      }} 
    />
  </Stack.Navigator>
);

// Stack for Analyze
const AnalyzeStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="AnalyzeScreen" 
      component={Analyze} 
      options={{ 
        headerShown: true, 
        title: "Analyze",
        headerStyle: { backgroundColor: "#80ed99" },
        headerTitleStyle: { fontSize: 20, fontWeight: "bold", color: "#000000" },
        headerTintColor: "#fff",
      }} 
    />
  </Stack.Navigator>
);

// Bottom Tab Navigator
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Home") {
            return <AntDesign name="home" size={size} color={color} />;  // ✅ AntDesign
          } else if (route.name === "Analyze") {
            return <Ionicons name="bar-chart-outline" size={size} color={color} />; // ✅ Ionicons
          } else if (route.name === "Profile") {
            return <Entypo name="user" size={size} color={color} />; // ✅ Entypo
          }
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { height: 60, paddingBottom: 10 },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeStack} 
        options={{ title: "Home", headerShown: false }} 
      />
      <Tab.Screen 
        name="Analyze" 
        component={AnalyzeStack} 
        options={{ title: "Analyze", headerShown: false }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileStack} 
        options={{ title: "Profile", headerShown: false }} 
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;