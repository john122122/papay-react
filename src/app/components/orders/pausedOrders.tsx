import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
// REDUX
import { useSelector } from "react-redux";
import {createSelector} from "reselect";
import {
  retrievePausedOrders,
} from "../../screens/OrdersPage/selector";
import { Order } from "../../../types/order";
import { Product } from "../../../types/product";
import { serverApi } from "../../../lib/config";
import { sweetErrorHandling, sweetFailureProvider } from "../../../lib/sweetAlert";
import OrderApiService from "../../apiServices/orderApiService";
import { verifiedMemberData } from "../../apiServices/verify";

/** REDUX SELECTOR */
const pausedOrdersRetriever = createSelector (
  retrievePausedOrders,
  (pausedOrders) =>({
    pausedOrders,
  })
);

export default function PausedOrders(props: any) {
  /** INITIALIZATIONS */
  const { pausedOrders } = useSelector(pausedOrdersRetriever);

  /** HANDLERS */
  const deleteOrderHandler = async (event: any) => {
    try {
      const order_id = event.target.value;
      const data = { order_id: order_id, order_status: "DELETED" };

      if (!verifiedMemberData) {
        sweetFailureProvider("Please login first", true);
      }

      let confirmation = window.confirm("Buyurtmani bekor qilishni hohlaysizmi?");
      if (confirmation) {
        const orderService = new OrderApiService();
        await orderService.updateOderStatus(data);
        props.setOrderRebuild(new Date());
      }

    } catch (err) {
      console.log("deleteOrderHandler, ERROR:", err);
      sweetErrorHandling(err).then();
    }
  };

  const processOrderHandler = async (event: any) => {
    try {
      const order_id = event.target.value;
      const data = { order_id: order_id, order_status: "PROCESS" };

      if (!verifiedMemberData) {
        sweetFailureProvider("Please login first", true);
      }

      let confirmation = window.confirm(
        "Buyurtmangizni Tolashni tasdiqlaysizmi?"
      );
      if (confirmation) {
        const orderService = new OrderApiService();
        await orderService.updateOderStatus(data);
        props.setOrderRebuild(new Date());
      }

    } catch (err) {
      console.log("processOrderHandler, ERROR:", err);
      sweetErrorHandling(err).then();
    }
  };


  return ( 
    <TabPanel value={"1"}>
      <Stack>
        {pausedOrders?.map((order: Order) => {
          return (
            <Box className={"order_main_box"}>
              <Box className={"order_box_scroll"}>
                {order.order_items.map((item) => {
                  const product: Product = order.product_data.filter(
                    (ele) => ele._id === item.product_id
                  )[0];
                  const image_path = `${serverApi}/${product?.product_images[0]}`
                  return (
                    <Box className={"ordersName_price"}>
                      <img src={image_path} className={"orderDishImg"} />
                      <span className={"titleDish"}>
                        {product?.product_name}
                      </span>
                      <Box className={"priceBox"}>
                        <span>${item.item_price}</span>
                        <img
                          style={{ margin: "10px" }}
                          src={"/icons/close.svg"}
                        />
                        <span>{item.item_quantity}</span>
                        <img
                          style={{ margin: "10px" }}
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

              <Box className={"total_price_box pause_price"}>
                <Box className={"boxTotal"}>
                  <span>
                    Maxsulot narxi
                  </span>
                  <span>
                    ${order.order_total_amount - order.order_delivery_cost}
                  </span>
                  <img style={{ marginLeft: "20px" }} src={"/icons/plus.svg"}/>                             
                  <span>
                    Yetkazish xizmati
                  </span>
                  <span>
                    ${order.order_delivery_cost}
                  </span>
                  <img src={"/icons/pause.svg"} style={{ marginLeft: "20px" }} />
                  <span>
                    Jami narx
                  </span>
                  <span>
                    ${order.order_total_amount}
                  </span>
                </Box>
                <Button
                  value={order._id}
                  onClick={deleteOrderHandler}
                  className="order_cancel">
                  Bekor qilish
                </Button>
                <Button
                  value={order._id}
                  onClick={processOrderHandler}
                  className="order_pay">
                  To'lash
                </Button>                
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}