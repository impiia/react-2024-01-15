import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi(
    {
        reducerPath: "api",
        baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
        endpoints: builder => ({
            getUsers: builder.query({
                query: () => ({
                    url: "users",
                }),
            }),

            getRestaurants: builder.query({
                query: () => ({
                    url: "restaurants",
                }),
            }),
           
            getDishes: builder.query({
                query: (restaurantId) => ({
                    url: "dishes",
                    params: { restaurantId },
                }),
            }),
            getDishById: builder.query({
                query: (dishId) => ({
                    url: `dish/${dishId}`,
                    params: { dishId },
                }),
            }),

            getReviewsByRestaurantId: builder.query({
                query: (restaurantId) => ({
                    url: 'reviews',
                    params: { restaurantId },
                }),
            }),
            getDishesByRestaurantId: builder.query({
                query: (restaurantId) => ({
                    url: 'dishes',
                    params: { restaurantId },
                }),
            }),


        })

    }
);

export const { useGetDishesQuery, useGetRestaurantsQuery, useGetReviewsByRestaurantIdQuery, useGetDishByIdQuery, useGetDishesByRestaurantIdQuery, useGetUsersQuery } = api;