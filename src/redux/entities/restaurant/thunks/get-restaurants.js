import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantIds } from "../selectors";

export const getRestaurants = createAsyncThunk('restaurants/getRestaurants', async () => {
    const response = await fetch('http://localhost:3001/api/restaurants');
    const result = await response.json();
    return result; 
},
{ condition: (_, { getState }) => !selectRestaurantIds(getState())?.length }
);