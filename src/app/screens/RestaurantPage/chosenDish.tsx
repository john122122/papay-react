import React, {useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Container, Stack } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Marginer from '../../components/marginer';
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";

const chosen_list = Array.from(Array(3).keys());

export function ChosenDish() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

    return (
       <div className="chosen_dish_page">
        <Container className="dish_container"
        sx={{display: "flex"}}
        >
         <Stack className="chosen_dish_slider">
          <Swiper 
            className="dish_swiper"
            loop={true}
            spaceBetween={10}
            navigation={true} 
            modules={[ FreeMode, Navigation, Thumbs ]}
          >
            {chosen_list.map((ele) => {

              return (
                <SwiperSlide>
                  <img 
                    style={{ width: "100%", height: "100%" }}
                    src="/others/steackk.png"
                />
                </SwiperSlide>
              );
            })}
          </Swiper>

          
          
           {/* 1.2 div: small pictures */}
           <div className={"one_dish_pics"}>
            <img className="one_dish_pic" src="/others/Rectangle_4301.png" />
            <img className="one_dish_pic" src="/others/Rectangle_4302.png" />
            <img className="one_dish_pic" src="/others/Rectangle_4303.png" />
          </div>
          </Stack>

                {/* Info about dish */}
           <Stack className={"chosen_dish_info_container"}>
            <Box className={"chosen_dish_info_box"}>
             <strong className={"dish_txt"}>Qarsildoq Burger</strong>
              <span className={"resto_name"}>Usman Restaurant</span>
               <Box className={"rating_box"}>
                <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
                 <div className={"evalution_box"}>
                  <div
                   style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "20px",
                   }} 
                  >
                    <Checkbox 
                     {...label}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite style={{ color: "red"}} />}
                      /* @ts-ignore*/
                      checked={true}
                    />
                     
                   <span>50ta</span>
                  </div>
                   <div style={{ display: "flex", alignItems: "center" }}>
                    <RemoveRedEyeIcon sx={{ mr: "10px" }} />
                     <span>100ta</span>
                   </div>
                 </div>
               </Box>
              <p className={"dish_desc_info"}> 
                          Juda mazzali sandvich. 
                        Bizning restaranimiz judayam 
                     mazsali va sifatli taomlarni iste'mol qilishingiz mumkin. </p>
              <Marginer 
               //direction="horizantal"
                       height="1"
                       width="100%"
                       bg="#000000"
              />
              <div className={"dish_price_box"}>
                <span>Narx</span>
                <span>$11</span>
              </div>
              <div className={"button_box"}>
                <Button variant="contained">Savatga qo'shish</Button>
              </div>
            </Box>
          </Stack>
        </Container>
     </div>
   );
}