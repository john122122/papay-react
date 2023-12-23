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
            state.topRestaurants = action.payload;
        },
        setBestRestaurants: (state, action) => {
            state.bestRestaurants = action.payload;
        },
        setTrendProducts: (state, action) => {
            state.trendProducts = action.payload;
        },
        setBestBoArticles: (state, action) => {
            state.bestBoArticles = action.payload;
        },
        setTrendBoArticles: (state, action) => {
            state.trendBoArticles = action.payload;
        },
        setNewsBoArticles: (state, action) => {
            state.newsBoArticles = action.payload;
        },
    
    },
    
});

export const {
    setTopRestaurants,
    setBestRestaurants,
    setTrendProducts,
    setBestBoArticles,
    setTrendBoArticles,
    setNewsBoArticles,
} = homePageSlice.actions;

const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;