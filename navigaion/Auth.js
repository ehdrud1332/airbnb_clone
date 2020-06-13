import React from 'react';
import {Platform, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Ionicons} from '@expo/vector-icons';
import Welcome from '../screens/Welcome';
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";

const Auth = createStackNavigator();

const isAndroid = Platform.OS === 'android';

export default () => (

    <Auth.Navigator>

        <Auth.Screen name="Welcome" component={Welcome} />
        <Auth.Screen name="SignIn" component={SignIn} />
        <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
);


