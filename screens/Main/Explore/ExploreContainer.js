import React, {useEffect, useState} from 'react';
import ExplorePresenter from './ExplorePresenter';
import {ActivityIndicator, FlatList, View, Text} from 'react-native';
import api from '../../../api';


export default () => {

    const [isLoading, setLoading] = useState(true);
    const [rooms, setRooms] = useState([]);


    const getData = async() => {
        const [rooms, roomsError] = await api.rooms();
        setRooms({
            rooms,
            roomsError
        })
        console.log(rooms)
    }

    const getRoomsFromApiAsync = async() => {
        fetch('http://localhost:2323/rooms/total')
            .then((response) => response.json())
            .then((json) => setRooms(json))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        getRoomsFromApiAsync();
        console.log(rooms)

    }, [])


    // useEffect(() => {
    //     getRooms();
    //     // console.log("room data is ", getRooms())
    //     // const data = api.rooms();
    //     // console.log("Data is", data)
    //
    // }, []);

    return (
        <View style={{flex: 1, padding:24}}>
            {isLoading ? (
                <ActivityIndicator/>
            ) : (
                // <FlatList
                //     data={rooms}
                //     keyExtractor={({id}, index) => id}
                //     renderItem={({item}) => (
                //         <Text>{item.name}, {item.price}</Text>
                //     )}
                // />
                <ExplorePresenter rooms={rooms}/>
            )}
        </View>
    );
};

