import React from "react"
import People from "../components/Result/People"
import Planet from "../components/Result/Planet"


const ResultSearch = ({data}) => {
   const checkType = () =>{
       if( data[0].url.includes("people")){
           return <People people={data[0]}/>
       }else if(data[0].url.includes("planet")){
           return <Planet planet={data[0]}/>
       }
   }

    return(
        <div>
            {checkType()}
        </div>
    )
}

export default ResultSearch
