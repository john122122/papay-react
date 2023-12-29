import React, { useRef } from "react";
import { Box, Container, Stack, Button } from "@mui/material";
import { Favorite, Visibility } from "@mui/icons-material";
import { 
  AspectRatio, 
  Card, 
  CardOverflow, 
  CssVarsProvider, 
  IconButton, 
  Link, 
  Typography 
} from "@mui/joy";
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import CallIcon from "@mui/icons-material/Call";
// Redux
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveBestRestaurants } from "../../screens/HomePage/selector";
import { Restaurant } from "../../../types/user";
import { serverApi } from "../../../lib/config";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import MemberApiService from "../../apiServices/memberApiService";
import { sweetErrorHandling, sweetTopSmallSuccessAlert } from "../../../lib/sweetAlert";
import { useHistory } from "react-router-dom";


/** Redux selector */
const bestRestaurantRetriever = createSelector (
  retrieveBestRestaurants,
  (bestRestaurants) => ({
    bestRestaurants,
  })
);

export function BestRestaurants() {
  /** INITIALIZATIONS */
  const history = useHistory();
  const { bestRestaurants } = useSelector(bestRestaurantRetriever);
  const refs: any = useRef([]);


  /** HANDLERS */
  // sahifadan - sahifaga olib utish codlari
  const chosenRestaurantHandler = (id: string) => {
    history.push(`/restaurant/${id}`);
  };
  
  const goRestaurantsHandler = () => history.push("/restaurant");
  // likeni yuzaga keltiradigan kodlarimiz
  const targetLikeBest = async (e: any, id: string) => {
    try {
       assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);

       const memberService = new MemberApiService(),
          like_result: any = await memberService.memberLikeTarget({
          like_ref_id: id,
          group_type: "member",
       });
       assert.ok(like_result, Definer.general_err1);

       if (like_result.like_status > 0) {
         e.target.style.fill = "red";
          refs.current[like_result.like_ref_id].innerHTML++;
       } else {
          e.target.style.fill = "white";
          refs.current[like_result.like_ref_id].innerHTML--;
       }
       await sweetTopSmallSuccessAlert("success", 700, false);
    } catch (err: any) {
       console.log("targetLikeBest, ERROR:", err);
       sweetErrorHandling(err).then();
    }
 };
  
    return (
    <div className="best_restaurant_frame">
       <img 
          src={"icons/line_group.svg"} 
          style={{ position: "absolute", left: "6%", transform: "rotate(360deg)"}}
        />
      <Container sx={{ paddingTop: "135px" }}>
         <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className="category_title">Zo'r Restarantlar</Box>
            <Stack sx={{ mt: "43px" }} flexDirection={"row"}>
            {bestRestaurants.map((ele: Restaurant) => {
             const image_path = `${serverApi}/${ele.mb_image}`;
             return (
              <CssVarsProvider key={ele._id}>
                 <Card 
                    onClick={() => chosenRestaurantHandler(ele._id)} 
                 variant="outlined"
                   sx={{
                     minHeight: 483,
                     minWidth: 320,
                     mr: "35px",
                     cursor: "pointer",
                   }}
              >
              <CardOverflow>
                <AspectRatio ratio="1">
                  <img src={image_path} alt=""/>
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
                    onClick={(e) => {e.stopPropagation()}}
                 >
                    <Favorite
                      onClick={(e) => targetLikeBest(e, ele._id)}  
                      style={{
                        fill: 
                          ele?.me_liked && ele?.me_liked[0]?.my_favorite
                            ? "red" 
                            : "white",
                         }}
                       />
                   </IconButton> 
               </CardOverflow>
               <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                 {ele.mb_nick} restaurant
               </Typography>
               <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                 <Link
                    href=""
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                   {ele.mb_address}
                   </Link>
                  </Typography>
                  <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                 <Link
                    href=""
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  >
                   {ele.mb_phone}
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
                    {ele.mb_views}
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
                       <div
                          ref={(element) => (refs.current[ele._id] = element)} 
                       >
                         {ele.mb_likes}
                       </div>
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
         
           <Stack 
             flexDirection={"row"}
             justifyContent={"flex-end"}
             style={{ width: "100%", marginTop: "16px" }}
             >
              <Button
                style={{ background: "#1976d2", color: "#FFFFFF" }}
                onClick={goRestaurantsHandler}
              >
              Barchasini Ko'rish
            </Button>
             </Stack>
          </Stack>
      </Container>
    </div>
  );
}