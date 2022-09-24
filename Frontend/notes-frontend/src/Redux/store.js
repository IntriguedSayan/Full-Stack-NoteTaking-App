import {applyMiddleware, legacy_createStore} from "redux"
import { reducer as authReducer } from "./AuthReducer/reducer"
import thunk from "redux-thunk"

const store=legacy_createStore(authReducer,applyMiddleware(thunk))

export {store}
