import React from "react";
import { Box, Container,} from "@mui/material";
import { Stack } from "@mui/system"
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { CssVarsProvider } from "@mui/joy/styles";
import { CardOverflow, IconButton } from "@mui/joy";
import { Favorite } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
// Redux
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveTopRestaurants } from "../../screens/HomePage/selector";
import { Restaurant } from "../../../types/user";
import { serverApi } from "../../../lib/config";


/** Redux selector */
const topRestaurantRetriever = createSelector (
   retrieveTopRestaurants,
   (topRestaurants) => ({
     topRestaurants,
   })
 );

export function TopRestaurants() {
   const { topRestaurants } = useSelector(topRestaurantRetriever);

  console.log("topRestaurants::", topRestaurants);

    return (
    <div className="top_restaurant_frame">
      <Container>
        <Stack 
           flexDirection={"column"}
           alignItems={"center"}
           sx={{ mt: "45px" }} 
        >
          <Box className="category_title">TOP Restaurantlar</Box>
           <Stack sx={{ mt: "43px" }} flexDirection={"row"} m={"16px"}>
            {topRestaurants.map((ele: Restaurant) => {
              const image_path = `${serverApi}/${ele.mb_image}`;
               return (
               <CssVarsProvider key={ele._id}>
                 <Card 
                     sx={{ 
                        minHeight: "430px", 
                        minWidth: 325, 
                        mr: "35px", 
                        cursor: "pointer",
                    }}
                  >
                <CardCover>
                       <img
                          src={image_path}
                          loading="lazy"
                          alt=""
                        />
                </CardCover>
                <CardCover
                        sx={{
                           background:
                              'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                        }}
                    />
                  <CardContent sx={{ justifyContent: 'flex-end' }}>
                  <Typography 
                     level="h2"
                     fontSize="lg" 
                     textColor="#fff"
                     mb={1}
                  >
                     {ele.mb_nick}
                  </Typography>
                  <Typography
                     startDecorator={<LocationOnRoundedIcon />}
                     textColor="neutral.300"
                  >
                     {ele.mb_address}
                  </Typography>
                  </CardContent>
                  <CardOverflow // bu qisim like button ni yonida chiziq xosil qiladi
                       sx={{ 
                          display: "flex",
                          flexDirection: "row", // new add...
                          gap: 1.5,
                          py: 1.5,
                          px: "var(--Card-padding)",
                          borderTop: "1px solid",
                       }}
                    >    
                     <IconButton // bu qisim like tugmasini xosil qiladi
                        aria-label="like minimal photography"
                        size="md"
                        variant="solid"
                        color="neutral"
                        sx={{
                            position: "absolute",
                            zIndex: 2,
                            borderRadius: "50%",
                            right: "1rem",
                            bottom: 45,
                            transform: "translateY(50%)",
                            color: "rgba(0, 0, 0,.4)",
                        }}
                     >
                        <Favorite 
                           style={{ 
                              fill: ele?.me_liked && ele?.me_liked[0].my_favorite 
                                 ? "red"
                                 : "wihte", 
                              }} 
                           />
                       </IconButton> 
    
                       <Typography
                          level="body-sm"
                          sx={{
                            fontSize: "16px", // bu ikkisi yangi qushildi
                            lineHeight: "1.5",
    
                             fontWeight: "md",
                             color: "neutral.300",
                             alignItems: "center",
                             display: "flex",
                          }}
                       >
                        {ele.mb_views}
                         <VisibilityIcon 
                               sx={{ 
                                   fontSize: 20, 
                                   marginLeft: "5px" 
                                }} 
                            />
                         </Typography>
                         <Box 
                            sx={{ 
                               width: 2, 
                               bgcolor: "divider" 
                            }} 
                         />
                         <Typography 
                          sx={{
                            fontWeight: "md",
                            color: "neutral.300",
                            alignItems: "center",
                            display: "flex",
                         }} 
                         >
                        <div>{ele.mb_likes}</div>
                        <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                       </Typography>
                    </CardOverflow>
                  </Card>
                </CssVarsProvider>
                 );
               }
             )
           }
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};