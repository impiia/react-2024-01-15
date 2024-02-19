import { createSelector, createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {},
    reducers: {
        increment: (state, { payload: productId }) => {
            state[productId] = (state[productId] || 0) + 1;
        },
        decrement: (state, { payload: productId }) => {
            if (state[productId] > 0) {
                state[productId] -= 1;
                if (state[productId] === 0) {
                    delete state[productId];
                }
            }
        },
    },
    selectors: {
        selectProductAmountById: (state, productId) => {
            const amount = state[productId] || 0;
            return amount;
        },        
        selectProductAmount: (state) =>
            Object.values(state).reduce((acc, amount) => {
                return acc + amount;
            }, 0),
        selectCartProductIds: createSelector(
            (state) => state,
            (state) => Object.keys(state)
        ),
    },
});

export const { selectProductAmountById, selectProductAmount, selectCartProductIds } = cartSlice.selectors;
export const { increment, decrement } = cartSlice.actions;
