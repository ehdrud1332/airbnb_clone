import {createSlice} from '@reduxjs/toolkit';
import api from '../api';

const roomsSlice = createSlice({
    name : "rooms",
    initialState: {
        explore: {
            rooms: []
        },
        favs: []
    },
    reducers: {
        setExploreState(state, action) {

            const {explore} = state;
            const {payload} = action;
            payload.rooms.forEach(payloadRoom => {
                const exists = explore.rooms.find(
                    savedRoom => savedRoom.id === payloadRoom.id
                );
                if(!exists) {
                    explore.rooms.push(payloadRoom);
                }
            })
            // state.explore.page = payload.page;
            // state.explore.rooms.push(action.payload.rooms);
            // state.explore.page = action.payload.page;
        }
    }
});
const {setExploreRooms} = roomsSlice.actions;

export const getRooms = () => async dispatch => {
    try {
        const {
           data: {results}
        } = await api.rooms();
        dispatch(
            setExploreRooms({
                rooms: results,
            })
        );
    } catch(e) {
        console.log(e)
    }
}

export default roomsSlice.reducer;
