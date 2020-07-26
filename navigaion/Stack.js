import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DetailRoom from '../screens/DetailRoom';
import Main from './Main';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="DetailRoom" component={DetailRoom} />
    </Stack.Navigator>
);
