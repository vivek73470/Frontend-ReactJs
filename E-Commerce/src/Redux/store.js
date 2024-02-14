
import { legacy_createStore, applyMiddleware,combineReducers } from "redux";
import {thunk} from "redux-thunk";
import { reducer as ProductReducer } from './products/reducer';

const rootReducer = combineReducers({ProductReducer})

// Use createStore with applyMiddleware
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
