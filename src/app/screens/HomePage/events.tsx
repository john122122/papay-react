import React from "react";
import { Box, Container, Stack } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Autoplay, Navigation, Pagination]);

export function Events () {
  const events_list = [ 
    {
              title: "Boyin foodga marhamat",
              desc: "yangicha uslubda Yangicha tam va Yangicha His",
              author: "Abdurahmon Mufid",
              date: "2023/11/25",
              location: "Tashkent, Nurafshon ko'cha",
              img: "/restaurant/restaurant02.jpeg",  
             },
             {
                  title: "Katta chegirma endi Bellisimoda",
                  desc: "yangicha uslubda Yangicha tam va Yangicha His",
                  author: "BellisimoUz",
                  date: "2023/11/25",
                  location: "Tashkent, Ko'kcha",
                  img: "/restaurant/pola.jpeg",  
                 },
                 {
                  title: "Hali His qilmagan tamni his qilmoqchimisiz",
                  desc: "Mehaba Promocodi orqali 50% chegirmaga ega bo'ling",
                  author: "Chicken House",
                  date: "2023/11/25",
                  location: "Tashkent, Chilonzor",
                  img: "/restaurant/yashil.jpg",  
                 },
                 {
                  title: "Yangicha Yondoshuv endi Uzbekistonda",
                  desc: "yangicha uslubda Yangicha tam va Yangicha His",
                  author: "Food city",
                  date: "2023/11/25",
                  location: "Tashkent, Qorasaroy ko'cha",
                  img: "/restaurant/restaurant04.jpeg",  
                 },
            ];

    return (
    <div className={"events_frame"}>
      <Container sx={{ overflow: "hidden" }}>
        <Stack className={"events_main"}>
          <Box className={"events_text"}>
            <span className={"category_title"}>Hodisalar</span>
          </Box>
          <Box className={"prev_next_frame"}>
            <img 
               src={"/icons/arrow-right.svg"} 
               className={"swiper-button-prev"}
              />
              <div className={"dot_frame_pagination swiper-pagination"}></div>
              <img 
                 src={"icons/arrow-right.svg"}
                 className={"swiper-button-next"}
                 style={{ transform: "rotate(-180deg)"}} 
               />
             </Box>
             <Swiper 
                className={"events_info swiper-wrapper"}
                slidesPerView={"auto"}
                centeredSlides={true}
                spaceBetween={30}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={{
                  el: ".swiper-pagination",
                  clickable: true,
                }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: true,
                }}
              >
                {events_list.map((value, number) => {
                  return (
                    <SwiperSlide className={"events_info_frame"}>
                      <div className={"events_img"}>
                        <img src={value.img} className={"events_img"} />
                      </div>
                      <Box className={"events_desc"}>
                        <Box className={"events_bott"}>
                         <Box className={"bott_left"}>
                          <div className={"event_title_speaker"}> 
                           <strong>{value.title}</strong>
                           <div className={"event_organizator"}>
                            <img 
                               src={"/icons/speaker.svg"}
                               style={{ width: "20px", marginRight: "10px" }}
                            />
                            <p className={"spec_text_author"}>{value.author}</p>
                            </div>
                           </div>

                           <p 
                             className={"text_desc"}
                             style={{ marginTop: "10px" }}
                          >
                            {""}
                            {value.desc}{" "}
                          </p>

                          <div 
                            className={"bott_info"}
                            style={{ marginTop: "10px" }}
                          >
                            <div className={"bott_info_main"}>
                              <img 
                                 src={"/icons/calendar.svg"} 
                                 style={{ marginRight: "10px" }} 
                               />
                               {value.date}
                            </div>
                            <div className={"bott_info_main"}>
                              <img 
                                src={"/icons/location.svg"} 
                                style={{ marginRight: "10px" }} 
                            />
                             {value.location}
                            </div>
                          </div>
                         </Box>
                       </Box>
                      </Box>
                    </SwiperSlide>
                    );
                   })}
               </Swiper>
            </Stack>
         </Container>
      </div>
    )
}
