

import React, { useState, useRef, useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import Marker from '../components/Marker';
import MainscreenContext from '../Context/MainScreenContext';
const MapComp = (props) => {
  const { PolylineData, MarkerData } = useContext(MainscreenContext)

  return (
    <View style={styles.maincontainer}>
      <MapView
        initialRegion={{
          latitude: 9.927289,
          longitude: 76.269338,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}

        style={styles.maincontainer}>
        <Polyline coordinates={PolylineData} />
        <Marker />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    width: "100%",

  }
});

export default MapComp;