import { PrescriptionDetail } from "../../containers/private";
import DataPatient from "../../containers/private/DataPatient";
import actionTypes from "../actions/actionTypes";

const initState = {
  banner: [],
  countdata: 0,
  PatientDetail: {},
  PrescriptionDetail: []
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_PATIENT:
      return {
        ...state,
        banner: action.Patientdata,
        countdata: action.dataCount,
      };
    case actionTypes.GET_PRESCRIPTION:
      return {
        ...state,
        banner: action.Patientdata,
        countdata: action.dataCount,
      };
    case actionTypes.GET_PRESCRIPTION_DETAIL:
      return {
        ...state,
        banner: action.Patientdata,
        countdata: action.dataCount,
      };
    case actionTypes.GET_INVOICEINPATIENT:
      return {
        ...state,
        banner: action.Patientdata,
        countdata: action.dataCount,
      };
    case actionTypes.GET_PATIENT_DETAIL:
     
        return {
          ...state,
          PatientDetail: action.Patientdata
        };
    case actionTypes.GET_LIST_PRESCRIPTION:

        return {
          ...state,
          PrescriptionDetail: action.PatientDetail
        }
    default:
      return state;
  }
};

export default appReducer;
