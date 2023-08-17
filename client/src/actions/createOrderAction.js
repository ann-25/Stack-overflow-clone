import * as api from "../api";
import { setCurrentUser } from "./currentUser";

export const createOrderAction = (orderData) => async (dispatch) => {
  try {
    const { data } = await api.createOrderApi(orderData);
    dispatch({ type: "ORDER", data: data });
  } catch (error) {
    console.log(error + "Error at order action");
  }
};
