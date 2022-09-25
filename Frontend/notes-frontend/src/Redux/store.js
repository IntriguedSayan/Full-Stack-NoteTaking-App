import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import { reducer as authReducer } from "./AuthReducer/reducer"
import { reducer as appReducer } from "./AppReducer/reducer"
import thunk from "redux-thunk"

const rootReducer=combineReducers({appReducer,authReducer})

const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

export {store}
