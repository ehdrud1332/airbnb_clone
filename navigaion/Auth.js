import React from 'react';
import {Platform, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Ionicons} from '@expo/vector-icons';
import Welcome from '../screens/Welcome';
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import BackBtn from '../components/Auth/BackBtn';
const Auth = createStackNavigator();


const isAndroid = Platform.OS === 'android';

export default () => (

    <Auth.Navigator
        //아래서 위로 올라가는 애니메이
        mode="model"
        screenOptions={{
            headerBackTitleVisible: false,
            headerTransparent: true,
            headerBackImage: () => <BackBtn />

        }}
    >

        <Auth.Screen
            name="Welcome"
            component={Welcome}
            options={{
                headerTitleStyle: {
                    color: "white"
                }
            }}
        />
        <Auth.Screen name="SignIn" component={SignIn} />
        <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
);


