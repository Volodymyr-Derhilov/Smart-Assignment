import { createSlice } from "@reduxjs/toolkit"

export interface FiltersState {
    name: String, 
    username: String,
    email: String,
    phone: String,
}

const initialState: FiltersState = {
    name: "",
    username: "",
    email: "",
    phone: "",
}

const slice = createSlice({
    name: "filters", 
    initialState, 
    reducers: {
        changeFilter: (state, action) => {
            const data = action.payload;

            data.filter === "Name" ? state.name = data.value : state.name;
            data.filter === "Username" ? state.username = data.value : state.username;
            data.filter === "Email" ? state.email = data.value : state.email;
            data.filter === "Phone" ? state.phone = data.value : state.phone;            
        }
    }
})

export const filtersReduser = slice.reducer;
export const { changeFilter } = slice.actions;