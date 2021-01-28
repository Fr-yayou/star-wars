import React from "react"
import "../styles/Card.css"
import film from "../assets/film.jpg"
import people from "../assets/people.jpeg"
import vehicles from "../assets/vehicles.jpg"
import planet from "../assets/planets.jpg"
import species from "../assets/species.jpeg"
import starships from "../assets/starships.jpg"
import { Link } from "react-router-dom"


const Card = ({data}) => {

   const getTitle = () => {
        if(data.next === null){
            return <div>
                        <h1 className="cartTitle" style={{color:"white"}}>Movies</h1>
                        <img className="imageCard" src={film} alt="film"/>
                    </div>
        }else if(data.next.includes("people")){
            return <div>
                        <h1 className="cartTitle" style={{color:"white"}}>People</h1>
                        <img className="imageCard" src={people} alt="film"/>
                    </div>
        }else if(data.next.includes("species")){
            return <div>
                        <h1 className="cartTitle" style={{color:"white"}}>Species</h1>
                        <img className="imageCard" src={species} alt="film"/>
                    </div>
        }else if(data.next.includes("vehicles")){
            return <div>
                        <h1 className="cartTitle" style={{color:"white"}}>Vehicles</h1>
                        <img className="imageCard" src={vehicles} alt="film"/>
                    </div>
        }else if(data.next.includes("starships")){
            return <div>
                        <h1 className="cartTitle" style={{color:"white"}}>Starships</h1>
                        <img className="imageCard" src={starships} alt="film"/>
                    </div>

        }else if(data.next.includes("planets")){
            return  <div>
                        <h1 className="cartTitle" style={{color:"white"}}>Planets</h1>
                        <img className="imageCard" src={planet} alt="film"/>
                    </div>
        }
    }

    return(
        <div className="container-card">
            <Link to={`/${data.results}`}>{getTitle()}</Link>
        </div>
    )
}

export default Card