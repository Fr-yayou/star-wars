import {TOGGLE_MESSAGE} from "../actions/actions"
import { GET_SWAPI } from "../actions/actions"

const initalState = {
    messageVisibility: false,
    swapi:[]

};

const toggleReducer = (state = initalState, action) => {
    const { type,data} = action
    switch(type) {
        case TOGGLE_MESSAGE:
            return {
                ...state,
                messageVisibility:!state.messageVisibility
            }

        case GET_SWAPI:
            return{
                ...state,
                swapi:data
            }

        default:
            return state
            
    }
}

export default toggleReducer