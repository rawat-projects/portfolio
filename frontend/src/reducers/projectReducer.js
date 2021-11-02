import * as actions from "../actions/index";
const initialState = {
  loading: false,
  message: "",
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_PROJECT_REQUEST:
    case actions.GET_PROJECT_REQUEST:
    case actions.EDIT_PROJECT_REQUEST:
    case actions.GET_SINGLE_PROJECT_REQUEST:
    case actions.EDIT_PROJECT_REQUEST:
    case actions.DELETE_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
        message: "",
      };

    case actions.ADD_PROJECT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        message: action.message,
      };

    case actions.EDIT_PROJECT_SUCCESS:
    case actions.DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        message: action.message,
        loading: false,
      };

    case actions.GET_PROJECT_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        singleData: null,
        message: "",
        loading: false,
      };

    case actions.GET_SINGLE_PROJECT_SUCCESS:
      return {
        ...state,
        data: null,
        singleData: action.payload.data,
        message: "",
        loading: false,
      };

    case actions.ADD_PROJECT_FAIL:
    case actions.GET_PROJECT_FAIL:
    case actions.GET_SINGLE_PROJECT_FAIL:
    case actions.EDIT_PROJECT_FAIL:
    case actions.DELETE_PROJECT_FAIL:
      return {
        ...state,
        message: action.message,
        loading: false,
      };

    default:
      return state;
  }
};

export default projectReducer;
