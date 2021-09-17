import { Redirect } from "react-router-dom";
import * as actions from "./index.js";
import axios from "axios";

export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: actions.REGISTER_REQUEST });

    const data = await axios.post("/admin/signup", userData);

    dispatch({
      type: actions.REGISTER_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actions.REGISTER_FAIL,
      payload: {
        message: err.message,
        isAuthenticated: false,
      },
    });
  }
};

export const login = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: actions.LOGIN_REQUEST,
    });

    const data = await axios.post("/admin/login", userData);

    dispatch({
      type: actions.LOGIN_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actions.LOGIN_FAIL,
      payload: {
        message: err.message,
        isAuthenticated: false,
      },
    });
  }
};

export const clearUser = (dispatch) => {
  dispatch({
    type: actions.CLEAR_USER,
  });
};
