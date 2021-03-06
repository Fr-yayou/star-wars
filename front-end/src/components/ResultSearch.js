import React from "react"
import People from "../components/Result/People"
import Planet from "../components/Result/Planet"
import Movie from "../components/Result/Movie";
import Species from "../components/Result/Species"
import Vehicles from "../components/Result/Vehicles";
import Starship from "../components/Result/Starship"


const ResultSearch = ({data}) => {
   const checkType = () =>{
       if( data[0].url.includes("people")){
           return <People people={data[0]}/>
       }else if(data[0].url.includes("planet")){
           return <Planet planet={data[0]}/>
       }else if(data[0].url.includes("film")){
           return <Movie movie={data[0]}/>
       }else if (data[0].url.includes("species")){
           return <Species species={data[0]}/>
       }else if (data[0].url.includes("vehicles")){
           return <Vehicles vehicle={data[0]}/>
       }else if (data[0].url.includes("starships")){
           return <Starship starship={data[0]}/>
       }
   }

    return(
        <div>
            {checkType()}
        </div>
    )
}

export default ResultSearch
