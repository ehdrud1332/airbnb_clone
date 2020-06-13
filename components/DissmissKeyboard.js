import React from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';

const DissmissKeyboard = ({children}) => {

    const onPress = () => Keyboard.dismiss();
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            {children}
        </TouchableWithoutFeedback>
    );
};

export default DissmissKeyboard;
