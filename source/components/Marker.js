

import React, { useState, useRef, useContext } from 'react';
import {
  StyleSheet,
  Image
} from 'react-native';
import { Marker } from 'react-native-maps';
import MainscreenContext from '../Context/MainScreenContext';

const MarkerPin = (props) => {
  const { MarkerData } = useContext(MainscreenContext)
  return (
    <>
      {
        MarkerData.map((item, index) => {
          return (
            <Marker key={index.toString()} title={item.city} coordinate={item.coordinates}>
              <Image style={styles.marker} source={require("../assets/location-pin.png")} />
            </Marker>
          )
        })
      }
    </>
  );
};

const styles = StyleSheet.create({
  marker: {
    width: 35,
    height: 35
  }
});

export default MarkerPin;