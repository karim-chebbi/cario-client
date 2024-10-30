import { combineReducers } from "redux";
import CarReducer from "./CarReducer";
import AuthReducer from "./AuthReducers";



const rootReducer = combineReducers({CarReducer, AuthReducer})

export default rootReducer