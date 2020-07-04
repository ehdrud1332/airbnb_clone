import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const Container = styled.View`
  width: 100%;
  margin-bottom: 50px;
  align-items: flex-start;
`;

const Name = styled.Text`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 7px;
`;

const SuperHost = styled.View`
  padding: 3px 5px;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 5px;
`;

const SuperHostText = styled.Text`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 10px;
`;

const PriceContainer = styled.View`
  flex-direction: row;
`;

const PriceText = styled.Text`
  font-size: 16px;
`;

const PriceNumber = styled.Text`
  font-weight: 600;
  font-size: 16px;
`;



const RoomCard = ({id, isFav, isSuperHost, photos, name, price}) => (
    <Container>
        {isSuperHost ? (
            <SuperHost>
                <SuperHostText>SuperHost</SuperHostText>
            </SuperHost>
        ) : null}
        <Name>{name}</Name>
        <PriceContainer>
            <PriceNumber>${price}</PriceNumber>
            <PriceText>/ night</PriceText>
        </PriceContainer>
    </Container>
)

RoomCard.propTypes = {
    id: PropTypes.number.isRequired,
    isFav: PropTypes.bool.isRequired,
    isSuperHost: PropTypes.string.isRequired,
    photos: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

export default RoomCard;
