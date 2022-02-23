import { combineReducers } from "redux";
import { getUserReducers } from "./users.reducer";
import { math } from "./math.reducer";

const rootReducer = combineReducers({ getUserReducers, math });

export default rootReducer;
