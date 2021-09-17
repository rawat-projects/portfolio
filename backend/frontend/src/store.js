import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import userReducer from "./reducers/userReducer";
import authReducer from "./reducers/authReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
