

import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native';
import MainscreenContext from './source/Context/MainScreenContext';
import MapComp from './source/screens/MapView';

const MarkerData = [
  {
    city: "Kochi",
    coordinates: { latitude: 9.927289, longitude: 76.269338 }
  },
  {
    city: "Coimbatore",
    coordinates: { latitude: 11.000217, longitude: 76.951048 }
  },
  {
    city: "Madurai",
    coordinates: { latitude: 9.914404, longitude: 78.124267 }
  },
  {
    city: "Munnar",
    coordinates: { latitude: 10.085762, longitude: 77.063041 }
  },

]

const PolylineData = [{ latitude: 9.927289, longitude: 76.269338 },
{ latitude: 11.000217, longitude: 76.951048 },
{ latitude: 9.914404, longitude: 78.124267 },
{ latitude: 10.085762, longitude: 77.063041 },
{ latitude: 9.927289, longitude: 76.269338 }
]
const App = () => {
  return (
    <View style={styles.maincontainer}>
      <MainscreenContext.Provider value={{ "MarkerData": MarkerData, "PolylineData": PolylineData }}>
        <MapComp />
      </MainscreenContext.Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "#000"
  }
});

export default App;
