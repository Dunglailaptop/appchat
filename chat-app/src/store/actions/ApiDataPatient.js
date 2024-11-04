import actionTypes from "./actionTypes";
import * as api from "../../Apis";

export const getdata = (record_values,keysreachs) => async (dispatch) => {
  try {
    const response = await api.getdata(record_values,keysreachs);
   
    if (response?.data.success == true) {
      dispatch({
        type: actionTypes.GET_PATIENT,
        Patientdata: response.data.data.datares,
        dataCount: response.data.data.countdata
      });
    } else {
      dispatch({
        type: actionTypes.GET_PATIENT,
        Patientdata: null,
        dataCount: null
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PATIENT,
      Patientdata: null,
      dataCount: null
    });
  }
};
