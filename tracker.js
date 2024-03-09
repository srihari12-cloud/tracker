import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import * as Location from 'expo-location';
import * as Sharing from 'expo-sharing';

const LocationSender = ({ navigation }) => { //
  const [location, setLocation] = useState(null);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    } catch (error) {
      console.error('Error getting location', error);
    }
  };

  const shareLocation = async () => {
    if (!location) {
      Alert.alert('Location not available');
      return;
    }

    try {
      await Sharing.shareAsync(
        `Latitude: ${location.coords.latitude}, Longitude: ${location.coords.longitude}`
      );
    } catch (error) {
      console.error('Error sharing location', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {location && (
        <View>
          <Text>Latitude: {location.coords.latitude}</Text>
          <Text>Longitude: {location.coords.longitude}</Text>
        </View>
      )}
      <Button title="Share Location" onPress={shareLocation} />
      <Button title="Go Back" onPress={() => navigation.goBack()} /> 
    </View>
  );
};

export default LocationSender;
