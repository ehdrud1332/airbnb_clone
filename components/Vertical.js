import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import RoomPoster from './RoomPoster';

const Container = styled.View`
 
`;

const Name = styled.Text`
 
`;

const Price = styled.Text`

`;

const Vertical = ({RoomPoster, name, price}) => (
    <Container>
        {/*<RoomPoster uri={}/>*/}
        <Name>{name}</Name>
        <Price>{price}</Price>
    </Container>
)
Vertical.propTypes = {
    RoomPoster : PropTypes.string,
    name : PropTypes.string.isRequired,
    price : PropTypes.string.isRequired
};

export default Vertical;
