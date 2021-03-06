// action type constant variable to avoid typo mistake /
export const GET_SWAPI = "GET_SWAPI"
export const GET_SEARCH = "GET_SEARCH"
export const RESET_SEARCH = "RESET_SEARCH"



export const getSwapi = () => {
    return async function (dispatch) {
        //Fetch back end//
        const res = await fetch("http://localhost:5000/swapi")
        const swapi = await res.json()
        // Dispatch action//
        return dispatch ({
            type:"GET_SWAPI",
            data:swapi.data
        })
    }
}

export const getSearch = (search) => {
    return async function (dispatch) {
        const res = await fetch("http://localhost:5000/swapi/post",{
            method:"POST",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(search)
        })
        const resultSearch = await res.json()
        console.log(resultSearch)
        if(resultSearch.message !== "success"){
            return dispatch({
                type:"GET_SEARCH",
                payload:resultSearch
            })
        }
        return dispatch({
                type:"GET_SEARCH",
                payload:resultSearch.data[0]
            })
    }
}

export const resetSearch = () => {
    return async function (dispatch){
        return dispatch({
            type:"RESET_SEARCH",
            reset:[]
        })
    }
}


