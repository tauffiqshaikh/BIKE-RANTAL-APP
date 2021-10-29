import React from "react";
import { Text, View, Button, StyleSheet,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { GiftedChat } from "react-native-gifted-chat";
import { icons } from "../constants";
import { FlatList } from "react-native-gesture-handler";
import {
        Card,
        MessageText,
        UserImg,
        UserName,
        TextSection,
        Container,
        UserImgWrapper,
        UserInfo,
        UserInfoText
} from "../styles/MessageStyles"


const Messages = [
  {
    id: '1',
    userName: 'Help Chat',
    userImg: icons.star,
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my app which I developed for my MCC project. Join this chat for any queries.',
  },
  
 
  
];


export default function HelpScreen({navigation}){
    return(
        <Container >
            <FlatList 
          data={Messages}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <Card onPress={() => navigation.navigate('chat', {userName: item.userName})}>
              <UserInfo>
                <UserImgWrapper>
                  <UserImg source={item.userImg} />
                </UserImgWrapper>
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.userName}</UserName>
            
                  </UserInfoText>
                  <MessageText>{item.messageText}</MessageText>
                </TextSection>
              </UserInfo>
            </Card>
          )}
        />
            
            <StatusBar 
                backgroundColor="white"
                style="dark"
                />
        </Container>

    )
}
const styles= StyleSheet.create({

    container:{
        marginTop:30,
        marginLeft:10,
        marginRight:10,
        alignItems:"center",
        justifyContent:"center",
        flex:1      
    },


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
        fontSize:20,
      },
    
    
      usrBtn:{
        backgroundColor:"orange",
        padding:5,
        margin:10,
        borderRadius:10  
      },

})