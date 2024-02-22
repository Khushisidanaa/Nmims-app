import React from 'react'
import { View, Image, Text, SafeAreaView, TouchableOpacity} from 'react-native'
import SignUp from './SignUp'
import StudentLogin from './StudentLogin'

function LoginScreen({navigation}) {
  return (
   <SafeAreaView >
    <View style={{ }}>
    <TouchableOpacity  onPress={()=>navigation.navigate('StudentLogin')}><Text>Welcome</Text></TouchableOpacity>
    </View>
    <TouchableOpacity  onPress={()=>navigation.navigate('SignUp')}><Text>Sign Up instead</Text></TouchableOpacity>
   </SafeAreaView>
  )
}

export default LoginScreen
