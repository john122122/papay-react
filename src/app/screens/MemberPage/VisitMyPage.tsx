import React, { ChangeEvent, useEffect, useState } from "react";
import { Box, Container, dividerClasses, Stack } from "@mui/material";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Telegram from "@mui/icons-material/Telegram";
import {YouTube} from "@mui/icons-material";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import SettingsIcon from "@mui/icons-material/Settings"
import { MemberPosts } from "./memberPosts";
import { MemberFollowers } from "./memberFollowers";
import { MemberFollowing } from "./memberFollowing";
import { MySettings } from "./mySettings";
// OTHERS
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { TuiEditor } from "../../components/tuiEditor/TuiEditor";
import TViewer from "../../components/tuiEditor/TViewer";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import {createSelector} from "reselect";
import {
    setChosenMember,
    setChosenMemberBoArticles,
    setChosenSingleBoArticle,
} from "./slice";
import {
    retrieveChosenMember,
    retrieveChosenMemberBoArticles,
    retrieveChosenSingleBoArticle,
} from "./selector";
import { Dispatch } from "@reduxjs/toolkit";
import { Member } from "../../../types/user";
import { BoArticle, SearchMemberArticlesObj } from "../../../types/boArticle";
import { sweetErrorHandling, sweetFailureProvider } from "../../../lib/sweetAlert";
import CommunityApiService from "../../apiServices/communityApiService";
import MemberApiService from "../../apiServices/memberApiService";
import { verifiedMemberData } from "../../apiServices/verify";

/** REDUX SLICE */ 
const actionDispatch = (dispatch: Dispatch) => ({
    setChosenMember: (data: Member) =>
        dispatch(setChosenMember(data)),
    setChosenMemberBoArticles: (data: BoArticle[]) =>
        dispatch(setChosenMemberBoArticles(data)),
    setChosenSingleBoArticle: (data: BoArticle) =>
        dispatch(setChosenSingleBoArticle(data)),
});

/** REDUX SELECTOR */
const chosenMemberRetriever = createSelector (
    retrieveChosenMember,
    (chosenMember) =>({
        chosenMember,
    })
);
const chosenMemberBoArticlesRetriever = createSelector (
    retrieveChosenMemberBoArticles,
    (chosenMemberBoArticles) =>({
        chosenMemberBoArticles,
    })
);
const chosenSingleBoArticleRetriever = createSelector (
    retrieveChosenSingleBoArticle,
    (chosenSingleBoArticle) =>({
        chosenSingleBoArticle,
    })
);

export function VisitMyPage(props: any) {
    /** INITIALIZATIONS **/
    const {
        setChosenMember,
        setChosenMemberBoArticles,
        setChosenSingleBoArticle,
    } = actionDispatch(useDispatch());
    const { chosenMember } =
        useSelector(chosenMemberRetriever);
    const { chosenMemberBoArticles } =
        useSelector(chosenMemberBoArticlesRetriever);
    const { chosenSingleBoArticle } =
        useSelector(chosenSingleBoArticleRetriever);
    const [value, setValue] = React.useState("1");
    const [articlesRebuild, setArticlesRebuild] = useState<Date>(new Date());
    const [followRebuild, setFollowRebuild] = useState<boolean>(false);
    const [memberArticleSearchObj, setMemberArticleSearchObj] =
        useState<SearchMemberArticlesObj>({ mb_id: "none", page: 1, limit: 4 });
    
    useEffect(() => {
        if (!verifiedMemberData) {
            sweetFailureProvider("Please login first", true, true);
        }

        const communityService = new CommunityApiService();
        const memberService = new MemberApiService();
        communityService
            .getMemberCommunityArticles(memberArticleSearchObj)
            .then((data) => setChosenMemberBoArticles(data))
            .catch((err) => console.log(err));
        memberService
            .getChosenMember(verifiedMemberData?._id)
            .then((data) => setChosenMember(data))
            .catch((err) => console.log(err));       
    }, [memberArticleSearchObj, articlesRebuild, followRebuild]);
    

  /** HANDLERS **/
    const handleChange = (event: any, newValue: string) => {
        setValue(newValue);
    };
    
    const handlePaginationChange = (event: any, value: number) => {
        memberArticleSearchObj.page = value;       
        setMemberArticleSearchObj({ ...memberArticleSearchObj });      
    };
    
    const renderChosenArticleHandler = async (art_id: string) => {
        try {
            const communityService = new CommunityApiService();
            communityService
                .getChosenArticle(art_id)
                .then((data) => {
                    setChosenSingleBoArticle(data);
                    setValue("5");
                })
                .catch((err) => console.log(err));
        } catch (err: any) {
            console.log(err);
            sweetErrorHandling(err).then();
        }
    };

  return (
    <div className={"my_page"}>
        <Container maxWidth="lg" sx={{ mt: "50px", mb: "50px" }}>
            <Stack className={"my_page_frame"}>
                 <TabContext value={value}>
                    <Stack className={"my_page_left"}>
                        <Box display={"flex"} flexDirection={"column"}>
                            <TabPanel value={"1"}>
                                <Box className={"menu_name"}>Mening Maqolalarim</Box>
                                <Box className={"menu_content"}>
                                      <MemberPosts
                                          chosenMemberBoArticles={chosenMemberBoArticles}
                                          renderChosenArticleHandler={renderChosenArticleHandler}
                                          setArticlesRebuild={setArticlesRebuild}
                                      />
                                    <Stack 
                                        sx={{ my:"40px" }}
                                        direction="row"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Box className={"bottom_box"}>
                                            <Pagination
                                                  count={
                                                      memberArticleSearchObj.page >= 3
                                                          ? memberArticleSearchObj.page + 1
                                                          : 3
                                                  }
                                                page={memberArticleSearchObj.page}
                                                renderItem={(item) => (
                                                    <PaginationItem
                                                        components={{
                                                            previous: ArrowBackIcon,
                                                            next: ArrowForwardIcon,
                                                        }}
                                                        {...item}
                                                        color={"secondary"}
                                                    />
                                                )}
                                                onChange={handlePaginationChange}
                                            />
                                        </Box>
                                    </Stack>
                                </Box>
                            </TabPanel>
                            <TabPanel value={"2"}>
                                <Box className={"menu_name"}>Followers</Box>
                                <Box className={"menu_content"}>
                                      <MemberFollowers
                                          actions_enabled={true}
                                          followRebuild={followRebuild}
                                          setFollowRebuild={setFollowRebuild}
                                          mb_id={verifiedMemberData?._id}
                                      />
                                </Box>
                            </TabPanel>

                            <TabPanel value={"3"}>
                                <Box className={"menu_name"}>Following</Box>
                                <Box className={"menu_content"}>
                                      <MemberFollowing
                                          actions_enabled={true}
                                          followRebuild={followRebuild}
                                          setFollowRebuild={setFollowRebuild}
                                          mb_id={verifiedMemberData?._id}
                                      />
                                </Box>
                            </TabPanel>

                            <TabPanel value={"4"}>
                                <Box className={"menu_name"}>Maqola Yozish</Box>
                                <Box className={"write_content"}>
                                      <TuiEditor
                                          setValue={setValue}
                                          setArticlesRebuild={setArticlesRebuild}
                                      />
                                </Box>
                            </TabPanel>

                            <TabPanel value={"5"}>
                                <Box className={"menu_name"}>Tanlangan Maqola</Box>
                                <Box className={"menu_content"}>
                                      <TViewer chosenSingleBoArticle={chosenSingleBoArticle}/>
                                </Box>
                            </TabPanel>

                            <TabPanel value={"6"}>
                                <Box className={"menu_name"}>Ma'lumotlarni o'zgartirish</Box>
                                <Box className={"menu_content"}>
                                    <MySettings />
                                </Box>
                            </TabPanel>
                        </Box>
                    </Stack>

                    <Stack className={"my_page_right"}>
                        <Box className={"order_info_box"}>
                            <a onClick={() => setValue("6")} className={"settings_btn"}>
                                <SettingsIcon/>
                            </a>
                            <Box 
                               display={"flex"}
                               flexDirection={"column"}
                               alignItems={"center"}
                            >
                                <div className={"order_user_img"}>
                                    <img
                                       src={verifiedMemberData?.mb_image}
                                       className={"order_user_avatar"} 
                                    />
                                    <div className={"user_corner_icon"}>
                                          <img src={
                                              chosenMember?.mb_type === 'RESTAURANT'
                                                  ? "/icons/odamcha.svg"
                                                  : "/community/usman.jpg" // buni ichiga restarant login qilib kirsa shu joyiga restaranlarni iconi chiqadi
                                            }
                                          />
                                    </div>
                                </div>
                                  <span className={"user_name"}>{chosenMember?.mb_nick}</span>
                                  <span className={"user_type"}>{chosenMember?.mb_type}</span>
                            </Box>
                            <Box className={"social_wrap"} sx={{mt: "20px"}}>
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
                                  <p className={"follows"}>Followers: {chosenMember?.mb_subscriber_cnt}</p>
                                  <p className={"follows"}>Followings: {chosenMember?.mb_follow_cnt}</p>
                            </Box>
                              <p className={"user_desc"}>{
                                  chosenMember?.mb_description ??
                                  "qushimcha malumot kiritilmagan"
                                  }
                              </p>
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
                              {/*@ts-ignore*/}
                              <TabList
                                  orientation="vertical"
                                  variant="scrollable"
                                  value={value}
                                  onChange={handleChange}
                                  aria-label="Vertical tabs example"
                                  sx={{ borderRight: 1, borderColor: 'divider' }}                                
                            >
                                <Tab 
                                   style={{ flexDirection: "column" }}
                                   value={"1"}
                                   component={() => (
                                    <div
                                      className={`menu_box`}
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
                                       className={`menu_box`}
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
                                       className={`menu_box`}
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
  )
}