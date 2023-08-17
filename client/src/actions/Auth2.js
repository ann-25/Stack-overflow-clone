import * as api from "../api";
import { otpStore } from "./otpStore";
export const sendotp = (authData, navigate) => async (dispatch) => {
  try {
    console.log(authData);
    const { data } = await api.sendOTP(authData);
    const newOtp = data.result.otp;
    dispatch(otpStore(newOtp));
    alert("Check Your Mail For OTP Verfication Code");
  } catch (error) {
    console.log(error.response.data);
  }
};
