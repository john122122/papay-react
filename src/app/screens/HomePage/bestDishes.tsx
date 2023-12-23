import React, { useEffect } from "react";
import { Container, Box, Stack } from "@mui/material";
import { MonetizationOn } from "@mui/icons-material/";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setTrendProducts } from "../../screens/HomePage/slice";
import { Product } from "../../../types/product";
import ProductApiService from "../../apiServices/productApiService";
import { createSelector } from "reselect";
import { retrieveTrendProducts } from "./selector";
import { serverApi } from "../../../lib/config";

/** Redux slice */ 
const actionDispatch = (dispatch: Dispatch) => ({
  setTrendProducts: (data: Product[]) => dispatch(setTrendProducts(data)),
});

/** Redux selector */
const trendProductsRetriever = createSelector (
  retrieveTrendProducts,
  (trendProducts) => ({
    trendProducts,
  })
);

export function BestDishes() {
   /** Initialisation */
   const { setTrendProducts } = actionDispatch(useDispatch());
   const { trendProducts } = useSelector(trendProductsRetriever);
   useEffect(() => {
    const productService = new ProductApiService();
    productService
      .getTargetProducts({ order: "product_likes", page: 1, limit: 4 })
      .then((data) => setTrendProducts(data))
      .catch((err) => console.log(err));
   }, []);

    return (
    <div className="best_dishes_frame">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
         <Box className="category_title" marginTop={"255px"}>Trendagi Ovqatlar</Box>
          <Stack sx={{ mt: "43px" }} flexDirection={"row"}>
            {trendProducts.map((product: Product) => {
              const image_path = `${serverApi}/${product.product_images[0]}`;
              const size_volume = 
                product.product_collection === "drink"
                ? product.product_volume + "L"
                : product.product_size + "size";
                return(
                <Box className="dish_box">
                  <Stack className="dish_img" 
                    sx={{ 
                    backgroundImage: `url(${image_path})`,
                  }}
                >
                <div className={"dish_sale"}>{size_volume}</div>
                <div className={"view_btn"}>
                  <div>Batafsil ko'rish</div>
                <img 
                  src="/icons/arrow_right.svg"
                  style={{ marginLeft: "9px"}}
                  />
                </div>
                </Stack>
                <Stack className={"dish_desc"}>
                <span className={"dish_title_text"}>{product.product_name}</span>
                <span className={"dish_desc_text"}>
                <MonetizationOn />
                  {product.product_price}
                </span>
                </Stack>
                </Box>
               )
              }
             )
            }
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

function createSelectot(retrieveBestRestaurants: any, arg1: (bestRestaurants: any) => { bestRestaurants: any; }) {
  throw new Error("Function not implemented.");
}
