// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import {initializeApp} from "firebase/app";
import  firebase from "firebase"
// rimport { getFirestore} from "@firebase/firestore";
import { StyleSheet,Text, View, Yellowbox } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "firebase/firestore";


// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNyIl9zXrNqQHIWmI6-1Xh66dvfkly3qo",
  authDomain: "react-app-1a9b3.firebaseapp.com",
  projectId: "react-app-1a9b3",
  storageBucket: "react-app-1a9b3.appspot.com",
  messagingSenderId: "351954657233",
  appId: "1:351954657233:web:668c4b69b759514c534af0"
};

// // Initialize Firebase
let app;
if (firebase.apps.length ===0){

     app = firebase.initializeApp(firebaseConfig);
     
}else{
     app= firebase.app();
}

// const db= getFirestore();
const auth =firebase.auth();

const db= firebase.firestore(app);



   const load = async (id) => {
     const doc = await db.collection('bike').get();
     const x = doc.docs.map(d => d.data());
     for (let i=0; i<x.length; i++ ){
          if (x[i].id === id ) {
               console.log(x[i]);
               return x[i];

          }  
     }
   };

export {auth,db, load };