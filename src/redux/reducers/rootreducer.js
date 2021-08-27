import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { validationReducer } from "./validationReducer";

export const rootReducer = combineReducers({
  app: appReducer,
  validation: validationReducer,
});
