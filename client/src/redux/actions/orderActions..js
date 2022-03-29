import { message } from "antd";
import axios from "axios";

export const getAllOrders = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.get("/api/orders/getallorders");
    dispatch({ type: "GET_ALL_ORDERS", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};


