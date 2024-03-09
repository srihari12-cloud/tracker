import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./logo.jpg')} />
      <Image source={require('./Kiddoloco.jpg')} />
      <View style={styles.textContainer}>
        <View style={styles.line}></View>
        <Text style={styles.text}>
          {"Continue with"}
        </Text>
        <View style={styles.line}></View>
      </View>
      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.buttonText}> Sign in Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 250, // Adjust the value as needed
  },
  text: {
    color: "#565656",
    fontSize: 24,
    marginHorizontal: 10, // Adjust the value as needed
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#565656",
    marginVertical: 5, // Adjust the value as needed
  },
  googleButton: {
    marginTop: 20, // Adjust the value as needed
    backgroundColor: '#111111',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
