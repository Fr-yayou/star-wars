import React from "react"
import stylePlanet from "../../styles/Planet.module.css"

const Planet = (props) => {

    if(props.location){
        let dataString = JSON.parse(props.location.query.data)

        return(
            <div className={stylePlanet.extraContainer}>
            <div className={stylePlanet.containerPlanet}>
                <h1 className={stylePlanet.title}>{dataString.name}</h1>
            <div className={stylePlanet.container}>
                <div className={stylePlanet.containerProperty}>
                    <p>Climat:</p>
                    <p>Diameter:</p>
                    <p>Gravity:</p>
                    <p>Orbital period:</p>
                    <p>population:</p>
                    <p>Rotation period:</p>
                    <p>Surface_water:</p>
                    <p>Terrain:</p>
                </div>
                <div className={stylePlanet.containerDetail}>
                    <p>{dataString.climate}</p>
                    <p>{dataString.diameter}</p>
                    <p>{dataString.gravity}</p>
                    <p>{dataString.orbital_period}</p>
                    <p>{dataString.population}</p>
                    <p>{dataString.rotation_period}</p>
                    <p>{dataString.surface_water}</p>
                    <p>{dataString.terrain}</p>
                </div>
            </div>
        </div>
        </div>
        )
    }else{
        return (
            <div>
            <div className={stylePlanet.containerPlanet}>
                <h1 className={stylePlanet.title}>{props.planet.name}</h1>
            <div className={stylePlanet.container}>
                <div className={stylePlanet.containerProperty}>
                    <p>Climat:</p>
                    <p>Diameter:</p>
                    <p>Gravity:</p>
                    <p>Orbital period:</p>
                    <p>population:</p>
                    <p>Rotation period:</p>
                    <p>Surface_water:</p>
                    <p>Terrain:</p>
                </div>
                <div className={stylePlanet.containerDetail}>
                    <p>{props.planet.climate}</p>
                    <p>{props.planet.diameter}</p>
                    <p>{props.planet.gravity}</p>
                    <p>{props.planet.orbital_period}</p>
                    <p>{props.planet.population}</p>
                    <p>{props.planet.rotation_period}</p>
                    <p>{props.planet.surface_water}</p>
                    <p>{props.planet.terrain}</p>
                </div>
            </div>
        </div>
        </div>
        )
    }
}

export default Planet