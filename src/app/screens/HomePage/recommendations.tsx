import { Avatar, Box, Container, Stack } from "@mui/material";
import React from "react";
export function Recomendations() {
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
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className="category_title">Tafsiya qilingan maqolalar</Box>
          <Stack flexDirection={"row"} className="article_main">
            <Stack flexDirection={"column"}>
              <Stack className="article_container">
                <Box className="article_categorya_title">Ko’p ko’rilgan</Box>
                <Stack flexDirection={"column"}>
                  <Stack className="articel_box" flexDirection={"row"}>
                    <Box className="article_img"></Box>
                    <Stack className="article_info">
                      <Box className="article_main_info">
                        <div className="article_author">
                          <Avatar
                            alt="author photo"
                            src="/ath/user.svg"
                            sx={{ width: "35px", height: "35px" }}
                          />
                          <span className="auth_username">Anvarbek</span>
                        </div>
                        <Box className="article_title" sx={{ mt: "22px" }}>
                          Eng mazali va Shirin <br /> taomlar
                        </Box>
                        <p className="article_desc"></p>
                      </Box>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack flexDirection={"column"}>
                  <Stack className="articel_box" flexDirection={"row"}>
                    <Box className="article_img"></Box>
                    <Stack className="article_info">
                      <Box className="article_main_info">
                        <div className="article_author">
                          <Avatar
                            alt="author photo"
                            src="/ath/user.svg"
                            sx={{ width: "35px", height: "35px" }}
                          />
                          <span className="auth_username">Anvarbek</span>
                        </div>
                        <Box className="article_title" sx={{ mt: "22px" }}>
                          Eng mazali va Shirin <br /> taomlar
                        </Box>
                        <p className="article_desc"></p>
                      </Box>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
              <Stack className="article_container">
                <Box className="article_categorya_title">Ko’p Yoqtirilgan</Box>
                <Stack flexDirection={"column"}>
                  <Stack className="articel_box" flexDirection={"row"}>
                    <Box className="article_img"></Box>
                    <Stack className="article_info">
                      <Box className="article_main_info">
                        <div className="article_author">
                          <Avatar
                            alt="author photo"
                            src="/ath/user.svg"
                            sx={{ width: "35px", height: "35px" }}
                          />
                          <span className="auth_username">Anvarbek</span>
                        </div>
                        <Box className="article_title" sx={{ mt: "22px" }}>
                          Eng mazali va Shirin <br /> taomlar
                        </Box>
                        <p className="article_desc"></p>
                      </Box>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack flexDirection={"column"}>
                  <Stack className="articel_box" flexDirection={"row"}>
                    <Box className="article_img"></Box>
                      <Stack className="article_info">
                      <Box className="article_main_info">
                        <div className="article_author">
                          <Avatar
                            alt="author photo"
                            src="/ath/user.svg"
                            sx={{ width: "35px", height: "35px" }}
                          />
                          <span className="auth_username">Anvarbek</span>
                        </div>
                        <Box className="article_title" sx={{ mt: "22px" }}>
                          Eng mazali va Shirin <br /> taomlar
                        </Box>
                        <p className="article_desc"></p>
                      </Box>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack className="article_container">
              <Box className="article_categorya_title">Mashhurlar</Box>
              <Box className="article_news">
                <h1 style={{ color: "orange" }}>TViewer</h1>
              </Box>
              <Box className="article_news">
                <h1 style={{ color: "orange" }}>TViewer</h1>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}