import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById, selectDishIds } from "../selectors";

export const getDishes = createAsyncThunk('dishes/getDishes', async () => {
    const response = await fetch('http://localhost:3001/api/dishes');
    const result = await response.json();
    return result;
},
    { condition: (_, { getState }) => !selectDishIds(getState())?.length }
);

export const getDishById = createAsyncThunk(
    'dishes/getDishById',
    async (dishId) => {
        const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);
        const result = await response.json();
        return result;
    },
    {
        condition: (dishId, { getState }) => {
            const dish = selectDishById(dishId)(getState()); 
            return dish ? false : true;
        }
        
    }
);

