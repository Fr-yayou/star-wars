import React from "react"
import stylePlanet from "../../styles/Planet.module.css"

const Planet = ({planet}) => {
    return (
        <div>
            <div className={stylePlanet.containerPlanet}>
                <h1 className={stylePlanet.title}>{planet.name}</h1>
            <div className={stylePlanet.container}>
                <div className={stylePlanet.containerProperty}>
                    <p className={stylePlanet.property}>Climat:</p>
                    <p className={stylePlanet.property}>Diameter:</p>
                    <p className={stylePlanet.property}>Gravity:</p>
                    <p className={stylePlanet.property}>Orbital period:</p>
                    <p className={stylePlanet.property}>population:</p>
                    <p className={stylePlanet.property}>Rotation period:</p>
                    <p className={stylePlanet.property}>Surface_water:</p>
                    <p className={stylePlanet.property}>Terrain:</p>
                </div>
                <div className={stylePlanet.containerDetail}>
                    <p className={stylePlanet.detail}>{planet.climate}</p>
                    <p className={stylePlanet.detail}>{planet.diameter}</p>
                    <p className={stylePlanet.detail}>{planet.gravity}</p>
                    <p className={stylePlanet.detail}>{planet.orbital_period}</p>
                    <p className={stylePlanet.detail}>{planet.population}</p>
                    <p className={stylePlanet.detail}>{planet.rotation_period}</p>
                    <p className={stylePlanet.detail}>{planet.surface_water}</p>
                    <p className={stylePlanet.detail}>{planet.terrain}</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Planet