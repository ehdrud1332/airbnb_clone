import React, {useEffect} from 'react';
import ExplorePresenter from './ExplorePresenter';
import api from '../../../api';


export default ({getRooms, rooms}) => {

    useEffect(() => {
        // getRooms();
        // console.log("room data is ", getRooms())
        const data = api.rooms();
        console.log("Data is", data)

    }, []);

    return (
        <ExplorePresenter rooms={rooms} />
    );
};

