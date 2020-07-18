import React from 'react';
import styled from 'styled-components/native';
import {
    ActivityIndicator,
    ScrollView,
    TouchableOpacity,
    Text
} from 'react-native';
import RoomCard from '../../../components/RoomCard';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 15px;
`;

const FakeBar = styled.View`
  height: 40px;
  width: 100%;
  background-color: white;
  box-shadow: 1px 5px 5px rgba(200, 200, 200, 0.5);
  margin: 80px 0px 10px 0px;
  border-radius: 7px;
  justify-content: center;
  padding-left: 10px;
`;

const FakeText = styled.Text`
  font-size: 14px;
  font-weight: 300;
`;

export default ({ rooms }) => {
    return (
        <Container>
            {rooms.length === 0 ? (
                <ActivityIndicator color="black" />
            ) : (
                <>
                    <FakeBar>
                        <FakeText>Search...</FakeText>
                    </FakeBar>
                    <ScrollView
                        style={{width: "100%", marginTop: 120}}
                        contentContainerStyle={{paddingHorizontal: 15}}
                    >
                        {rooms.map(room => (
                            <RoomCard
                                key={room.id}
                                isSuperHost={room.isSuperHost}
                                id={room.id}
                                price={room.price}
                                name={room.name}
                                isFav={room.isFav}
                                photos={room.photos}
                            />
                        ))}
                    </ScrollView>
                </>
            )}
        </Container>
    )
}
