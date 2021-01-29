// action type constant variable to avoid typo mistake /
export const TOGGLE_MESSAGE = "TOGGLE_MESSAGE"
export const GET_SWAPI = "GET_SWAPI"

export const toogleMessage = () => {
    return{
        type:'TOGGLE_MESSAGE',
    }  
}

export const getSwapi = () => {
    return async function (dispatch) {
        //Fetch back end//
        const res = await fetch("http://localhost:5000/swapi")
        const swapi = await res.json()
        console.log(swapi.data)
        // Dispatch action//
        return dispatch ({
            type:"GET_SWAPI",
            data:swapi.data
        })
    }
}


