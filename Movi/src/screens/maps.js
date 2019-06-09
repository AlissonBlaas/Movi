import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,

} from 'react-native';

import MapView from 'react-native-maps';

import styles from './MapsStyle';
import { Map } from 'core-js';

const GOOGLE_MAPS_APIKEY = 'Coloque sua API Key aqui';

const Login = ({ navigation }) => (
  

    <MapView>
        
    </MapView>
  
  );
  
  Login.navigationOptions = {
    header: null,
  }
  
  export default Login;
  