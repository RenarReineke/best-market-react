import { ILoginResponse } from "@api/response";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    isLogin: false,
    user: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signIn: (state) => {
            state.isLogin = true;
        },

        signOut: (state) => {
            state.isLogin = false;
        },

        getUser: (state, action: PayloadAction<string>) => {
            state.user = action.payload;
        }
    }
});

export const {signIn, signOut, getUser} = userSlice.actions;

export default userSlice.reducer;