import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { Statistics } from "./statistics"
import { TopRestaurants } from "./topRestaurants";
import { BestRestaurants } from "./bestRestaurants";
import { BestDishes } from "./bestDishes";
import { Advertisements } from "./advertisements";
import { Events } from "./events";
import { Recomendations } from "./recommendations";
import '../../../css/home.css';

// Redux
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setTopRestaurants } from "../../screens/HomePage/slice";
import { 
  retrieveTopRestaurants, 
} from "../../screens/HomePage/selector";
import { Restaurant } from "../../../types/user";
import RestaurantApiService from "../../apiServices/restaurantApiService";

/** Redux slice */ 
const actionDispatch = (dispatch: Dispatch) => ({
  setTopRestaurants: (data: Restaurant[]) => dispatch(setTopRestaurants(data)),
});

/** Redux selector */
const topRestaurantRetriever = createSelector (
  retrieveTopRestaurants,
  (topRestaurants) => ({
    topRestaurants,
  })
);

export function HomePage() {
  /** Initialisation */
  const { setTopRestaurants } = actionDispatch(useDispatch());
  
  useEffect(() => {
    // backend data request => data
    const restaurantService = new RestaurantApiService();
    restaurantService
      .getTopRestaurants()
      .then(data => {
        setTopRestaurants(data);
    })
      .catch(err => console.log(err));
  }, []);
  
  return (
    <div className="homepage">
      <Statistics/>
      <TopRestaurants/>
      <BestRestaurants/>
      <BestDishes/>
      <Advertisements/>
      <Events/>
      <Recomendations/>
    </div>
  )
}
