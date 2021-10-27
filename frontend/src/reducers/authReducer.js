import * as actions from "../actions/index";

const initialState = {
  loading: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.REGISTER_REQUEST:
    case actions.LOGIN_REQUEST:
    case actions.LOAD_USER_REQUEST:
    case actions.IS_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        user: null,
        isAuthenticated: false,
        message: "",
        isUserLogin: false,
      };

    case actions.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: false,
        message: "",
        isUserLogin: false,
      };

    case actions.IS_LOGIN_SUCCESS:
      return {
        ...state,
        isUserLogin: true,
        message: "",
      };

    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true,
        message: "",
        isUserLogin: true,
      };

    case actions.LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true,
        isUserLogin: action.isAuthenticated,
      };

    case actions.IS_LOGIN_FAIL:
      return {
        ...state,
        message: action.message,
        isUserLogin: false,
      };

    case actions.REGISTER_FAIL:
    case actions.LOGIN_FAIL:
    case actions.LOAD_USER_FAIL:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: false,
        message: action.message,
      };
    case actions.CLEAR_USER:
      return {
        ...state,
        loading: false,
        user: null,
        isAuthenticated: false,
        message: "",
        isUserLogin: false,
      };
    default:
      return state;
  }
};

export default authReducer;
