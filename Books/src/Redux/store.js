import { legacy_createStore, applyMiddleware,combineReducers } from "redux";
import {reducer  as appreducer} from "./Appdata/reducer";
import {reducer as authreducer} from "./Authdata/reducer"
import thunk from "redux-thunk"
const rootreducer=combineReducers({authreducer,appreducer})
// const customMiddleware = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     return action(store.dispatch);
//   }
//   return next(action);
// };
export const store = legacy_createStore(
  rootreducer,(applyMiddleware(thunk))
);

