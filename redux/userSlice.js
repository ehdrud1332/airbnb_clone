import { createSlice } from '@reduxjs/toolkit';

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

export default userSlice.reducer;
