import * as api from "../api";

export const subscribeAction =
  (subscribeData, navigate) => async (dispatch) => {
    try {
      await api.subscriptionApi(subscribeData);
      const stateVar = await api.subscriptionCheck(subscribeData);

      if (stateVar) {
        await dispatch({ type: "SUBSCRIBED_STATE", stateVar });
        navigate("/");
      }
    } catch (err) {
      console.log("not Subscribed");
    }
  };
