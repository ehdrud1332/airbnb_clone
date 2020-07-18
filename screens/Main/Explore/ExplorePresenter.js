import React from 'react';
import styled from 'styled-components/native';
import {
    ActivityIndicator,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    Text
} from 'react-native';
import RoomCard from '../../../components/RoomCard';
import Vertical from "../../../components/Vertical";

const {width : WIDTH, height : HEIGHT} = Dimensions.get('window')

const Container = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 4}px;
  margin-bottom: 40px;
`;


const VerticalContainer = styled.View`
  
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

export default ({ rooms, loading }) => {
    return (
        <ScrollView
            style={{
                backgroundColor: "transparent",
            }}
            contentContainerStyle={{
                flex: 1,
                justifyContent: loading ? "center" : "flex-start"
            }}
        >
            {rooms.length === 0 ? (
                <ActivityIndicator color="black" />
            ) : (
                <>
                    {/*<FakeBar>*/}
                    {/*    <FakeText>Search...</FakeText>*/}
                    {/*</FakeBar>*/}
                    {/*<ScrollView*/}
                    {/*    style={{width: "100%", marginTop: 120}}*/}
                    {/*    contentContainerStyle={{paddingHorizontal: 15}}*/}
                    {/*>*/}
                    {/*    {rooms.map(room => (*/}
                    {/*        <RoomCard*/}
                    {/*            key={room._id}*/}
                    {/*            isSuperHost={room.isSuperHost}*/}
                    {/*            id={room._id}*/}
                    {/*            price={room.price}*/}
                    {/*            name={room.name}*/}
                    {/*            isFav={room.isFav}*/}
                    {/*            // photos={room.photos}*/}
                    {/*        />*/}
                    {/*    ))}*/}
                    {/*</ScrollView>*/}
                    <VerticalContainer>
                        <ScrollView horizontal>
                            {rooms.map(room => (
                                <Vertical
                                    key={room._id}
                                    // RoomPoster={require('../../../assets/BgImage.jpeg')}
                                    price={room.price}
                                    name={room.name}
                                />
                            ))}
                        </ScrollView>
                    </VerticalContainer>
                </>
            )}
        </ScrollView>
    )
}
