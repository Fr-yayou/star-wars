import React from "react"
import styleCard from "../styles/Card.module.css"
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
                        <h1 className={styleCard.cartTitle}>Movies</h1>
                        <img className={styleCard.imageCard} src={film} alt="film"/>
                    </div>
        }else if(data.next.includes("people")){
            return <div>
                        <h1 className={styleCard.cartTitle}>People</h1>
                        <img className={styleCard.imageCard} src={people} alt="film"/>
                    </div>
        }else if(data.next.includes("species")){
            return <div>
                        <h1 className={styleCard.cartTitle}>Species</h1>
                        <img className={styleCard.imageCard} src={species} alt="film"/>
                    </div>
        }else if(data.next.includes("vehicles")){
            return <div>
                        <h1 className={styleCard.cartTitle}>Vehicles</h1>
                        <img className={styleCard.imageCard} src={vehicles} alt="film"/>
                    </div>
        }else if(data.next.includes("starships")){
            return <div>
                        <h1 className={styleCard.cartTitle}>Starships</h1>
                        <img className={styleCard.imageCard} src={starships} alt="film"/>
                    </div>

        }else if(data.next.includes("planets")){
            return  <div>
                        <h1 className={styleCard.cartTitle}>Planets</h1>
                        <img className={styleCard.imageCard} src={planet} alt="film"/>
                    </div>
        }
    }

    return(
        <div className={styleCard.containerCard}>
            <Link to={`/${data.results}`}>{getTitle()}</Link>
        </div>
    )
}

export default Card