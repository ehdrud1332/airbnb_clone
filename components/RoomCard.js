import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const RoomCard = ({id, isFav, isSuperHost, photos, name, price}) => null;

RoomCard.propTypes = {
    id: PropTypes.number.isRequired,
    isFav: PropTypes.bool.isRequired,
    isSuperHost: PropTypes.string.isRequired,
    photos: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

export default RoomCard;
