import React from "react"
import styleStarship from "../../styles/Starship.module.css"



const Starship = (props) =>{

    if(props.location){
        let dataString = JSON.parse(props.location.query.data)

        return(
            <div className={styleStarship.extraContainer}>
                {console.log(dataString)}
            <div className={styleStarship.containerPeople}>
                <h1 className={styleStarship.title}>{dataString.name}</h1>
                <div className={styleStarship.container}>
                    <div className={styleStarship.containerProperty}>
                        <p>MGLT:</p>
                        <p>Cargo capacity:</p>
                        <p>consumables:</p>
                        <p>Cost:</p>
                        <p>Crew:</p>
                        <p>Hyperdriver rating</p>
                        <p>Length:</p>
                        <p>Manufacturer:</p>
                        <p>Max atmosphering speed:</p>
                        <p>Model:</p>
                        <p>Passengers:</p>
                        <p>Starship class:</p>
                    </div>
                    <div className={styleStarship.containerDetail}>
                        <p>{dataString.MGLT}</p>
                        <p>{dataString.cargo_capacity}</p>
                        <p>{dataString.consumables}</p>
                        <p>{dataString.cost_in_credits}</p>
                        <p>{dataString.crew}</p>
                        <p>{dataString.hyperdrive_rating}</p>
                        <p>{dataString.length}</p>
                        <p>{dataString.manufacturer}</p>
                        <p>{dataString.max_atmosphering_speed}</p>
                        <p>{dataString.model}</p>
                        <p>{dataString.passengers}</p>
                        <p>{dataString.starship_class}</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }else{
        return(
        <div className={styleStarship.extraContainer}>
            <div className={styleStarship.containerPeople}>
                <h1 className={styleStarship.title}>{props.starship.name}</h1>
                <div className={styleStarship.container}>
                    <div className={styleStarship.containerProperty}>
                        <p>MGLT:</p>
                        <p>Cargo capacity:</p>
                        <p>consumables:</p>
                        <p>Cost:</p>
                        <p>Crew:</p>
                        <p>Hyperdriver rating</p>
                        <p>Length:</p>
                        <p>Manufacturer:</p>
                        <p>Max atmosphering speed:</p>
                        <p>Model:</p>
                        <p>Passengers:</p>
                        <p>Starship class:</p>
                    </div>
                <div className={styleStarship.containerDetail}>
                    <p>{props.starship.MGLT}</p>
                    <p>{props.starship.cargo_capacity}</p>
                    <p>{props.starship.consumables}</p>
                    <p>{props.starship.cost_in_credits}</p>
                    <p>{props.starship.crew}</p>
                    <p>{props.starship.hyperdrive_rating}</p>
                    <p>{props.starship.length}</p>
                    <p>{props.starship.manufacturer}</p>
                    <p>{props.starship.max_atmosphering_speed}</p>
                    <p>{props.starship.model}</p>
                    <p>{props.starship.passengers}</p>
                    <p>{props.starship.starship_class}</p>
                </div>
            </div>
        </div>
    </div>
        )
    }
}

export default Starship