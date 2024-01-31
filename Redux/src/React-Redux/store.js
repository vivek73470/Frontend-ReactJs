import { legacy_createStore } from "redux";
import { reducer } from "../React-Redux/reducer";

const store = legacy_createStore(reducer)

export {store}