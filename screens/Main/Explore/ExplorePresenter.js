import React from 'react';
import styled from 'styled-components/native';
import {ActivityIndicator} from 'react-native';
import RoomCard from '../../../components/RoomCard';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`

`;

export default ({rooms}) => {
    return (
        <Container>
            {rooms.length === 0 ? (
                <ActivityIndicator color={"black"} />
            ) : (
                rooms.map(room => (
                    <RoomCard
                        key={room.id}
                        isSuperHost={room.isSuperHost}
                        id={room.id}
                        price={room.price}
                        name={room.name}
                        isFav={room.isFav}
                        photos={room.photos}
                    />
                ))
            )}
        </Container>
    )
}
