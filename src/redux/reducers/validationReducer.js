import {
  GLOBAL_ERROR,
  NAME_ERROR,
  EMAIL_ERROR,
  GLOBAL_ERROR_ON,
  GLOBAL_ERROR_OFF,
  NAME_ERROR_ON,
  NAME_ERROR_OFF,
  EMAIL_ERROR_ON,
  EMAIL_ERROR_OFF,
  SERVER_ERROR,
  SERVER_ERROR_ON,
  SERVER_ERROR_OFF,
} from "../types";

const initState = {
  globalError: "",
  globalStatus: false,
  nameError: "",
  nameErrorStatus: false,
  emailError: "",
  emailErrorStatus: false,
};

export const validationReducer = (state = initState, action) => {
  switch (action.type) {
    case GLOBAL_ERROR:
      return { ...state, globalError: action.payload };
    case GLOBAL_ERROR_ON:
      return { ...state, globalStatus: true };
    case GLOBAL_ERROR_OFF:
      return { ...state, globalStatus: false };
    case NAME_ERROR:
      return { ...state, nameError: action.payload };
    case NAME_ERROR_ON:
      return { ...state, nameErrorStatus: true };
    case NAME_ERROR_OFF:
      return { ...state, nameErrorStatus: false };
    case EMAIL_ERROR:
      return { ...state, emailError: action.payload };
    case EMAIL_ERROR_ON:
      return { ...state, emailErrorStatus: true };
    case EMAIL_ERROR_OFF:
      return { ...state, emailErrorStatus: false };
    case SERVER_ERROR:
      return { ...state, globalError: action.payload };
    case SERVER_ERROR_ON:
      return { ...state, globalStatus: true };
    case SERVER_ERROR_OFF:
      return { ...state, globalStatus: false };
    default:
      return state;
  }
};
