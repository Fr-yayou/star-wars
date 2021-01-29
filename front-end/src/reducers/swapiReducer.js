import { GET_SWAPI,GET_SEARCH,RESET_SEARCH } from "../actions/actions"

const initalState = {
    swapi:[],
    search:[]

};

const toggleReducer = (state = initalState, action) => {
    const { type,data,payload} = action
    switch(type) {

        case GET_SWAPI:
            return{
                ...state,
                swapi:data
            }
        case GET_SEARCH:
            return{
                ...state,
                search:payload
            }
        
        case RESET_SEARCH:
            return{
                ...state,
                search:initalState.search
            }

        default:
            return state
            
    }
}

export default toggleReducer