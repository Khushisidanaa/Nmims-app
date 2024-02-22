import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getFirestore, doc, setDoc , collection} from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./../firebase/firebase.js"
import 'firebase/auth';
import 'firebase/firestore';

 initializeApp(firebaseConfig);

const SignUp = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [sapID, setSapID] = useState('');
  
    const handleSignUp = async () => {
      try {
        const auth = getAuth();
        const firestore = getFirestore();
  
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
  
        const userRef = doc(collection(firestore, 'Students'), userCredential.user.uid);
        await setDoc(userRef, {
          name: name,
          sapID: sapID,
          email: email,
        });
  
        console.log('User signed up and data saved.');
        navigation.navigate('StudentLandingScreen')
      } catch (error) {
        console.error(error);
      }
     
    };
  
    return (
        <SafeAreaView style={{margin:20, flex:1,marginHorizontal:30}}>
            <Text style={{marginTop:80, fontSize:22,color:"#8F2E24", fontWeight:800, textAlign:"center"}}>Sign Up</Text>
      <View style={{marginTop:50}}>
        <View>
        <Text>Enter your name:</Text>
        <TextInput value={name} onChangeText={setName} style={{color:"#8E8E93",borderColor:"black", borderWidth:1, paddingHorizontal:20, borderRadius:10, paddingVertical:10, marginVertical:10}} placeholder='Name:' placeholderTextColor={"#8E8E93"}/>
  
        <Text>Enter your Sap ID:</Text>
        <TextInput value={sapID} onChangeText={setSapID}style={{color:"#8E8E93",borderColor:"black", borderWidth:1, paddingHorizontal:20, borderRadius:10, paddingVertical:10, marginVertical:10}} placeholder='SAP ID: ' placeholderTextColor={"#8E8E93"}/>
        <Text>Enter your email:</Text>
        <TextInput value={email} onChangeText={setEmail} style={{color:"#8E8E93",borderColor:"black", borderWidth:1, paddingHorizontal:20, borderRadius:10, paddingVertical:10, marginVertical:10}} placeholder='Email Address:' placeholderTextColor={"#8E8E93"}  />
        </View>
        <Text>Enter your password:</Text>
        <TextInput value={password} onChangeText={setPassword} secureTextEntry style={{color:"#8E8E93",borderColor:"black", borderWidth:1, paddingHorizontal:20, borderRadius:10, paddingVertical:10, marginVertical:10}} placeholder='Password:' placeholderTextColor={"#8E8E93"}  />
  
        <TouchableOpacity onPress={handleSignUp} style={{marginTop:20,backgroundColor:"#8F2E24" , height:50, borderRadius:10,alignItems:"center", justifyContent:"center"}}>
            <Text style={{textAlign:'center', color:"white", fontWeight:"700"}}>Sign Up</Text>
        </TouchableOpacity>
  
       
      </View>
      </SafeAreaView>
    );
  };
  
  export default SignUp;