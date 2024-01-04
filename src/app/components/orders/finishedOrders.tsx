import React from "react";
import { Box, Stack } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
// REDUX
import { useSelector } from "react-redux";
import {createSelector} from "reselect";
import {
  retrieveFinishedOrders,
} from "../../screens/OrdersPage/selector";
import { Order } from "../../../types/order";
import { Product } from "../../../types/product";
import { serverApi } from "../../../lib/config";

/** REDUX SELECTOR */
const finishedOrdersRetriever = createSelector (
  retrieveFinishedOrders,
  (finishedOrders) =>({
    finishedOrders,
  })
);

export default function FinishedOrders(props: any) {
  /** INITIALIZATIONS */
  const { finishedOrders } = useSelector(finishedOrdersRetriever);
  return (
    <TabPanel value={"3"}>
      <Stack>
        {finishedOrders?.map((order: Order) => {
          return (
            <Box className={"order_main_box"}>
              <Box className={"order_box_scroll"}>
                {order.order_items.map((item) => {
                  const product: Product = order.product_data.filter(
                    (ele) => ele._id === item.product_id
                  )[0];
                  const image_path = `${serverApi}/${product?.product_images[0]}`;
                  return (
                    <Box className={"ordersName_price"}>
                      <img src={image_path} className={"orderDishImg"} />
                      <span className={"titleDish"}>
                        {product?.product_name}
                      </span>
                      <Box className={"priceBox"}>
                        <span>${item.item_price}</span>
                        <img
                          style={{ margin: "0 10px" }}
                          src={"/icons/close.svg"}
                        />
                        <span>{item.item_quantity}</span>
                        <img
                          style={{ margin: "0 10px" }}
                          src={"/icons/pause.svg"}
                        />
                        <span style={{ marginLeft: "15px" }}>
                        ${item.item_price * item.item_quantity}
                        </span>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total_price_box finished"}>
              <Box className={"boxTotal"}>
                  <span>
                    Maxsulot narxi
                  </span>
                  <span>
                    ${order.order_total_amount - order.order_delivery_cost}
                  </span>
                  <img
                    style={{ marginLeft: "20px" }} src={"/icons/plus.svg"}
                  />                             
                  <span>
                    Yetkazish xizmati
                  </span>
                  <span>
                    ${order.order_delivery_cost}
                  </span>
                  <img
                    src={"/icons/pause.svg"} style={{ marginLeft: "20px" }}
                  />
                  <span>
                    Jami narx
                  </span>
                  <span>
                    ${order.order_total_amount}
                  </span>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}