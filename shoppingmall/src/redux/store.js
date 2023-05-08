import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ProductReducer from "./reducers/productReducer";

let store = createStore(ProductReducer, applyMiddleware(thunk));

export default store;
