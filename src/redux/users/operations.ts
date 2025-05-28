import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "./usersSlice";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com"

export const fetchUers = createAsyncThunk<
    User[], void, { rejectValue: {} }
    >("users/fetch", async (_, thunkAPI) => {
    try {
        const {data} = await axios.get<User[]>("/users");
        return data;
    }
    catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error";
        return thunkAPI.rejectWithValue(message);
    }
})