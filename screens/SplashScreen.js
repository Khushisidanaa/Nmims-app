import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import LandingScreen from './LandingScreen';

function SplashScreen({navigation}) {
  useEffect(() => {
    // Add any code that you want to run when the splash screen is displayed, such as loading data or resources
    setTimeout(() => {
      navigation.replace('LandingScreen');
    }, 5000); 
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/nmims-logo.png')}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '80%',
  },
});

export default SplashScreen;
