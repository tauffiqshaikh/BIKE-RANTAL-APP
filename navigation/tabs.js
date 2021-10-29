import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home";
import UserScreen from "../screens/user";
import HelpScreen from "../screens/help";
import React from "react";
import {icons } from "../constants";
import { Image,View } from "react-native";
import Locationcheck from "../location";

const Tab = createBottomTabNavigator();

export default function Tabs(){
    return(
        <Tab.Navigator
        screenOptions={{
            headerShown:false,
            tabBarStyle:{
                backgroundColor:"#023e8a",
                elevation:0,
                height:60,
                
                
                position:"absolute",
                
                
            }
            
        }}
        
        >
            <Tab.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
                tabBarIcon:({focused})=>(
                    <Image
                    source={icons.Home}
                    resize="contain"
                    style={{width:25, height:25,
                        tintColor: focused ? "black" : "rgb(188, 196, 189)"}}
                    />
                )
            }}
            >
            </Tab.Screen>

            <Tab.Screen 
            name="Help" 
            component={HelpScreen}
            options={{
                tabBarIcon:({focused})=>(
                    <Image
                    source={icons.help}
                    resize="contain"
                    style={{width:25, height:25,
                        tintColor: focused ? "black" : "rgb(188, 196, 189)"}}
                    />
                )
            }}
            >
            </Tab.Screen>


            <Tab.Screen 
            name="User" 
            component={UserScreen}
            options={{
                tabBarIcon:({focused})=>(
                    <Image
                    source={icons.user}
                    resize="contain"
                    style={{width:25, height:25,
                        tintColor: focused ? "black" : "rgb(188, 196, 189)"}}
                    />
                )
            }}
            >
            </Tab.Screen>

            <Tab.Screen 
            name="Location" 
            component={Locationcheck}
            options={{
                tabBarIcon:({focused})=>(
                    <Image
                    source={icons.gmaps}
                    resize="contain"
                    style={{width:25, height:25,
                        tintColor: focused ? "black" : "rgb(188, 196, 189)"}}
                    />
                )
            }}
            >
            </Tab.Screen>
            
        </Tab.Navigator>
    )
}