import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {logIn, logOut} from '../redux/userSlice';
import Auth from '../navigaion/Auth';
import Main from '../navigaion/Main';
import {NavigationContainer} from '@react-navigation/native';

const Gate = () => {
    const {isLoggedIn} = useSelector((state => state.userReducer));
    const dispatch = useDispatch();

    return (
        <NavigationContainer>
            {isLoggedIn
                ? (
                    // <Main />
                    <Auth />
                ) : (
                    // <Auth />
                    <Main />
                )}
        </NavigationContainer>
    );
};

export default Gate;
