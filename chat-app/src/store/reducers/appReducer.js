import actionTypes from "../actions/actionTypes";

const initState = {
  banner: [],
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_PATIENT:
     
      return {
        ...state,
        banner: action.Patientdata,
      };
    default:
      return state;
  }
};

export default appReducer;
