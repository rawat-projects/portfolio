import * as actions from "../actions/index";

const initialState = {
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.REGISTER_REQUEST:
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        user: null,
      };

    case actions.REGISTER_SUCCESS:
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    case actions.REGISTER_FAIL:
    case actions.LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case actions.CLEAR_USER:
      return {
        ...state,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
