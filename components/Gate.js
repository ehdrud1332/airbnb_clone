import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {logIn, logOut} from '../redux/userSlice';
import Auth from '../navigaion/Auth';
import {NavigationContainer} from '@react-navigation/native';
import Stack from '../navigaion/Stack';

const Gate = () => {
    const {isLoggedIn} = useSelector((state => state.userReducer));
    const dispatch = useDispatch();

    return (
        <NavigationContainer>
            {isLoggedIn
                ? (

                    <Auth />
                ) : (
                    // <Auth />
                    <Stack />



                )}
        </NavigationContainer>
    );
};

export default Gate;
