import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {TouchableOpacity, Dimensions} from 'react-native';
import colors from '../../colors';

const Button = styled.View`
  background-color: ${props => (props.accent ? colors.red : "transparent")};
`;

const Text = styled.Text`
  color: ${props => (props.accent ? "white" : colors.black)};
`;

const Btn = ({onPress, text, accent = false}) => (

    <TouchableOpacity onPress={onPress}>
        <Button accent={accent}>
            <Text accent={accent}>{text}</Text>
        </Button>
    </TouchableOpacity>
);

Btn.propTypes = {
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    accent: PropTypes.bool
};

export default Btn;
