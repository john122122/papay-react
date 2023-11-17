import React from "react";
import { Box, Container, Stack, Button } from "@mui/material";
import { AspectRatio, Card, CardOverflow, CssVarsProvider, IconButton, Link, Typography } from "@mui/joy";
import { Favorite, Visibility } from "@mui/icons-material";
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import CallIcon from "@mui/icons-material/Call";

export function BestRestaurants() {
    return (
    <div className="top_restaurant_frame">
       <img 
          src={"icons/line_group.svg"} 
          style={{ position: "absolute", left: "6%", transform: "rotate(360deg)"}}
        />
      <Container sx={{ paddingTop: "135px" }}>
         <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className="category_title">Zo'r Restarantlar</Box>
            <Stack sx={{ mt: "43px" }} flexDirection="row" >
             <CssVarsProvider>

              <Card 
                 variant="outlined"
                 sx={{ minHeight: 483, minWidth: 320, mr: "35px" }}
              >
              <CardOverflow>
                <AspectRatio ratio="1">
                  <img src={"restaurant/yashil.jpg"} alt=""/>
                </AspectRatio>
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
               </CardOverflow>
               <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                 Julian
               </Typography>
               <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                 <Link
                    href=""
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                   Tashkent, Chilonzor, Farhod Bozori
                   </Link>
                  </Typography>
                  <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                 <Link
                    href=""
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  >
                   +99890434345443
                   </Link>
                  </Typography>
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
                     <Visibility 
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
                 variant="outlined"
                 sx={{ minHeight: 483, minWidth: 320, mr: "35px" }}
              >
              <CardOverflow>
                <AspectRatio ratio="1">
                  <img src={"restaurant/yashil.jpg"} alt=""/>
                </AspectRatio>
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
               </CardOverflow>
               <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                 Julian
               </Typography>
               <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                 <Link
                    href=""
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                   Tashkent, Chilonzor, Farhod Bozori
                   </Link>
                  </Typography>
                  <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                 <Link
                    href=""
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  >
                   +99890434345443
                   </Link>
                  </Typography>
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
                     <Visibility 
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
                 variant="outlined"
                 sx={{ minHeight: 483, minWidth: 320, mr: "35px" }}
              >
              <CardOverflow>
                <AspectRatio ratio="1">
                  <img src={"restaurant/yashil.jpg"} alt=""/>
                </AspectRatio>
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
               </CardOverflow>
               <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                 Julian
               </Typography>
               <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                 <Link
                    href=""
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                   Tashkent, Chilonzor, Farhod Bozori
                   </Link>
                  </Typography>
                  <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                 <Link
                    href=""
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  >
                   +99890434345443
                   </Link>
                  </Typography>
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
                     <Visibility 
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

           <Stack 
             flexDirection={"row"}
             justifyContent={"flex-end"}
             style={{ width: "100%", marginTop: "16px" }}
             >
            <Button style={{ background: "#1976d2", color: "#FFFFFF"}}>
              Barchasini Ko'rish
            </Button>
             </Stack>
          </Stack>
      </Container>
    </div>
  );
}