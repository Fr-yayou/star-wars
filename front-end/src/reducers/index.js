//Combien all the reducer//
import { combineReducers } from "redux"


//Import reducer //
import swapi from "./swapiReducer"


const rootReducer = combineReducers({
    swapi
})
 
export default rootReducer