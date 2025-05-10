import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import splashIcon from '@/assets/images/splash-icon.png'

const explore = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
      source={splashIcon}
      resizeMode="cover"
      style={styles.image}>
        <Text style={styles.text}>Hello</Text>
      </ImageBackground>
      
    </View>
  )
}

export default explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '100%'
  }
})