import React from "react"
import styleSpecies from "../../styles/Species.module.css"

const Species = (props) => {
    if(props.location){
        let dataString = JSON.parse(props.location.query.data)

        return(
            <div className={styleSpecies.extraContainer}>
            <div className={styleSpecies.containerPeople}>
                <h1 className={styleSpecies.title}>{dataString.name}</h1>
                <div className={styleSpecies.container}>
                    <div className={styleSpecies.containerProperty}>
                        <p>Average height:</p>
                        <p>Average life span:</p>
                        <p>Classification:</p>
                        <p>Designation:</p>
                        <p>Eye Color:</p>
                        <p>Hair color:</p>
                        <p>Language:</p>
                        <p>Skin color:</p>
                    </div>
                    <div className={styleSpecies.containerDetail}>
                        <p>{dataString.average_height}</p>
                        <p>{dataString.average_lifespan}</p>
                        <p>{dataString.classification}</p>
                        <p>{dataString.designation}</p>
                        <p>{dataString.eye_colors}</p>
                        <p>{dataString.hair_colors}</p>
                        <p>{dataString.language}</p>
                        <p>{dataString.skin_colors}</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }else{
        return (
            <div className={styleSpecies.containerPeople}>
            <h1 className={styleSpecies.title}>{props.species.name}</h1>
            <div className={styleSpecies.container}>
                <div className={styleSpecies.containerProperty}>
                    <p>Average height:</p>
                    <p>Average life span:</p>
                    <p>Classification:</p>
                    <p>Designation:</p>
                    <p>Eye Color:</p>
                    <p>Hair color:</p>
                    <p>Language:</p>
                    <p>Skin color:</p>
                </div>
                <div className={styleSpecies.containerDetail}>
                    <p>{props.species.average_height}</p>
                    <p>{props.species.average_lifespan}</p>
                    <p>{props.species.classification}</p>
                    <p>{props.species.designation}</p>
                    <p>{props.species.eye_colors}</p>
                    <p>{props.species.hair_colors}</p>
                    <p>{props.species.language}</p>
                    <p>{props.species.skin_colors}</p>
                </div>
            </div>
        </div>
        )
    }
}


export default Species