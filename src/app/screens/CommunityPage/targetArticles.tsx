import React from "react";
import { Box, Checkbox, Link, Stack } from "@mui/material";
import { RemoveRedEye } from "@mui/icons-material";
import { FavoriteBorder } from "@mui/icons-material";
import Favorite from "@mui/icons-material/Favorite";
import moment from "moment";
import { BoArticle } from "../../../types/boArticle";
import { serverApi } from "../../../lib/config";

export function TargetArticles(props: any) {
  return (
    <Stack>
      {props.targetBoArticles?.map((article: BoArticle) => {
        const art_image_url = article?.art_image ? `${serverApi}/${article.art_image}` : "/community/usman.jpg";
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
                  {article?.member_data.mb_nick}
                </span>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{ mt: "15px" }}
              >
                <span className="all_article_title">
                  {article?.bo_id}
                </span>
                <p className="all_article_desc">
                  {article?.art_subject}
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
                    checkedIcon={<Favorite style={{ color: "red" }} />}
                    id={article?._id}
                    /*@ts-ignore*/
                    checked={false}
                  />
                    <span style={{ marginRight: "18px" }}>{article?.art_likes}</span>
                   <RemoveRedEye />
                 <span style={{ marginLeft: "18px" }}>{article?.art_views}</span>
                </Box>
              </Box>
            </Box>
          </Link>
        );
      })}
    </Stack>
  );
}