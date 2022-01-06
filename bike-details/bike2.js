import React from "react";
import { View, Text, TouchableOpacity, Button, Alert } from "react-native";
import * as FileSystem from 'expo-file-system';
import { auth } from "../firebase-config";
import { useEffect, useState } from "react";

export default function b1(){

    const fileUri = `${FileSystem.documentDirectory}${auth.currentUser.email}.txt`;

    const saveToLocalStorage = async (data) => {
    
        data = JSON.stringify(data);
        console.log(data);
        await FileSystem.writeAsStringAsync(fileUri, data);
        console.log(fileUri)
      };
    
    async function loadFromLocalStorage()
     {
     const data = await FileSystem.readAsStringAsync(fileUri);
     alert(data )
        console.log(JSON.parse(data));
     }

let rent=150;

let gst= rent * 12/100 

useEffect(()=>{
    saveToLocalStorage({})
},[])

    return(
       
            <View style={{
                flex:1,
                alignContent:"center",
                alignItems:"center",
                justifyContent:"center"
            }} >
                <Text style={{fontSize:40, 
                            margin:40, 
                            color:"rgb(10, 14, 122)",
                            fontStyle:"italic",
                            fontWeight:"bold" 
                            }} >
                            Road Bike
                            </Text>
                <View style={{margin:40}} >
                    <Text style={{
                        fontSize:18,
                        marginBottom:20,
                        color:"rgb(10, 14, 122)",
                        fontStyle:"italic",
                        fontWeight:"bold"
                        }} >
                        Bicycles built for traveling at speed on paved roads
                        </Text>

                    <Text  style={{fontSize:18}} >Base Rent/day = {rent} Rs</Text>
                    <Text  style={{fontSize:18}} >GST = {gst} Rs</Text>
                    <Text style={{fontSize:18}}  >Total Rent = Base Rent + GST = {rent+gst} Rs </Text>
                </View>


                <View  style={{margin:20}} >
                    <Button title="Rent Now"
                    onPress={()=> {
                        alert("Rent Successful")
                        saveToLocalStorage({email: auth.currentUser.email,
                                            bikeType: "Road bike",
                                            totalPrice: rent+gst,
                                            })
                    
                    }}
                    >
                    </Button>
                </View>

                <Button title="Summary"
                        onPress={loadFromLocalStorage}
                    >

                </Button>


            </View>
    )
}
