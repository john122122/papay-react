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

export function TopRestaurants() {
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
            <CssVarsProvider>

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
                      src="/restaurant/restaurant02.jpeg"
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
              <Typography level="title-lg" textColor="#fff">
                    Korea. Shouth
               </Typography>
               <Typography
                  startDecorator={<LocationOnRoundedIcon />}
                  textColor="neutral.300"
                >
                   Tashkent, Chilonzor, Oq-Tepa
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
                    <Favorite style={{ fill: "wihte" }} />
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
                     100{ " " }
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
                    <div>50</div>
                    <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                   </Typography>
                </CardOverflow>
              </Card> 

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
                      src="/restaurant/dish.jpeg"
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
              <Typography level="title-lg" textColor="#fff">
                    Yangi Yo'l. Toshkent viloyati
               </Typography>
               <Typography
                  startDecorator={<LocationOnRoundedIcon />}
                  textColor="neutral.300"
                >
                   Tashkent, Chilonzor, Oq-Tepa
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
                    <Favorite style={{ fill: "wihte" }} />
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
                     100{ " " }
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
                    <div>50</div>
                    <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                   </Typography>
                </CardOverflow>
              </Card> 

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
                      src="/restaurant/restaurant02.jpeg"
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
              <Typography level="title-lg" textColor="#fff">
                    Korea. Shouth
               </Typography>
               <Typography
                  startDecorator={<LocationOnRoundedIcon />}
                  textColor="neutral.300"
                >
                   Tashkent, Chilonzor, Oq-Tepa
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
                    <Favorite style={{ fill: "wihte" }} />
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
                     100{ " " }
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
                    <div>50</div>
                    <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                   </Typography>
                </CardOverflow>
              </Card>
               
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  )
}