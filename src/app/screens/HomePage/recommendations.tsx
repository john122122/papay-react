import React from "react";
import { Avatar, Box, Button, Container, Stack } from "@mui/material";

export function Recommendations () {
    return (
    <div className={"top_article_frame"}>
      <Container 
        maxWidth="lg"
        sx={{ mb: "50px", mt: "60px" }}
        style={{ position: "relative" }}
      >
        <Stack 
           flexDirection={"column"}
           alignItems={"center"}
           sx={{ mt: "45px" }}
        >
          <Box className={"category_title"}>Tafsiya qilingan maqolalar</Box>
          <Stack className={"article_main"} flexDirection={"row"}>
            <Stack className={"article_container"}>
              <Box className={"article_category"}>Ko'p ko'rilgan</Box>

              <Stack className={"article_box"}>
                <Box 
                  className={"article_img"}
                  sx={{
                    backgroundImage:  `url(https://images.contentstack.io/v3/assets/blt1306150c2c4003bc/blt57450202d74b13e3/60befc62324cea0e69782639/00-indonesia_s-5-national-dishes-getty-cropped.jpg)`
                  }}
                ></Box>
                <Box className={"article_info"}>
                  <Box className={"article_main_info"}>
                    <div className={"article_author"}>
                      <Avatar 
                         alt="Author_photo"
                         src={"/auth/default_user.svg"}
                         sx={{ width: "35px", height: "35px" }}
                      />
                      <span className={"author_username"}>Davron</span>
                    </div>
                    <span className={"article_title"}>
                      Eng qiziqarli va shirin taomlar
                    </span>
                    <p className={"article_desc"}></p>
                  </Box>
                </Box>
              </Stack>

              <Stack className={"article_box"}>
                <Box 
                  className={"article_img"}
                  sx={{
                    backgroundImage:  `url(https://images.contentstack.io/v3/assets/blt1306150c2c4003bc/blt57450202d74b13e3/60befc62324cea0e69782639/00-indonesia_s-5-national-dishes-getty-cropped.jpg)`
                  }}
                ></Box>
                <Box className={"article_info"}>
                  <Box className={"article_main_info"}>
                    <div className={"article_author"}>
                      <Avatar 
                         alt="Author_photo"
                         src={"/auth/default_user.svg"}
                         sx={{ width: "35px", height: "35px" }}
                      />
                      <span className={"author_username"}>Davron</span>
                    </div>
                    <span className={"article_title"}>
                      Eng qiziqarli va shirin taomlar
                    </span>
                    <p className={"article_desc"}></p>
                  </Box>
                </Box>
              </Stack>

              <Box className={"article_category"} sx={{ marginTop: "10px" }}>
                Ko'p yoqtirilgan
              </Box>

              <Stack className="article_box">
                <Box 
                  className={"article_img"}
                  sx={{ 
                    backgroundImage: `url(https://images.contentstack.io/v3/assets/blt1306150c2c4003bc/blt57450202d74b13e3/60befc62324cea0e69782639/00-indonesia_s-5-national-dishes-getty-cropped.jpg)`
                  }}
                ></Box>
                <Box className={"article_info"}>
                  <Box className={"article_main_info"}>
                    <div className={"article_author"}>
                      <Avatar 
                        alt="Author_photo"
                        src={"/auth/default_user.svg"}
                        sx={{ width: "35px", height: "35px" }}
                      />
                      <span className={"author_username"}>James</span>
                    </div>
                    <span className={"article_title"}>
                      Qashqadaryo tandiring mazasi ozgacha
                    </span>
                    <p className={"article_desc"}></p>
                  </Box>
                </Box>
              </Stack>
              
              <Stack className="article_box">
                <Box 
                  className={"article_img"}
                  sx={{ 
                    backgroundImage: `url(https://images.contentstack.io/v3/assets/blt1306150c2c4003bc/blt57450202d74b13e3/60befc62324cea0e69782639/00-indonesia_s-5-national-dishes-getty-cropped.jpg)`
                  }}
                ></Box>
                <Box className={"article_info"}>
                  <Box className={"article_main_info"}>
                    <div className={"article_author"}>
                      <Avatar 
                        alt="Author_photo"
                        src={"/auth/default_user.svg"}
                        sx={{ width: "35px", height: "35px" }}
                      />
                      <span className={"author_username"}>James</span>
                    </div>
                    <span className={"article_title"}>
                      Qashqadaryo tandiring mazasi ozgacha
                    </span>
                    <p className={"article_desc"}></p>
                  </Box>
                </Box>
               </Stack>
              </Stack>

              <Stack className={"article_container"}>
                <Box className={"article_category"}>Mashhurlar</Box>
                <Box className={"article_news"}>
                  <h1 style={{ color: "orange" }}> TViever</h1>
                  <img src="/restaurant/dish.jpeg" alt="" />
                </Box>
                <Box className={"article_news"}>
                  <h1 style={{ color: "orange" }}> TViever</h1>
                  <img src="/restaurant/dish.jpeg" alt="" />
                </Box>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}