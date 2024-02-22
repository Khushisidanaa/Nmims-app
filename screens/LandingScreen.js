import React from 'react'
import { Button, View } from 'react-native'
import { Image, Text , SafeAreaView} from 'react-native'
import LoginScreen from './LoginScreen'
import { TouchableOpacity } from 'react-native'


function LandingScreen({navigation}) {
  return (
    <SafeAreaView style={{flex:1, justifyContent:"center", alignItems:"center", backgroundColor:"white" , fontFamily:"Raleway-Bold.ttf"}}>
        <Text style={{marginTop:"55%"}} >Login as: </Text>
        <Text style={{marginVertical:10}}>We have a section for everyone 🎉</Text>
    <Image
   source={require('../assets/images/login-image1.png')}
    style={{ width: "80%", height: 150, resizeMode: 'contain' }}
  />
  <View style={{flex:1, flexDirection:"column", backgroundColor:"white", marginTop:60}}>
    <View style={{flex:1, flexDirection:"row"}}>
      <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')} style={{backgroundColor: "#8F2E24", height:50, width:147, margin:15, borderRadius:10, fkex:1, alignItems:"center",justifyContent:"center"}}> 
      <Text style={{color:"white",fontWeight:"700"}}>Student</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: "#8F2E24", height:50, width:147, margin:15, borderRadius:10, fkex:1, alignItems:"center",justifyContent:"center"}}> 
      <Text style={{color:"white",fontWeight:"700"}}>Faculty</Text>
      </TouchableOpacity>
      
    </View>
    <View style={{marginTop:0}}>
    <TouchableOpacity style={{backgroundColor: "#8F2E24", height:50, width:147, borderRadius:10, fkex:1, alignItems:"center",justifyContent:"center"}}> 
      <Text style={{color:"white",fontWeight:"700"}}>Faculty</Text>
      </TouchableOpacity>
    </View>
  </View>
  </SafeAreaView>
  )
}

export default LandingScreen
