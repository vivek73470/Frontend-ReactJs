import { legacy_createStore,combineReducers,applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import productReducer from './products/reducer'


const rootReducer = combineReducers({ecommerceData: productReducer})

export const store = legacy_createStore(
    rootReducer,
    applyMiddleware(thunk));