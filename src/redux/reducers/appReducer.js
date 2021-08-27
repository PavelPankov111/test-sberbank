import { SEND_REQUEST, SET_RESPONSE } from "../types";

const initState = {
  request: true,
  response: false,
};

export const appReducer = (state = initState, action) => {
  switch (action.type) {
    case SEND_REQUEST:
      return { ...state, request: false };
    case SET_RESPONSE:
      return { ...state, response: true };
    default:
      return state;
  }
};
