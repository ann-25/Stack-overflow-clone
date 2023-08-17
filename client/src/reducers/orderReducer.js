const orderReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "ORDER":
      localStorage.setItem("NEW_ORDER", JSON.stringify({ ...action?.data }));
      return { ...state, data: action?.data };

    default:
      return state;
  }
};

export default orderReducer;
