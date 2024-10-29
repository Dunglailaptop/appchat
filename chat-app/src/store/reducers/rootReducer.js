import appReducer from "./appReducer";
import { applyMiddleware,combineReducers } from "redux";

const rootReducer = combineReducers ({
  app: appReducer
})

export default rootReducer