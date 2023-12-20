import React, { useEffect } from "react";
import { Statistics } from "./statistics"
import { TopRestaurants } from "./topRestaurants";
import { BestRestaurants } from "./bestRestaurants";
import { BestDishes } from "./bestDishes";
import { Advertisements } from "./advertisements";
import { Events } from "./events";
import '../../../css/home.css';
import { Recomendations } from "./recommendations";

export function HomePage() {
  useEffect(() => {
    console.log("componentDidMount => Data fetch");

    return () => {
      console.log("componentWillUnmount process")
    }

  }, []);
    return <div className="homepage">
      <Statistics/>
      <TopRestaurants/>
      <BestRestaurants/>
      <BestDishes/>
      <Advertisements/>
      <Events/>
      <Recomendations/>
    </div>
}
