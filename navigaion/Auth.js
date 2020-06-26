import React from 'react';
import {Platform, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Ionicons} from '@expo/vector-icons';
import Welcome from "../screens/Auth/Welcome";
import SignIn from "../screens/Auth/SignIn";
import SignUp from "../screens/Auth/SignUp";
import BackBtn from "../components/Auth/BackBtn";
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
        <Auth.Screen
            name="SignIn"
            component={SignIn}
            options={{title: "Sign In"}}
        />
        <Auth.Screen
            name="SignUp"
            component={SignUp}
            options={{title: "Sign Up"}}
        />
    </Auth.Navigator>
);


