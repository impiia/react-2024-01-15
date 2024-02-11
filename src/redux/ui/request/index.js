import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "./constants";

export const requestSlice = createSlice({
    name: "request",
    initialState: {},
    extraReducers: builder => builder.addMatcher(
        ({ type }) => type.endsWith("/pending"),
        (state, { meta }) => {
            state[meta.requestId] = REQUEST_STATUS.pending;
        })
        .addMatcher(
            ({ type }) => type.endsWith("/fulfilled"),
            (state, { meta }) => {
                state[meta.requestId] = REQUEST_STATUS.success;
            })
        .addMatcher(
            ({ type }) => type.endsWith("/rejected"),
            (state, { meta }) => {
                state[meta.requestId] = REQUEST_STATUS.fail;
            }),
    selectors: {
        selectIsLoading: (state, id) => state[id] === REQUEST_STATUS.pending,
    }
}
);

export const {selectIsLoading} = requestSlice.selectors;