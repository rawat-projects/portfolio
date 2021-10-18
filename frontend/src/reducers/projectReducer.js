import * as actions from "../actions/index";
const initialState = {
  loading: false,
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_PROJECT_REQUEST:
    case actions.GET_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actions.ADD_PROJECT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        message: action.message,
      };

    case actions.ADD_PROJECT_FAIL:
      return {
        ...state,
        message: action.message,
      };

    default:
      return state;
  }
};

export default projectReducer;
