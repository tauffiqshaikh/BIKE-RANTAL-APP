import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import Tabs from "./navigation/tabs"
import { createStackNavigator } from "@react-navigation/stack";
import { View, Image, StyleSheet,  } from "react-native";
import Loginpage from "./screens/Login";
import HelpScreen from "./screens/help"
import Chatscreen from "./screens/chat";
import b1 from "./bike-details/bike1";
import b2 from "./bike-details/bike2";
import b3 from "./bike-details/bike3";
import b4 from "./bike-details/bike4";
import b5 from "./bike-details/bike5";

const Stack= createStackNavigator();

export default function App(){
return(
    <NavigationContainer
    > 
    <Stack.Navigator
    screenOptions={{
      headerShown:false,
  }}
    >
      <Stack.Screen name={"Login"} component={Loginpage} ></Stack.Screen>
      <Stack.Screen name={"Tab"}  component={Tabs} ></Stack.Screen>
      <Stack.Screen name={"message"}  component={HelpScreen} ></Stack.Screen>
      <Stack.Screen name={"chat"}  component={Chatscreen} ></Stack.Screen>
      <Stack.Screen name={"bike1"}  component={b1} ></Stack.Screen>
      <Stack.Screen name={"bike2"}  component={b2} ></Stack.Screen>
      <Stack.Screen name={"bike3"}  component={b3} ></Stack.Screen>
      <Stack.Screen name={"bike4"}  component={b4} ></Stack.Screen>
      <Stack.Screen name={"bike5"}  component={b5} ></Stack.Screen>
    </Stack.Navigator>

  </NavigationContainer>
  )
}