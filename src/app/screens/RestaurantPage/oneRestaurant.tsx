import { Box ,Button, Container, Checkbox, Stack} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Swiper, SwiperSlide } from "swiper/react";
import Badge from "@mui/material/Badge";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import StarIcon from "@mui/icons-material/Star";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import {createSelector} from "reselect";
import {
    retrieveChosenRestaurant,
    retrieveRandomRestaurants,
    retrieveTargetProducts,
} from "../../screens/RestaurantPage/selector";
import { Restaurant } from '../../../types/user';
import { Dispatch } from "@reduxjs/toolkit";
import {
    setChosenRestaurant,
    setRandomRestaurants,
    setTargetProducts
} from "../../screens/RestaurantPage/slice";
import { ProductSearchObj } from '../../../types/others';
import RestaurantApiService from '../../apiServices/restaurantApiService';
import { serverApi } from '../../../lib/config';
import { useHistory, useParams } from 'react-router-dom';
import ProductApiService from "../../apiServices/productApiService";
import { Product } from "../../../types/product";

/** REDUX SLICE */ 
const actionDispatch = (dispatch: Dispatch) => ({
    setRandomRestaurants: (data: Restaurant[]) =>
        dispatch(setRandomRestaurants(data)),
    setChosenRestaurant: (data: Restaurant[]) =>
        dispatch(setChosenRestaurant(data)),
    setTargetProducts: (data: Restaurant[]) =>
        dispatch(setTargetProducts(data)),
});

/** REDUX SELECTOR */
const randomRestaurantsRetriever = createSelector (
    retrieveRandomRestaurants,
    (randomRestaurants) =>({
        randomRestaurants,
    })
);
const chosenRestaurantRetriever = createSelector (
    retrieveChosenRestaurant,
    (chosenRestaurant) =>({
        chosenRestaurant,
    })
);
const targetProductsRetriever = createSelector (
    retrieveTargetProducts,
    (targetProducts) =>({
        targetProducts,
    })
);  
export function OneRestaurant() {
    /** Initialisation */
    const history = useHistory();
    let { restaurant_id } = useParams<{ restaurant_id: string }>();
    const { setRandomRestaurants, setChosenRestaurant, setTargetProducts } =
        actionDispatch(useDispatch());
    const { randomRestaurants } = useSelector(randomRestaurantsRetriever);
    const { chosenRestaurant } = useSelector(chosenRestaurantRetriever);
    const { targetProducts } = useSelector(targetProductsRetriever);
    const [chosenRestaurantId, setChosenRestaurantId] =
        useState<string>(restaurant_id);
    const [targetProductObj, setTargetProductSearchObject] =
        useState<ProductSearchObj>({
            page: 1,
            limit: 8,
            order: "createdAt",
            restaurant_mb_id: restaurant_id,
            product_collection: "dish",
    });

    useEffect(() => {
        const restaurantService = new RestaurantApiService();
        restaurantService
            .getRestaurants({ page: 1, limit: 10, order: "random" })
            .then((data) => setRandomRestaurants(data))
            .catch((err) => console.log(err));

        const productService = new ProductApiService();
        productService
            .getTargetProducts(targetProductObj)
            .then((data) => setTargetProducts(data))
            .catch((err) => console.log(err));
    }, [targetProductObj])

    /** HANDLERS */
    const chosenRestaurantHandler = (id: string) => {
        setChosenRestaurantId(id);
        targetProductSearchObj.restaurant_mb_id = id;
        setTargetProductSearchObj({ ...targetProductSearchObj });
        history.push(`/restaurant/${id}`);
    }

    return(
     <div className="single_restaurant">
        <Container>
            <Stack flexDirection={"column"} alignItems={"center"}>
                <Stack className={"avatar_big_box"}>
                    <Box className={"top_text"}>
                        <p>Qarshi Tandir Go'sht</p>
                        <Box className={"Single_search_big_box"}>
                            <form className={"Single_search_form"} action={""} method={""}>
                                <input 
                                type={"search"}
                                className={"Single_searchInput"}
                                name={"Single_resSearch"}
                                placeholder={"Qidiruv"}
                                />
                                <Button
                                className={"Single_button_search"}
                                variant="contained"
                                endIcon={<SearchIcon />}
                                >
                                    Izlash
                                    </Button>
                            </form>
                        </Box>
                    </Box>
                </Stack>

                <Stack
                style={{ width: "100%", display: "flex" }}
                flexDirection={"row"}
                sx={{ mt: "35px" }}
                >
                   <Box className={"prev_btn retaurant-prev"}>
                     <ArrowBackIosNewIcon
                     sx={{ fontSize: 40 }}
                     style={{ color:  "white"}} 
                     />
                      </Box> 
                      <Swiper
                      className={"restaurant_avatars_wrapper"}
                      slidesPerView={7}
                      centeredSlides={false}
                      spaceBetween={30}
                      navigation={{
                          nextEl: ".restaurant-next",
                          prevEl: ".restaurant-prev",
                      }}
                      >
                        {randomRestaurants.map((ele: Restaurant) => {
                            const image_path = `${serverApi}/${ele.mb_image}`;
                           return (
                               <SwiperSlide onClick={() => chosenRestaurantHandler(ele._id)}
                                    style={{ cursor: "pointer" }}
                                    key={ele._id}
                                    className={"restaurant_avatars"}
                               >
                                   <img src={image_path} />
                                   <span>{ele.mb_nick}</span>
                               </SwiperSlide>
                           );
                       })}
                      </Swiper>
                      <Box
                      className={"next_btn restaurant-next"}
                      style={{ color: "white" }}
                      >
                          <ArrowForwardIosIcon sx={{ fontSize: 40 }} />
                      </Box>
                </Stack>

               <Stack 
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"flex-end"}
                width={"90%"}
                sx={{ mt: "65px"}}
                >
                    <Box className={"dishes_filter_box"}>
                        <Button variant={"contained"} color="secondary">
                            new
                        </Button> 
                        <Button variant={"contained"} color="secondary">
                            price
                        </Button>
                        <Button variant={"contained"} color="secondary">
                            likes
                        </Button>
                        <Button variant={"contained"} color="secondary">
                            views
                        </Button>
                    </Box>
                </Stack>

                <Stack
                style={{ width: "100%", display: "flex", minHeight: "600px"}}
                flexDirection={"row"}
                >
                    <Stack className={"dish_category_box"}>
                        <div className={"dish_category_main"}>
                            <Button variant={"contained"} color="secondary">
                                boshqa
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                desert
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                ichimlik
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                salad
                            </Button>
                            <Button variant={"contained"} color="secondary">
                                ovqatlar
                            </Button>
                        </div>
                    </Stack>

                    <Stack className={"dish_wrapper"}>
                            {targetProducts.map((product: Product) => {
                                const image_path = `${serverApi}/${product.product_images[0]}`;
                                const size_volume =
                                    product.product_collection === "drink"
                                        ? product.product_volume + "l"
                                        : product.product_size + "size";
                            return (
                              <Box className={"dish_box"} key={product._id}>
                                <Box className={"dish_img"}
                                  sx={{
                                   backgroundImage: `url(${image_path})`,
                                  }}
                                > 
                                   <div className={"dish_sale"}>{size_volume}</div>
                                    <Button
                                        className={"like_view_btn"}
                                        style={{ left: "36px" }}
                                    >
                                       <Badge badgeContent={product.product_likes} color="primary">
                                           <Checkbox
                                             icon={<FavoriteBorder style={{ color: "white" }} />}
                                             id={product._id}
                                            checkedIcon={<Favorite style={{ color: "red" }} />} 
                                             /*@ts-ignore*/
                                            checked={
                                                product?.me_liked && 
                                                product?.me_liked[0]?.my_favorite
                                                    ? true
                                                    : false
                                                }
                                            />
                                       </Badge>
                                   </Button>
                                   <Button className={"view_btn"}>
                                       <img 
                                       src={"/restaurant/shopping_cart.png"}
                                       style={{ display: "flex"}}
                                       />
                                   </Button>
                                   <Button
                                   className={"like_view_btn"}
                                   style={{ right: "36px"}}
                                   >
                                       <Badge badgeContent={product.product_views} color="primary">
                                           <Checkbox
                                           icon={
                                               <RemoveRedEyeIcon style={{ color: "white" }} />
                                           }
                                           />
                                       </Badge>
                                   </Button>
                             </Box>  
                             <Box className={"dish_desc"}>
                                 <span className={"dish_title_text"}>Ajoyib shashlik</span>
                                 <div className={"dish_desc_text"}>
                                     <MonetizationOnIcon />8
                                 </div>
                                 </Box>
                             </Box>
                          );
                        })}
                    </Stack>
                </Stack>
             </Stack>
        </Container>

        <div className={"review_for_restaurant"}>
            <Container
            sx={{ mt: "100px"}}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
            >
                <Box className={"category_title"}>Oshxona haqida fikrlar</Box>
                <Stack
                flexDirection={"row"}
                display={"flex"}
                justifyContent={"space-between"}
                width={"100"}
                >
                    {Array.from(Array(4).keys()).map((ele, index) => {
                        return (
                            <Box className={"review_box"} key={index}>
                                <Box display={"flex"} justifyContent={"center"}>
                                    <img
                                    src={"/community/usman.jpg"}
                                    className={"review_img"}
                                    />
                                </Box>


                                <span className={"review_name"}>Abbas Usman</span>
                                <span className={"review_name_user"}>Foydalanuvchi</span>
                                <p className={"review_desc"}>
                                    Menga bu restarant taomlari yoqadi. 
                                    Barchanggizga tavsiya qilaman!!!
                                </p>
                                <div className={"review_stars"}>
                                    <StarIcon style={{ color: "#F2BD57" }} />
                                    <StarIcon style={{ color: "#F2BD57" }} />
                                    <StarIcon style={{ color: "#F2BD57" }} />
                                    <StarIcon style={{ color: "whitesmoke" }} />
                                    <StarIcon style={{ color: "whitesmoke" }} />
                                </div>

                            </Box>
                        );
                    })}
                </Stack>

            </Container>
        </div>

        <Container className="member_reviews">
            <Box className={"category_title"}>Oshxona haqida</Box>
            <Stack 
            display={"flex"}
            flexDirection={"row"}
            width={"90%"}
            sx={{ mt: "70px" }}
            >
                <Box
                className={"about_left"}
                sx={{
                    backgroundImage: `url('/restaurant/beshqozon.jpg')`
                }}
                >
                    <div className={"about_left_desc"}>
                        <span>Eng mazzali oshxona</span>
                        <p>Biz sizlarga xizmat ko’rsatayotganimizdan bag’oyatda xursadmiz. 
                            Bizning xaqimizda: O’z faoliyatimizni 1945 - yilda boshlaganmiz 
                            vaxokazo vaxokazo vaxokazo...</p>
                    </div>
                </Box>
                <Box className={"about_right"}>
                    {Array.from(Array(3).keys()).map((ele, index) => {
                       return (
                  <Box display={'flex'} flexDirection={"row"} key={index}>
                    <div className={"about_right_img"}></div>
                      <div className={"about_right_desc"}>
                        <span>Bizning mohir oshpazlarimiz</span>
                          <p>Bizning oshpazlarimiz dunto taniydigan 
                            oliygohlarda talim olishgan
                        </p>
                      </div>
                    </Box>
                    );
                  })}
               </Box>
            </Stack>


            <Stack 
            sx={{ mt: "60px" }}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
            >
                <Box className={"category_title"}>Oshxona Manzili</Box>
                <iframe
                style={{ marginTop: "60px" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25874.570379693923!2d128.57928115!3d35.8411244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e374e3a42dd1%3A0x9e079c3e7491b074!2sYeungnam%20Univ.%20Hosp.!5e0!3m2!1sru!2skr!4v1700558985209!5m2!1sru!2skr" 
                width="1320"
                height="500"
                referrerPolicy="no-referrer-when-downgrade"
                >
                </iframe>
            </Stack>
        </Container>
    </div>
    );
}
