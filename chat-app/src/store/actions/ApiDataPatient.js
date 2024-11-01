import actionTypes from "./actionTypes";
import * as api from "../../Apis";

export const getdata = () => async (dispatch) => {
  try {
    const response = await api.getdata();
   
    if (response?.data.success == true) {
      dispatch({
        type: actionTypes.GET_PATIENT,
        Patientdata: response.data.data
      });
    } else {
      dispatch({
        type: actionTypes.GET_PATIENT,
        Patientdata: null
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PATIENT,
      Patientdata: null
    });
  }
};
