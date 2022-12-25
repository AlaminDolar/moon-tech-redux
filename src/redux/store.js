import { createStore } from "redux";
import prodcutReducer from "./reducers/productReducer";
import { composeWithDevTools } from '@redux-devtools/extension';


const store = createStore(prodcutReducer,composeWithDevTools())

export default store;