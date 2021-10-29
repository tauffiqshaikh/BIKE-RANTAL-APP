import React from "react";
import { Text, View, Button, StyleSheet,TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { auth } from "../firebase-config";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/core";
import { COLORS } from "../constants";


export default function UserScreen(){

    const navigation= useNavigation();

    const handleSignOut=()=>{
        auth.signOut()
        .then(()=>{
            navigation.replace("Login")
        })
        .catch(error=> alert(error.message))
        console.log("signed out")
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title} >Email: {auth.currentUser?.email}</Text>

        <View style={styles.BtnContainer}>
            <TouchableOpacity
            onPress={handleSignOut}
            style={styles.usrBtn}
            >
              <Text style= {styles.BtnText}>Logout</Text>
            </TouchableOpacity>
        </View>


            <StatusBar 
      backgroundColor="white"
      style="dark"
            />
        </View>
        
    )
}

const styles= StyleSheet.create({

    input:{
        backgroundColor:"rgb(237, 237, 237)",
        margin:10,
        padding:5,
        width:"50%",
      },
    
      BtnContainer:{
        flexDirection:"column",
        justifyContent:"center",
        marginTop:20
      },

    title:{
        fontWeight:"bold",
        fontSize:20,
        color:"black",
        fontStyle:"italic",
      },

    container:{
        marginTop:30,
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        
    },

    
      BtnText:{
        color:"rgb(255, 255, 255)",
        fontWeight:'700',
        justifyContent:"center",
        fontSize:40,
      },
    
    
      usrBtn:{
       
        padding:5,
  
        margin:10,
        borderRadius:10 ,
        backgroundColor:"black",    
      },
       
})