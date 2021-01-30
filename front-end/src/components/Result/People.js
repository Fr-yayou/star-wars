import React from "react"
import stylePeople from "../../styles/People.module.css"


const People = ({people}) => {
    return (
        <div className={stylePeople.containerPeople}>
            <h1 className={stylePeople.title}>{people.name}</h1>
            <div className={stylePeople.container}>
                <div className={stylePeople.containerProperty}>
                    <p className={stylePeople.property}>Height:</p>
                    <p className={stylePeople.property}>Mass:</p>
                    <p className={stylePeople.property}>Hair Color:</p>
                    <p className={stylePeople.property}>Skin Color:</p>
                    <p className={stylePeople.property}>Eye Color:</p>
                    <p className={stylePeople.property}>Birth Year:</p>
                    <p className={stylePeople.property}>Gender:</p>
                </div>
                <div className={stylePeople.containerDetail}>
                    <p className={stylePeople.detail}>{people.height}</p>
                    <p className={stylePeople.detail}>{people.mass}</p>
                    <p className={stylePeople.detail}>{people.hair_color}</p>
                    <p className={stylePeople.detail}>{people.skin_color}</p>
                    <p className={stylePeople.detail}>{people.eye_color}</p>
                    <p className={stylePeople.detail}>{people.birth_year}</p>
                    <p className={stylePeople.detail}>{people.gender}</p>
                </div>
            </div>
        </div>
    )
}

export default People