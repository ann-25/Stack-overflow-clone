const subscribedReducer = (state = { data: "0" }, action) => {
  switch (action.type) {
    case "SUBSCRIBED_STATE":
      localStorage.setItem(
        "Subcribed",
        JSON.stringify({ ...action?.stateVar })
      );
      return { ...state, data: action?.stateVar };
    default:
      return state;
  }
};

export default subscribedReducer;
