import * as actions from "../actions/index";

const initialState = {
  loading: false,
  user: null,
  message: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actions.UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        // message: action.payload,
      };

    case actions.UPDATE_USER_FAIL:
      return {
        ...state,
        loading: false,
        message: "update user failed",
        // message: action.payload,
        // data: action.object,
      };

    default:
      return state;
  }
};

export default userReducer;
