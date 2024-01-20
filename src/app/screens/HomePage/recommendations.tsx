import { Avatar, Box, Container, Stack } from "@mui/material";
import React, { useEffect } from "react";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import {createSelector} from "reselect";
import { 
  setBestBoArticles,
  setTrendBoArticles,
  setNewsBoArticles,
 } from "./slice";
import {
  retrieveTrendBoArticles,
  retrieveNewsBoArticles,
  retrieveBestBoArticles,
} from "./selector";
import { Dispatch } from "@reduxjs/toolkit";
import { BoArticle } from "../../../types/boArticle";
import CommunityApiService from "../../apiServices/communityApiService";
import { serverApi } from "../../../lib/config";
import TViewer from "../../components/tuiEditor/TViewer";

/** REDUX SLICE */ 
const actionDispatch = (dispatch: Dispatch) => ({
  setBestBoArticles: (data: BoArticle[]) => dispatch(setBestBoArticles(data)),
  setTrendBoArticles: (data: BoArticle[]) => dispatch(setTrendBoArticles(data)),
  setNewsBoArticles: (data: BoArticle[]) => dispatch(setNewsBoArticles(data)),
});

/** REDUX SELECTOR */
const bestBoArticlesRetriever = createSelector (
    retrieveBestBoArticles,
    (bestBoArticles) =>({
      bestBoArticles,
    })
);
const trendBoArticlesRetriever = createSelector (
  retrieveTrendBoArticles,
  (trendBoArticles) =>({
    trendBoArticles,
  })
);
const newsBoArticlesRetriever = createSelector (
  retrieveNewsBoArticles,
  (newsBoArticles) =>({
    newsBoArticles,
  })
);

export function Recomendations() {
  /** INITIALIZATIONS **/
  const { setBestBoArticles, setTrendBoArticles, setNewsBoArticles } = actionDispatch(useDispatch());
  const { bestBoArticles } = useSelector(bestBoArticlesRetriever);
  const { trendBoArticles } = useSelector(trendBoArticlesRetriever);
  const { newsBoArticles } = useSelector(newsBoArticlesRetriever);

  useEffect(() => {
    const communityService = new CommunityApiService();
    communityService
      .getTargetArticles({
        bo_id: "all",
        page: 1,
        limit: 2,
        order: "art_views",
      })
      .then((data) => setBestBoArticles(data))
      .catch((err) => console.log(err));
    
    communityService
      .getTargetArticles({
        bo_id: "all",
        page: 1,
        limit: 2,
        order: "art_likes",
      })
      .then((data) => setTrendBoArticles(data))
      .catch((err) => console.log(err));
    
    communityService
      .getTargetArticles({
        bo_id: "celebrity",
        page: 1,
        limit: 2,
        order: "art_views",
      })
      .then((data) => setNewsBoArticles(data))
      .catch((err) => console.log(err));
  }, []);
 
  return (
    <div className="top_article_frame">
      <Container
        maxWidth="lg"
        style={{
          marginTop: "50px",
          marginBottom: "60px",
          position: "relative",
        }}
      >
        <Box className="category_title" >Tafsiya qilingan maqolalar</Box>
          <Stack flexDirection={"row"} className="article_main">
           
              <Stack className="article_container" flexDirection={"row"}>
                <Stack flexDirection={"column"}>

                <Box className="article_categorya_title">Ko’p ko’rilgan</Box>
                {bestBoArticles?.map((article: BoArticle) => {
                  const art_image_url = article?.art_image
                    ? `${serverApi}/${article?.art_image}`
                    : "/restaurant/sezor.jpeg";
                  
                  return (
                    <Stack flexDirection={"column"}>
                      <Stack
                        className="article_box"
                        flexDirection={"row"}
                        key={article._id}
                      >
                        <Box
                          className="article_img"
                          sx={{
                            backgroundImage: `url(${art_image_url})`,
                          }}
                        ></Box>
                        <Stack className="article_info">
                          <Box className="article_main_info">
                            <div className="article_author">
                              <Avatar
                                alt="author photo"
                                src={
                                  article?.member_data?.mb_image
                                    ? `${serverApi}/${article?.member_data?.mb_image}`
                                    : "/restaurant/sezor.jpeg"
                                }
                                sx={{ width: "35px", height: "35px" }}
                              />
                              <span className="auth_username">
                                {article?.member_data?.mb_nick}
                              </span>
                            </div>
                            <Box className="article_title" sx={{ mt: "22px" }}>
                              {article?.art_subject}
                            </Box>
                            <p className="article_desc"></p>
                          </Box>
                        </Stack>
                      </Stack>
                    </Stack>
                  );
                })}
                  
                <Box className="article_categorya_title">Ko’p Yoqtirilgan</Box>
                
                    
                  {trendBoArticles?.map((article: BoArticle) => {
                  const art_image_url = article?.art_image
                    ? `${serverApi}/${article?.art_image}`
                    : "/restaurant/sezor.jpeg";

                  return (
                    <Stack flexDirection={"column"}>
                      <Stack
                        className="article_box"
                        flexDirection={"row"}
                        key={article?._id}
                      >
                        <Box
                          className="article_img"
                          sx={{
                            backgroundImage: `url(${art_image_url})`,
                          }}
                        ></Box>

                        <Stack className="article_info">
                          <Box className="article_main_info">
                            <div className="article_author">
                              <Avatar
                                alt="Author_photo"
                                src={
                                  article?.member_data?.mb_image
                                    ? `${serverApi}/${article?.member_data?.mb_image}`
                                    : "/restaurant/sezor.jpeg"
                                }
                                sx={{ width: "35px", height: "35px" }}
                              />
                              <span className="auth_username">
                                {article?.member_data?.mb_nick}
                              </span>
                            </div>
                            <Box className="article_title" sx={{ mt: "22px" }}>
                              {article?.art_subject}
                            </Box>
                            <p className="article_desc"></p>
                          </Box>
                        </Stack>

                      </Stack>
                    </Stack>
                  );
                })}
              
                </Stack>

              </Stack>
              
              <Stack className="article_container">
                <Box className="article_categorya_title">Mashhurlar</Box>
                {newsBoArticles?.map((article: BoArticle) => {
                  return (
                    <Box className={"article_news"}>
                      <TViewer chosenSingleBoArticle={article} />
                    </Box>
                  );
                })}
              </Stack>
          </Stack>

      </Container>
    </div>
  );
}