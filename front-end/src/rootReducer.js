//Combien all the reducer//
import { combineReducers } from "redux"


//Import reducer //
import message from "./reducer"


const rootReducer = combineReducers({
    message
})

export default rootReducer