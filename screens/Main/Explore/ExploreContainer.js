import React, {useEffect} from 'react';
import ExplorePresenter from './ExplorePresenter';



export default ({getRooms, rooms}) => {

    useEffect(() => {
        getRooms();
        console.log("room data is ", getRooms())
    }, []);

    return (
        <ExplorePresenter rooms={rooms} />
    );
};

