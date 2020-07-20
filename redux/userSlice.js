import { createSlice } from '@reduxjs/toolkit';
import api from '../api';

const userSlice = createSlice({
    name: 'users',
    initialState: {
        inLoggedIn: false,
        token: null
    },
    reducers: {
        login(state, action) {
            state.isLoggedIn = true;
            state.token = action.payload.token;
        },
        logout(state, action) {
            state.isLoggedIn = false;
            state.token = null;
        }
    }
});

export const {logIn, logOut} = userSlice.actions;

export const userLogin = form => async dispatch => {
    try {
        const {
            data
        } = await api.login(form);
        console.log("data", data.token)
        // if (token) {
        //     dispatch(login({token}))
        // }
    } catch(e) {
        alert("Wrong email/password")
    }
}

export default userSlice.reducer;
