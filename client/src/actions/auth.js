import * as api from "../api";
import { setCurrentUser } from "./currentUser";

export const signUp = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUP(authData);
    const stateVar = await api.subscriptionCheck(authData);

    dispatch({ type: "AUTH", data });
    dispatch({ type: "SUBSCRIBED_STATE", stateVar });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const logIn = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIN(authData);
    const newData = await api.subscriptionCheck(authData);
    const stateVar = newData;
    dispatch({ type: "AUTH", data });
    dispatch({ type: "SUBSCRIBED_STATE", stateVar });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    navigate("/");
  } catch (error) {
    console.log("try again");
  }
};
