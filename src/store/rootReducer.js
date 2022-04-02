import {combineReducers} from "redux";

import { ShopReducer } from "./shopReducer/reducer";
import CartReducer from "./cartReducer/reducer";


const rootReducer = combineReducers({
   
shop:ShopReducer,
cart:CartReducer,
});

export default rootReducer;