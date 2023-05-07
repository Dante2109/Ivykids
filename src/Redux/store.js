import { legacy_createStore,applyMiddleware,combineReducers,compose } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";
const rootReducer=combineReducers({
    reducer:reducer
})

const composer=window.__REDUX_DEVTOOLS_EXTENSIONS__ || compose;
export const store=legacy_createStore(rootReducer,composer(applyMiddleware(thunk)))