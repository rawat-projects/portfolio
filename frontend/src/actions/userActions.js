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

// load user

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: actions.LOAD_USER_REQUEST,
    });

    const { data } = await axios.get("/islogin");

    dispatch({
      type: actions.LOAD_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: actions.LOAD_USER_FAIL,
      message: error.response.data.errMessage,
    });
  }
};

export const getUser = (history) => async (dispatch) => {
  try {
    dispatch({
      type: actions.USER_REQUEST,
    });

    const data = await axios.get("/about", {
      withCredentials: true,
    });

    if (data && data.data && !data.data.authenticated) {
      throw new Error(data.data.message);
    }

    dispatch({
      type: actions.USER_SUCCESS,
      payload: data.data.message,
    });
  } catch (err) {
    console.log("err", err);
    dispatch({
      type: actions.USER_FAIL,
      payload: {
        message: err,
        isAuthenticated: false,
      },
    });
  }
};

export const updateUserData = (data) => async (dispatch) => {
  try {
    dispatch({
      type: actions.UPDATE_USER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const data = await axios.put("/admin/about", data, config);
    console.log("resultdata", data);

    dispatch({
      type: actions.UPDATE_USER_SUCCESS,
      // payload: data.message,
    });
  } catch (err) {
    dispatch({
      type: actions.UPDATE_USER_FAIL,
      object: data,
      // payload: err.response.data.message,
    });
  }
};

export const clearUser = () => (dispatch) => {
  dispatch({
    type: actions.CLEAR_USER,
  });
};
