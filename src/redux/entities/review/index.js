import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./thunks/get-reviews";

const entityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
    name: 'review',
    initialState: entityAdapter.getInitialState,
    extraReducers: (builder) =>
        builder
            .addCase(getReviews.fulfilled, (state, { payload }) => {
                entityAdapter.setAll(state, payload);
            })
            
})