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
import { setBestRestaurants, setTopRestaurants } from "../../screens/HomePage/slice";
import { Restaurant } from "../../../types/user";
import RestaurantApiService from "../../apiServices/restaurantApiService";

/** Redux slice */ 
const actionDispatch = (dispatch: Dispatch) => ({
  setTopRestaurants: (data: Restaurant[]) => dispatch(setTopRestaurants(data)),
  setBestRestaurants: (data: Restaurant[]) => dispatch(setBestRestaurants(data)),

});

export function HomePage() {
  /** Initialisation */
  const { setTopRestaurants, setBestRestaurants } = actionDispatch(useDispatch());
  
  useEffect(() => {
    // backend data request => data
    const restaurantService = new RestaurantApiService();
    restaurantService
      .getTopRestaurants()
      .then((data) => {
        setTopRestaurants(data);
    })
      .catch(err => console.log(err));

    restaurantService
      .getRestaurants({ page: 1, limit: 4, order: "mb_point" })
      .then((data) => {
        setBestRestaurants(data);
      })
      .catch((err) => console.log(err));
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
