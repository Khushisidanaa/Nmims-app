
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  Pressable,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import StudentLandingScreen from "./StudentLandingScreen";

const StudentLogin = ({navigation}) => {

  const auth = getAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    setError('');

   

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Login successful
        const user = userCredential.user;
        console.log('Login successful:', user)
        navigation.navigate('StudentLandingScreen');
        // Continue with the desired logic after successful login
      })
      .catch((error) => {
        // Handle login error
        setError(error.message);
        console.log('Login error:', error);
      });
  };

  return (
    // Your JSX components and UI elements for the login form

    // Example form inputs:
    <SafeAreaView style={{margin:20, flex:1,marginHorizontal:30}}>
    <Text style={{marginTop:80, fontSize:22,color:"#8F2E24", fontWeight:800, textAlign:"center"}}>Login</Text>
<View style={{marginTop:50}}>
<View>
<Text>Enter your email ID :</Text>
<TextInput type="email" value={email} onChangeText={setEmail} style={{color:"#8E8E93",borderColor:"black", borderWidth:1, paddingHorizontal:20, borderRadius:10, paddingVertical:10, marginVertical:10}} placeholder='Name:' placeholderTextColor={"#8E8E93"}/>


</View>
<Text>Enter your password:</Text>
<TextInput value={password} type="password" onChangeText={setPassword} secureTextEntry style={{color:"#8E8E93",borderColor:"black", borderWidth:1, paddingHorizontal:20, borderRadius:10, paddingVertical:10, marginVertical:10}} placeholder='Password:' placeholderTextColor={"#8E8E93"}  />

<TouchableOpacity onPress={handleLogin} style={{marginTop:20,backgroundColor:"#8F2E24" , height:50, borderRadius:10,alignItems:"center", justifyContent:"center"}}>
    <Text style={{textAlign:'center', color:"white", fontWeight:"700"}}>Sign Up</Text>
</TouchableOpacity>


</View>
</SafeAreaView>
    
  );
};

export default StudentLogin;