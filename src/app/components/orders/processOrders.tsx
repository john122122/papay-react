import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import moment from "moment";
// REDUX
import { useSelector } from "react-redux";
import {createSelector} from "reselect";
import {
  retrieveProcessOrders,
} from "../../screens/OrdersPage/selector";

/** REDUX SELECTOR */
const processOrdersRetriever = createSelector (
  retrieveProcessOrders,
  (processOrders) =>({
    processOrders,
  })
);

const processOrders = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

export default function ProcessOrders(props: any) {
  /** INITIALIZATIONS */
  // const { processOrders } = useSelector(processOrdersRetriever);
  return (
    <TabPanel value={"2"}>
      <Stack>
        {processOrders?.map((order) => {
          return (
            <Box className={"order_main_box"}>
              <Box className={"order_box_scroll"}>
                {order.map((item) => {
                  const image_path = `/others/ovqat.png`;
                  return (
                    <Box className={"ordersName_price"}>
                      <img src={image_path} className={"orderDishImg"} />
                      <p className={"titleDish"}>Salad</p>
                      <Box className={"priceBox"}>
                        <p>$7</p>
                        <img
                          style={{ margin: "0 10px" }}
                          src={"/icons/close.svg"}
                        />
                        <p>3</p>
                        <img
                          style={{ margin: "0 10px" }}
                          src={"/icons/pause.svg"}
                        />
                        <p style={{ marginLeft: "15px" }}>$21</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total_price_box process"}>
                <div>
                  <span>Maxsulot narxi </span>
                  <span>$21</span>
                  <img
                    style={{ marginLeft: "5px" }}
                    src={"/icons/plus.svg"}
                />
                </div>
                <div>
                  <span>Yetkazish xizmati  </span>
                  <span>$2</span>
                  <img
                      style={{ margin: "5px" }}
                      src={"/icons/pause.svg"}
                    />
                </div>
               
                <div>
                  <span>Jami narx </span>
                  <span>$23</span>
                </div>
                <div>
                  <span>{moment().format("YY-DD-MM HH:MM")}</span>
                  <Button className="order_complete">Yakunlash</Button>
                </div>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}
