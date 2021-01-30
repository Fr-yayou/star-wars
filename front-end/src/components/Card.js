import React from "react"
import styleCard from "../styles/Card.module.css"
import { Link } from "react-router-dom"


const Card = ({data}) => {

   const getTitle = () => {
        if(data.next === null){
            return <h1 className={styleCard.cartTitle}>Movies</h1>
        }else if(data.next.includes("people")){
            return <h1 className={styleCard.cartTitle}>People</h1>
        }else if(data.next.includes("species")){
            return <h1 className={styleCard.cartTitle}>Species</h1>
        }else if(data.next.includes("vehicles")){
            return <h1 className={styleCard.cartTitle}>Vehicles</h1>
        }else if(data.next.includes("starships")){
            return <h1 className={styleCard.cartTitle}>Starships</h1>
        }else if(data.next.includes("planets")){
            return <h1 className={styleCard.cartTitle}>Planets</h1>
        }
    }

    return(
        <div className={styleCard.containerCard}>
            <Link className={styleCard.routerLink} to={`/${data.results}`}>{getTitle()}</Link>
        </div>
    )
}

export default Card