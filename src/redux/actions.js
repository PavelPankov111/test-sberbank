import { apiRequest } from "../utlis/Api";
import {
  SET_RESPONSE,
  SEND_REQUEST,
  SERVER_ERROR,
  GLOBAL_ERROR,
  NAME_ERROR,
  EMAIL_ERROR,
  GLOBAL_ERROR_ON,
  GLOBAL_ERROR_OFF,
  NAME_ERROR_ON,
  NAME_ERROR_OFF,
  EMAIL_ERROR_ON,
  EMAIL_ERROR_OFF,
  SERVER_ERROR_OFF,
  SERVER_ERROR_ON,
} from "./types";

export function globalErrorOn() {
  return {
    type: GLOBAL_ERROR_ON,
  };
}

export function globalErrorOff() {
  return {
    type: GLOBAL_ERROR_OFF,
  };
}

export function nameErrorOn() {
  return {
    type: NAME_ERROR_ON,
  };
}

export function nameErrorOff() {
  return {
    type: NAME_ERROR_OFF,
  };
}

export function emailErrorOn() {
  return {
    type: EMAIL_ERROR_ON,
  };
}

export function emailErrorOff() {
  return {
    type: EMAIL_ERROR_OFF,
  };
}

export function globalError(message) {
  return {
    type: GLOBAL_ERROR,
    payload: message,
  };
}

export function nameError(message) {
  return {
    type: NAME_ERROR,
    payload: message,
  };
}

export function emailError(message) {
  return {
    type: EMAIL_ERROR,
    payload: message,
  };
}

export function setResponse() {
  return {
    type: SET_RESPONSE,
  };
}

export function serverError(payload) {
  return {
    type: SERVER_ERROR,
    payload,
  };
}

export function sendRequest(data) {
  return async (dispatch) => {
    window.console.log(data);

    dispatch({ type: SEND_REQUEST });

    try {
      const api = await apiRequest(
        "http://jsonplaceholder.typicode.com/posts?_limit=5",
        {
          "Content-Type": "application/json",
        }
      );

      const response = await api.json();

      if (response.length) {
        dispatch(setResponse());
      } else {
        dispatch(serverError("server error"));
        dispatch({ type: SERVER_ERROR_ON });
        setTimeout(() => {
          dispatch({ type: SERVER_ERROR_OFF });
        }, 1500);
      }
    } catch (e) {
      dispatch(serverError(e));
    }
  };
}
