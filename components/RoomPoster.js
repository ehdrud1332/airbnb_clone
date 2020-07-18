import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const Image = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 4px;
`;

const RoomPoster = () => <Image source={require('../assets/BgImage.jpeg')}/>

// RoomPoster.propTypes = {
//     url: PropTypes.string.isRequired
// }

export default RoomPoster;
