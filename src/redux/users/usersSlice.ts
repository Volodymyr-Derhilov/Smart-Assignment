import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { fetchUers } from "./operations"

export interface User {
    id: Number,
    name: String,
    username: String, 
    email: String, 
    address: {
        street: String, 
        suite: String, 
        city: String, 
        zipcode: String, 
        geo: {
            lat: String, 
            lng: String,
        }
    },
    phone: String, 
    website: String, 
    company: {
        name: String, 
        catchPhrase: String, 
        bs: String
    }
}

interface UserState { users: User[]}

const initialState : UserState = {
    users: [],
}


const slice = createSlice({
    name: "users", 
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUers.fulfilled, (state, action: PayloadAction<User[]>) => {
            state.users = action.payload;            
        })
    },
})

export const usersReducer = slice.reducer;