import React from "react";
import { Container } from "@mui/material";
import { Route, Switch, useRouteMatch } from "react-router-dom";

export function RestaurantPage() {
    let restaurant = useRouteMatch();
    console.log(restaurant);
    return (
        <div className="retaurant_page">
          <Switch>
            <Route path={`${restaurant.path}/dish/:dish_id`}>Chosen Dish</Route>
            <Route path={`${restaurant.path}/:restaurant_id`}>Chosen Restaurant</Route>
            <Route path={`${restaurant.path}`}>All Restaurants</Route>
          </Switch>
        </div>
    )
}