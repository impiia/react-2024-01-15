import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewIds } from "../selectors";
import { selectRestaurantReviewsById } from "../../restaurant/selectors";


export const getReviews = createAsyncThunk('review/getReviews', async () => {
    const response = await fetch("http://localhost:3001/api/reviews");
    const result = await response.json();
    return result;
},
    { condition: (_, { getState }) => !selectReviewIds(getState())?.length }
);

export const getReviewByRestaurantId = createAsyncThunk('review/getReviewsById', async (restaurantId) => {
    const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
    const result = await response.json();
    return result;
},
    {
        condition: (restaurantId, { getState }) => {
            const restaurantReviewIds = selectRestaurantReviewsById(getState(), restaurantId);
            const allReviewIds = selectReviewIds(getState());
            return !restaurantReviewIds.every(id => allReviewIds.includes(id));
        }
    }
);



