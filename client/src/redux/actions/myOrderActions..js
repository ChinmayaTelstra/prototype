import { message } from "antd";
import axios from "axios";

export const getMyOrders = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.get("/api/orders/getmyorders");
    dispatch({ type: "GET_MY_ORDERS", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const submitOrder = (values) => async (dispatch) => {
  values.postedBy = JSON.parse(localStorage.getItem("user"))._id;

  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.post("/api/orders/submitorder", values);

    dispatch({ type: "LOADING", payload: false });
    message.success("Order Submitted Successfully");

    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const editOrder = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.post("/api/orders/editorder", values);

    dispatch({ type: "LOADING", payload: false });
    message.success("Order Updated Successfully");

    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};


export const saveOrder = (order) => async (dispatch) => {


  const user = JSON.parse(localStorage.getItem("user"))

  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.post("/api/orders/saveorder", {order , user});

    dispatch({ type: "LOADING", payload: false });
    message.success("Order saved Successfully");

    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};



export const searchOrders = (searchKey) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.get("/api/orders/getallorders");

    const orders = response.data

    const filteredOrders = orders.filter(order=>order.projectno.toLowerCase().includes(searchKey.toLowerCase()))

    dispatch({ type: "GET_ALL_ORDERS", payload: filteredOrders });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};


export const sortOrders = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.get("/api/orders/getallorders");

    const orders = response.data

    var filteredOrders = orders

    if(values.sitecode !== undefined) {

      filteredOrders = orders.filter(order=>order.sitecode <= values.sitecode)

    }
    if(values.siteid !== undefined){
      filteredOrders = orders.filter(order=>order.createdDate >= values.createDate)
    }

    dispatch({ type: "GET_ALL_ORDERS", payload: filteredOrders });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};



