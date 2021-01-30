import React from "react"
import stylePeople from "../../styles/People.module.css"


const People = (props) => {
    if(props.location){
        let dataString = JSON.parse(props.location.query.data)
        return (
            <div className={stylePeople.containerPeople}>
            <h1 className={stylePeople.title}>{dataString.name}</h1>
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
                    <p>{dataString.height}</p>
                    <p>{dataString.mass}</p>
                    <p>{dataString.hair_color}</p>
                    <p>{dataString.skin_color}</p>
                    <p>{dataString.eye_color}</p>
                    <p>{dataString.birth_year}</p>
                    <p>{dataString.gender}</p>
                </div>
            </div>
        </div>
        )
    }else{
        return (
            <div className={stylePeople.containerPeople}>
            <h1 className={stylePeople.title}>{props.people.name}</h1>
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
                    <p>{props.people.height}</p>
                    <p>{props.people.mass}</p>
                    <p>{props.people.hair_color}</p>
                    <p>{props.people.skin_color}</p>
                    <p>{props.people.eye_color}</p>
                    <p>{props.people.birth_year}</p>
                    <p>{props.people.gender}</p>
                </div>
            </div>
        </div>
        )
    }

}

export default People