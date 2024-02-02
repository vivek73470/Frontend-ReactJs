import { legacy_createStore,combineReducers } from "redux";
import { reducer as CountReducer } from "./Counter/reducer";
import {reducer as TodoReducer} from './Todos/reducer'
import {reducer as AuthReducer} from './AuthReducer/reducer'

const rootReducer = combineReducers ({CountReducer, TodoReducer,AuthReducer});

const store = legacy_createStore(rootReducer)

export {store}