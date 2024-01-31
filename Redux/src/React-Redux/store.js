import { legacy_createStore,combineReducers } from "redux";
import { reducer as CountReducer } from "./Counter/reducer";
import {reducer as TodoReducer} from './Todos/reducer'

const rootReducer = combineReducers ({CountReducer, TodoReducer});

const store = legacy_createStore(rootReducer)

export {store}