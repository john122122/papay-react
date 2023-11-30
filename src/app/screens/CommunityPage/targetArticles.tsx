import React from "react";
import { Box, Checkbox, Link, Stack } from "@mui/material";
import { RemoveRedEye } from "@mui/icons-material";
import { FavoriteBorder } from "@mui/icons-material";
import Favorite from "@mui/icons-material/Favorite";
import moment from "moment";

export function TargetArticles(props: any) {
  return (
    <Stack>
      {props.targetBoArticles?.map((articles: any, index: string) => {
        const art_image_url = "/community/usman.jpg";
        return (
          <Link
            className="all_article_box"
            sx={{ textDecoration: "none" }}
            href={``}
          >
            <Box
              className="all_article_img"
              sx={{ backgroundImage: `url(${art_image_url})` }}
            ></Box>
            <Box className="all_article_container">
              <Box alignItems={"center"} display={"flex"}>
                <img
                  src="/icons/qiz.svg"
                  alt=""
                  width={"35px"}
                  style={{ borderRadius: "50%", backgroundSize: "cover" }}
                />
                <span
                  className="all_article_author_user"
                  style={{ marginLeft: "10px" }}
                >
                  Usman
                </span>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{ mt: "15px" }}
              >
                <span className="all_article_title">evaluation</span>
                <p className="all_article_desc">
                  Texas De Brazil zo'r restarant
                </p>
              </Box>
              <Box>
              <Box 
                  className={"article_share_main"}
                  style={{
                    color: "#fff",
                    marginLeft: "150px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span>{moment().format("YY-MM-DD HH:mm")}</span>
                    <Checkbox
                      sx={{ ml: "40px" }}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite style={{ color: "red" }}/>}
                      checked={false}
                    />
                      <span style={{ marginRight: "18px" }}>100</span>
                   <RemoveRedEye />
                 <span style={{ marginLeft: "18px" }}>1000</span>
                </Box>
              </Box>
            </Box>
          </Link>
        );
      })}
    </Stack>
  );
}