import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};
if (localStorage.getItem('cartItems')) {
    initialState.cart = { items: JSON.parse(localStorage.getItem('cartItems')) }
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
export default createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(thunk)));