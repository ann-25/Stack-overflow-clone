const otpreducer = (state = null, action) => {
  switch (action.type) {
    case "OTP":
      return action.payload;
    default:
      return state;
  }
};
export default otpreducer;
