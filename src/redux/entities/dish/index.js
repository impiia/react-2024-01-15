import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishById, getDishes } from "./thunk/get-dishes";

const entityAdapter = createEntityAdapter() ;

export const dishSlice = createSlice({
    name: 'dish',
    initialState: entityAdapter.getInitialState,
    extraReducers: (builder) => {
        builder
            .addCase(getDishes.fulfilled, (state, { payload }) => {
                entityAdapter.setAll(state, payload);
            })
            .addCase(getDishById.fulfilled, (state, { payload }) => {
                entityAdapter.upsertOne(state, payload);
            });
    }
});