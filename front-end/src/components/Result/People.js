import React from "react"
import stylePeople from "../../styles/People.module.css"


const People = ({people}) => {
    return (
        <div className={stylePeople.containerPeople}>
            <h1 className={stylePeople.title}>{people.name}</h1>
            <div className={stylePeople.container}>
                <div className={stylePeople.containerProperty}>
                    <p>Height:</p>
                    <p>Mass:</p>
                    <p>Hair Color:</p>
                    <p>Skin Color:</p>
                    <p>Eye Color:</p>
                    <p>Birth Year:</p>
                    <p>Gender:</p>
                </div>
                <div className={stylePeople.containerDetail}>
                    <p>{people.height}</p>
                    <p>{people.mass}</p>
                    <p>{people.hair_color}</p>
                    <p>{people.skin_color}</p>
                    <p>{people.eye_color}</p>
                    <p>{people.birth_year}</p>
                    <p>{people.gender}</p>
                </div>
            </div>
        </div>
    )
}

export default People