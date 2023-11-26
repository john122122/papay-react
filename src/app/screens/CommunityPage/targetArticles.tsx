import React from "react";
import { Box, Link, Stack } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";
import moment from "moment";

export function TargetArticles(props: any) {
 return (
  <Stack>
   {props.targetBoArticles?.map((article: any, index: string) => {
    // const art_image_url = "/community/usman.jpg";
    return (
      <Link 
        className={"all_article_box"}
        //sx={{ textDecoration: "none" }}
        href={``}
      >
        <Box
          className={"all_article_img"}
        //   sx={{ backgroundImage: `url(${art_image_url})` }}
        ></Box>
        <Box className={"all_article_container"}>
         <Box alignItems={"center"} display={"flex"}>
          <img 
            src={"/community/usman.jpg"}
            width={"35px"}
            style={{ borderRadius: "50%", backgroundSize: "cover"}}
          />
          <span className={"all_article_athor_user"}>Usman</span>
         </Box>
         <Box 
           display={"flex"}
           flexDirection={"column"}
           sx={{ mt: "15px" }}
         >
            <span className={"all_article_title"}>evalution</span>
            <p className={"all_article_desc"}>
                Qarshi Tandir Go'sht
            </p>
         </Box>
        </Box>
      </Link>
     );
    })}
  </Stack>
  );
}