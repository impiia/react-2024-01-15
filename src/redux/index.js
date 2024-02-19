import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurant";
import { dishSlice } from "./entities/dish";
import { reviewSlice } from "./entities/review";
import { userSlice } from "./entities/user";
import { requestSlice } from "./ui/request";
import { cartSlice } from "./ui/cart";
import { api } from "./services/api";


export const store = configureStore(
    {
        reducer: combineSlices(
            restaurantSlice,
            dishSlice,
            reviewSlice,
            userSlice,
            requestSlice,
            cartSlice,
            api,
            ),
            middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(api.middleware),

    },
);

console.log(store.getState());