import actionTypes from "../actions/actionTypes";

const initState = {
  banner: [],
  countdata: 0,
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_PATIENT:
     
      return {
        ...state,
        banner: action.Patientdata,
        countdata: action.dataCount
      };
    case actionTypes.GET_PRESCRIPTION:
      
      return {
        ...state,
        banner: action.Patientdata,
        countdata: action.dataCount
      };
    case actionTypes.GET_PRESCRIPTION_DETAIL:
      return {
        ...state,
        banner: action.Patientdata,
        countdata: action.dataCount
      };
    default:
      return state;
  }
};

export default appReducer;
