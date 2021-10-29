import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Tabs from '../navigation/tabs';
import { useState , useEffect} from 'react';
import { Value } from 'react-native-reanimated';
import { onChange } from 'react-native-reanimated';
import {auth } from "../firebase-config"
import { useNavigation } from '@react-navigation/core';


export default function Loginpage() {
  
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const navigation=useNavigation();

useEffect(()=>{
  const unsubscribe = auth.onAuthStateChanged(user =>{
    if(user){
      navigation.replace("Tab")
    }
  })
  return unsubscribe;
})



const handleSignup =()=>{
  auth
  .createUserWithEmailAndPassword(email, password)
  .then(userCredentials => {
    const user =userCredentials.user;
    console.log("registered with user.email");
  })
  .catch(error => alert(error.message))
}

const handleLogin =()=>{
  auth
  .signInWithEmailAndPassword(email, password)
  .then(userCredentials => {
    const user =userCredentials.user;
    console.log( "logged in with user.email");
  })
  .catch(error => alert(error.message))
}


  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.title}>Get Started !</Text>


      <TextInput
      style={styles.input}
      placeholder="Email"
      value={email}
      onChangeText={text => setEmail(text)}
      />

      <TextInput
      style={styles.input}
      placeholder="enter password"
      secureTextEntry ={true}
      value={password}
      onChangeText={text => setPassword(text)}
      />

      <View style={styles.BtnContainer}>
        <TouchableOpacity
        style={styles.usrBtn}
        onPress={handleLogin}
        >
          <Text style= {styles.BtnText}>LOGIN</Text>
        </TouchableOpacity>
        </View>

        {/* <Text style={{fontSize:20, fontStyle:"italic",color:"rgb(247, 247, 247)",}}>Don't have an account?</Text> */}


      <StatusBar 
      backgroundColor="white"
      style="dark"
      />
      <TouchableOpacity
        style={styles.usrBtn}
        onPress={ handleSignup}
        >
          <Text style={styles.BtnText}
                        >REGISTER
                        </Text>
        </TouchableOpacity>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"rgb(62, 150, 201)",
    alignItems: 'center',
    justifyContent: 'center',
  },


  title:{
    fontWeight:"bold",
    fontSize:50,
    color:"rgb(15, 64, 92)",
    fontStyle:"italic",
  },

  input:{
    width:'70%',
    backgroundColor:"rgb(237, 237, 237)",
    margin:10,
    padding:5,
    width:"50%",
  },

  BtnContainer:{
    flexDirection:"column",
    justifyContent:"center",
  },

  BtnText:{
    color:"rgb(255, 255, 255)",
    fontWeight:'700',
    justifyContent:"center",
    fontSize:30,
  },


  usrBtn:{
    backgroundColor:"black",
    padding:5,
    margin:10,
    borderRadius:10  
  },
   
});
