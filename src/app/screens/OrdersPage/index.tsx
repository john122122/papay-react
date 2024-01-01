import React, { useEffect, useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import "../../../css/order.css";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "../../components/orders/pausedOrders";
import ProcessOrders from "../../components/orders/processOrders";
import FinishedOrders from "../../components/orders/finishedOrders";
import { Order } from "../../../types/order";
// REDUX
import { useDispatch } from "react-redux"
import { Dispatch } from "@reduxjs/toolkit";
import {
  retrieveChosenRestaurant,
  retrieveRandomRestaurants,
  retrieveTargetProducts,
} from "../../screens/RestaurantPage/selector";
import {
  setPausedOrders,
  setProcessOrders,
  setFinishedOrders
} from "../../screens/OrdersPage/slice";
import OrderApiService from "../../apiServices/orderApiService";


/** REDUX SLICE */ 
const actionDispatch = (dispatch: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
  setProcessOrders: (data: Order[]) => dispatch(setProcessOrders(data)),
  setFinishedOrders: (data: Order[]) => dispatch(setFinishedOrders(data)),
});

export function OrdersPage(props: any) {
  /** INITIALIZATIONS **/
  const [value, setValue] = useState("1");
  const { setPausedOrders, setProcessOrders, setFinishedOrders } =
    actionDispatch(useDispatch());
  
  useEffect(() => {
    const orderService = new OrderApiService();
    orderService
      .getMyOrders("paused")
      .then((data) => setPausedOrders(data))
      .catch((err) => console.log(err));
    orderService
      .getMyOrders("process")
      .then((data) => setProcessOrders(data))
      .catch((err) => console.log(err));
    orderService
      .getMyOrders("finished")
      .then((data) => setFinishedOrders(data))
      .catch((err) => console.log(err));
  }, [props.orderRebuild]);
  

  /** HANDLERS **/
  const handleChange = (event: any, newValue: string) => {
    console.log("newValue", newValue);
    setValue(newValue);
  };

  return (
    <div className="order_page">
      <Container
        maxWidth="lg"
        style={{ display: "flex", flexDirection: "row" }}
        sx={{ mt: "50px", mb: "50px" }}
      >
        {/* 1/2 Stack: ORDER LEFT */}
        <Stack className={"order_left"}>
          <TabContext value={value}>
            <Box className={"order_nav_frame"}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  // value={value}
                  aria-label="basic tabs example"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Tab label="Buyurtmalarim" value={"1"} />
                  <Tab label="Jarayon" value={"2"} />
                  <Tab label="Yakunlangan" value={"3"} />
                </TabList>
              </Box>
            </Box>
            <Stack className={"order_main_content"}>
              <PausedOrders setOrderRebuild={props.setOrderRebuild}/>
              <ProcessOrders setOrderRebuild={props.setOrderRebuild}/>
              <FinishedOrders setOrderRebuild={props.setOrderRebuild}/>
            </Stack>
          </TabContext>
        </Stack>

        {/* 2/2 Stack: ORDER RIGHT */}
        <Stack className={"order_right"}>
          <Box className={"order_info_box"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <div className={"order_user_img"}>
                <img src={"/icons/odamcha.svg"} />
              </div>
              <span className={"order_user_name"}>
                {props.verifiedMemberData?.mb_nick}
              </span>
              <span className={"order_user_prof"}>
              {props.verifiedMemberData?.mb_type ?? "User"}
              </span>
            </Box>
            <Box className={"line"}></Box>
            <Box
              style={{ border: "1px solid #A1A1A1" }}
              width={"100%"}
              height={"2px"}
              sx={{ mt: "40px", mb: "8px" }}
            ></Box>
            <Box className={"order_user_address"}>
              <div style={{ display: "flex" }}>
                <LocationOnIcon />
              </div>
              <div>Yunusabad 1-4, Tashkent</div>
            </Box>
          </Box>
          <Box className={"payment_box"}>
            <form className={"payment_form"}>
              <input type="text" placeholder="1111 2222 3333 4444" />
              <Box className={"form_divider"}>
                <input type="text" placeholder="01/36" />
                <input type="text" placeholder="CVV: 474" />
              </Box>
              <input type="text" placeholder="Usman" />
            </form>
            <Box className={"card_types"}>
              <img className={"card"} src="/others/western_union.svg" />
              <img className={"card"} src="/others/master_card.svg" />
              <img className={"card"} src="/others/paypal.svg" />
              <img className={"card"} src="/others/visa.svg" />
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}




