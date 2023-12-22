import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../types/screen";
import { HomePage } from ".";

const initialState: HomePageState = {
    topRestaurants: [],
    bestRestaurants: [],
    trendProducts: [],
    bestBoArticles: [],
    trendBoArticles: [],
    newsBoArticles: [],
};

// Slice - bu bizning barcha ection createrlaimizni biriktib olmoqda 
const homePageSlice = createSlice({
    name: 'homePage',
    initialState,
    reducers: {
        setTopRestaurants: (state, action) => {
            state.topRestaurants = action.payload
        },
        bestRestaurants: (state, action) => {
            state.topRestaurants = action.payload
        },
        trendProducts: (state, action) => {
            state.topRestaurants = action.payload
        },
        bestBoArticles: (state, action) => {
            state.topRestaurants = action.payload
        },
        trendBoArticles: (state, action) => {
            state.topRestaurants = action.payload
        },
        newsBoArticles: (state, action) => {
            state.topRestaurants = action.payload
        },
    
    },
    
});

export const {
    setTopRestaurants,
    bestRestaurants,
    trendProducts,
    bestBoArticles,
    trendBoArticles,
    newsBoArticles
} = homePageSlice.actions;

const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;