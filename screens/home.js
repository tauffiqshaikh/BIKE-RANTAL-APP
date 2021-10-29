import React, { useEffect, useState } from "react";
import { Text, View, Button, StyleSheet, Image,SafeAreaView,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import Locationcheck from "../location";
import  firebase from "firebase";
import {  db, load } from "../firebase-config";
import app from "../firebase-config";

import { icons, images } from "../constants";

export default function HomeScreen({navigation}){

    return(
    
            <View style={styles.containr} >  
              <View style={styles.textcontainer} >
                <Text
                style={{
                  fontSize:50,
                  fontWeight:"bold",
                  fontStyle:"italic",
                  alignItems:"center",
                  justifyContent:"center",
                  alignContent:"center",
                  marginLeft:38,
                  marginTop:30,
                  color:"white",
                }}
                >Bikes for Rent</Text>
              </View  >           
              
              <View style={{height:570,  }}>
                <ScrollView
               
                style={{height:400}}
                >
                      {/* Bike1 */}
                  <TouchableOpacity
                   style={styles.btn}
                   onPress={()=>{
                     
                    navigation.navigate("bike1")
                    const bike1 =load(1);

                  }}
              
                  >
                    <View style={{
                      justifyContent:"center",
                      alignItems:"center"
                    }}>
                      <Image
                      source= {images.mountain}
                      style={styles.image}
                      />
                    </View>
                    <View style={styles.subtitlecont}><Text style={styles.subtitle}>Mountain bike</Text></View>
                  </TouchableOpacity>

                      {/* Bike2 */}
                  <TouchableOpacity
                  style={styles.btn}
                  onPress={()=>{
                     
                    navigation.navigate("bike2")
                    const bike2 = load(2);

                  }}
                  >
                    <View style={{
                      justifyContent:"center",
                      alignItems:"center"
                    }}>
                      <Image
                      source= {images.road}
                      style={styles.image}
                      />
                    </View>
                    <View style={styles.subtitlecont}><Text style={styles.subtitle}>Road bike</Text></View>
                  </TouchableOpacity>

{/*                    Bike3 */}
                  <TouchableOpacity
                   style={styles.btn}
                   onPress={()=>{
                     
                    navigation.navigate("bike3")
                    const bike3 = load(3);

                  }}
                  >
                    <View style={{
                      justifyContent:"center",
                      alignItems:"center"
                    }}>
                      <Image
                      source= {images.electric}
                      style={styles.image}
                      />
                    </View>
                    <View style={styles.subtitlecont}><Text style={styles.subtitle}>Electric bike</Text></View>
                  </TouchableOpacity>

{/*                          bike4 */}
                  <TouchableOpacity
                   style={styles.btn}
                   onPress={()=>{
                     
                    navigation.navigate("bike4")
                    const bike4 = load(4);

                  }}
                  >
                    <View style={{
                      justifyContent:"center",
                      alignItems:"center"
                    }}>
                      <Image
                      source= {images.kids}
                      style={styles.image}
                      />
                    </View>
                    <View style={styles.subtitlecont}><Text style={styles.subtitle}>Kids' bike</Text></View>
                  </TouchableOpacity>

                  {/* bike5 */}
                  <TouchableOpacity
                   style={styles.btn}
                   onPress={()=>{
                     
                    navigation.navigate("bike5")
                    const bike5 = load(5);

                  }}
                  >
                    <View style={{
                      justifyContent:"center",
                      alignItems:"center"
                    }}>
                      <Image
                      source= {images.folding}
                      style={styles.image}
                      />
                    </View>
                    <View style={styles.subtitlecont}><Text style={styles.subtitle}>Folding bike</Text></View>
                  </TouchableOpacity>
                </ScrollView>
              </View>
              <StatusBar 
                backgroundColor="white"
                style="dark"
                />
            </View>
            

    )
}

const styles= StyleSheet.create({

  btn:{
    height:250,
    backgroundColor:"#0096c7",
    elevation:2,
    width:394,
    borderRadius:100,
    marginTop:20,
    marginBottom:20,

    
  },

    subtitlecont:{
      alignItems:"center",
    },

    image:{
      width:400,
      height:200,
      borderRadius:100
    },


    subtitle:{
      fontSize:30,
      fontStyle:"italic",
      color:"black"
    },


    textcontainer:{
      backgroundColor: "rgb(62, 150, 201)",
      height:150,
      
      
    },

    containr:{
        marginTop:30
        
    },



})