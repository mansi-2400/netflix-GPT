import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
    name:"UserInfo",
    initialState: null,
    reducers: {
        addUser: (state, action) =>
        {
            return action.payload;
        },
        removeUser : (state, action) =>
        {
            return null;
        }
    }
});

export default userInfoSlice.reducer;
export const {addUser, removeUser} = userInfoSlice.actions;