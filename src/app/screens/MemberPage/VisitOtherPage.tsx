import React, { useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Telegram from "@mui/icons-material/Telegram";
import {YouTube} from "@mui/icons-material";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { MemberPosts } from "./memberPosts";
import { MemberFollowers } from "./memberFollowers";
import { MemberFollowing } from "./memberFollowing";
import { MySettings } from "./mySettings";
import TViewer from "../../components/tuiEditor/TViewer";

export function VisitOtherPage(props: any) {
    /** INITIALIZATIONS **/
  const [value, setValue] = useState("4");

  /** HANDLERS **/
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className={"my_page"}>
        <Container maxWidth="lg" sx={{ mt: "50px", mb: "50px" }}>
            <Stack className={"my_page_frame"}>
                 <TabContext value={value}>
                    <Stack className={"my_page_left"}>
                        <Box display={"flex"} flexDirection={"column"}>
                            <TabPanel value={"1"}>
                                <Box className={"menu_name"}>Maqolalar</Box>
                                <Box className={"menu_content"}>
                                    <MemberPosts/>
                                </Box>
                            </TabPanel>
                            <TabPanel value={"2"}>
                                <Box className={"menu_name"}>Followers</Box>
                                <Box className={"menu_content"}>
                                    <MemberFollowers action_enabled={false} />
                                </Box>
                            </TabPanel>

                            <TabPanel value={"3"}>
                                <Box className={"menu_name"}>Following</Box>
                                <Box className={"menu_content"}>
                                    <MemberFollowing action_enabled={false} />
                                </Box>
                            </TabPanel>

                            <TabPanel value={"4"}>
                                <Box className={"menu_name"}>Tanlangan Maqola</Box>
                                <Box className={"menu_content"}>
                                <TViewer text={`<h3>Hello</h3>`}/>
                                </Box>
                            </TabPanel>
                        </Box>
                    </Stack>

                    <Stack className={"my_page_right"}>
                        <Box className={"order_info_box"}>
                            <a onClick={() => setValue("6")} className={"settings_btn"}>
                                {/* <SettingsIcon/> */}
                            </a>
                            <Box 
                               display={"flex"}
                               flexDirection={"column"}
                               alignItems={"center"}
                            >
                                <div className={"order_user_img"}>
                                    <img
                                       src={"/community/david.png"}
                                       className={"order_user_avatar"} 
                                    />
                                    <div className={"user_corner_icon"}>
                                        <img src={"/icons/odamcha.svg"} />
                                    </div>
                                </div>
                                <span className={"user_name"}>David Bakhem</span>
                                <span className={"order_user_prof"}>USER</span>
                            </Box>
                            <Box className={"user_media_box"}>
                                <Facebook />
                                <Instagram />
                                <Telegram />
                                <YouTube  />
                            </Box>
                            <Box className={"user_media_box_follow"}
                                     sx={{
                                         flexDirection: "row",
                                     }}
                                >
                                    <p className={"follows"}>Followers: 3 Following: 2</p>
                            </Box>
                            <p className={"user_desc"}>"qushimcha malumot kiritilmagan"</p>
                            <Box 
                               display={"flex"}
                               justifyContent={"flex-end"}
                               sx={{ mt: "10px"}}
                            >
                                <TabList 
                                   onChange={handleChange}
                                   aria-label="lab AIP tabs example"
                                >
                                    <Tab 
                                       style={{ flexDirection: "column" }}
                                       value={"4"}
                                       component={() => (
                                        <Button
                                            variant={"contained"}
                                            onClick={() => setValue("4")}
                                        >
                                        Maqola Yozish
                                        </Button>
                                      )}
                                    />
                                </TabList>
                            </Box>
                        </Box>

                        <Box className={"my_page_menu"}>
                            <TabList
                              onChange={handleChange}
                              aria-label="lab AIP tabs example"
                            >
                                <Tab 
                                   style={{ flexDirection: "column" }}
                                   value={"1"}
                                   component={() => (
                                    <div
                                      className={`menu_box ${value} `}
                                      onClick={() => setValue("1")}
                                    >
                                        <img src={"/icons/pencil.svg"} />
                                        <span>Maqolalarim</span>
                                    </div>
                                   )}
                                />
                                <Tab 
                                  style={{ flexDirection: "column"}}
                                  value={"2"}
                                  component={() => (
                                    <div
                                       className={`menu_box ${value} `}
                                       onClick={() =>setValue("2")}
                                    >
                                        <img src={"/icons/followers.svg"} />
                                        <span>Follower</span>
                                    </div>
                                  )}
                                />
                                <Tab
                                   style={{ flexDirection: "column" }}
                                   value={"3"}
                                   component={() => (
                                    <div 
                                       className={`menu_box ${value} `}
                                       onClick={() => setValue("3")}
                                    >
                                        <img src={"/icons/following.svg"} />
                                        <span>Following</span>
                                    </div>
                                   )}
                                />
                            </TabList>
                        </Box>
                    </Stack>
                </TabContext>
            </Stack>
        </Container>
    </div>
  );
}