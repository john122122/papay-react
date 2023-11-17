import React from "react";
import { Container, Box, Stack } from "@mui/material";
import { MonetizationOn } from "@mui/icons-material/";

export function BestDishes() {
    return (
    <div className="best_dishes_frame">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
         <Box className="category_title" marginTop={"255px"}>Trendagi Ovqatlar</Box>
          <Stack sx={{ mt: "43px" }} flexDirection={"row"}>
            
            <Box className="dish_box">
             <Stack className="dish_img" 
               sx={{ 
                 backgroundImage: `url(
              "https://images.contentstack.io/v3/assets/blt1306150c2c4003bc/blt57450202d74b13e3/60befc62324cea0e69782639/00-indonesia_s-5-national-dishes-getty-cropped.jpg"
              )`,
            }}
             >
              <div className={"dish_sale"}>normal size</div>
              <div className={"view_btn"}>
                Batafsil ko'rish
                <img 
                  src="/icons/arrow_right.svg"
                  style={{ marginLeft: "9px"}}
                  />
              </div>
             </Stack>
             <Stack className={"dish_desc"}>
              <span className={"dish_title_text"}>Chicken Pasta</span>
              <span className={"dish_desc_text"}>
                <MonetizationOn />
                15
              </span>
             </Stack>
            </Box>

            <Box className="dish_box">
             <Stack className="dish_img" 
               sx={{ 
                 backgroundImage: `url(
              "https://images.contentstack.io/v3/assets/blt1306150c2c4003bc/blt57450202d74b13e3/60befc62324cea0e69782639/00-indonesia_s-5-national-dishes-getty-cropped.jpg"
              )`,
            }}
             >
              <div className={"dish_sale"}>normal size</div>
              <div className={"view_btn"}>
                Batafsil ko'rish
                <img 
                  src="/icons/arrow_right.svg"
                  style={{ marginLeft: "9px"}}
                  />
              </div>
             </Stack>
             <Stack className={"dish_desc"}>
              <span className={"dish_title_text"}>Chicken Pasta</span>
              <span className={"dish_desc_text"}>
                <MonetizationOn />
                15
              </span>
             </Stack>
            </Box>

            <Box className="dish_box">
             <Stack className="dish_img" 
               sx={{ 
                 backgroundImage: `url(
              "https://images.contentstack.io/v3/assets/blt1306150c2c4003bc/blt57450202d74b13e3/60befc62324cea0e69782639/00-indonesia_s-5-national-dishes-getty-cropped.jpg"
              )`,
            }}
             >
              <div className={"dish_sale"}>normal size</div>
              <div className={"view_btn"}>
                Batafsil ko'rish
                <img 
                  src="/icons/arrow_right.svg"
                  style={{ marginLeft: "9px"}}
                  />
              </div>
             </Stack>
             <Stack className={"dish_desc"}>
              <span className={"dish_title_text"}>Chicken Pasta</span>
              <span className={"dish_desc_text"}>
                <MonetizationOn />
                15
              </span>
             </Stack>
            </Box>
          
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}