import React from "react"
import stylePlanet from "../../styles/Planet.module.css"

const Planet = ({planet}) => {
    return (
        <div>
            <div className={stylePlanet.containerPlanet}>
                <h1 className={stylePlanet.title}>{planet.name}</h1>
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
                    <p>{planet.climate}</p>
                    <p>{planet.diameter}</p>
                    <p>{planet.gravity}</p>
                    <p>{planet.orbital_period}</p>
                    <p>{planet.population}</p>
                    <p>{planet.rotation_period}</p>
                    <p>{planet.surface_water}</p>
                    <p>{planet.terrain}</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Planet