import { apiLogin } from "../../services/Auth";


export const login = (payload) => async (dispatch) => {
  const respone = await apiLogin(payload);
  console.log("🚀 ~ login ~ respone:", respone)
  console.log("=======", respone);
  // console.log("=======", respone?.status);

};
export const setUploadSettings = (isUploaded, uploadDeadline) => ({
  type: "SET_UPLOAD_SETTINGS",
  payload: { isUploaded, uploadDeadline },
});
