import {combineReducers} from "redux";
import {reducer as fromReducer} from "redux-form";
import quotesReducer from "./quotes_reducer"
import userReducer from "./user_reducer"

const rootReducer = combineReducers({
    form: fromReducer,
    quotes: quotesReducer,
    uaer: userReducer
});

export default rootReducer;