import * as actions from "../actions/index";

const initialState = {
  loading: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.REGISTER_REQUEST:
    case actions.LOGIN_REQUEST:
    case actions.LOAD_USER_REQUEST:
      return {
        ...state,
        loading: true,
        user: null,
        isAuthenticated: false,
      };

    case actions.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: false,
      };

    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true,
      };

    case actions.LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true,
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
      };
    default:
      return state;
  }
};

export default authReducer;
