import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AuthSession } from 'expo';
import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({ domain: 'dev-vrrrpr7u.us.auth0.com', clientId: 'FRJJellqPj8plHfyDXFZRFVidxiR2ah9'});

const Welcome = () => {
  return (
    <View>
      <Text>Welcome screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  signInButtons: {

  }
})

export default Welcome;
