import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const Text = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 16px;
  margin-top: 20px;
  margin-left: 20px;
  
`;

const Title = ({title}) => <Text>{title}</Text>

Title.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Title;
