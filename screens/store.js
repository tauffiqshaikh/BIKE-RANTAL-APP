import React from "react";
import { render } from "react-dom";
import { View, StyleSheet, Text,Button } from "react-native";
import { db } from "../firebase-config";
import { useState,useEffect } from "react";
import * as FileSystem from 'expo-file-system';
import { auth } from "../firebase-config";

export default function store(){

    const fileUri = `${FileSystem.documentDirectory}${auth.currentUser.email}.txt`;

    const saveToLocalStorage = async () => {
        let data = '';
       
        await FileSystem.writeAsStringAsync(fileUri, data);
      };
    
    async function loadFromLocalStorage()
     {
     const savedSymbols = (await FileSystem.readAsStringAsync(fileUri))
      
     }

    return(
        <View style={{flex:1,alignContent:"center", alignItems:"center", justifyContent:"center"}} >
            <Text>hello</Text>
            <Button title="save"
            onPress={ saveToLocalStorage  }
            ></Button>
        </View>
    )
}