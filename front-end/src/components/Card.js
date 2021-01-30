import React from "react"
import styleCard from "../styles/Card.module.css"
import {Link} from "react-router-dom"


const Card = ({data}) => {
   const getTitle = () => {
        if(data.next === null){
            return <div>
                    <h1 className={styleCard.cartTitle}>Movies</h1>
                    <div className={styleCard.cardBody}>
                        {data.results.map((result,index) =>(
                        <h4 key={index}>{result.title}</h4>
                        ))}  
                    </div>
                    </div>
        }else if(data.next.includes("people")){
            return <div>
                        <h1 className={styleCard.cartTitle}>People</h1>
                        <div className={styleCard.cardBody}>
                        {data.results.map((result,index) =>(
                            <Link key={index} to={{
                                pathname:"/people",
                                query:{data:JSON.stringify(result)}
                            }}>
                                <h4>{result.name}</h4>
                            </Link>
                        ))}  
                        </div>
                    </div>
        }else if(data.next.includes("species")){
            return <div>
                        <h1 className={styleCard.cartTitle}>Species</h1>
                        <div className={styleCard.cardBody}>
                        {data.results.map((result,index) =>(
                        <h4 key={index}>{result.name}</h4>
                        ))}  
                        </div>
                    </div>
        }else if(data.next.includes("vehicles")){
            return  <div>
                        <h1 className={styleCard.cartTitle}>Vehicles</h1>
                        <div className={styleCard.cardBody}>
                        {data.results.map((result,index) =>(
                        <h4 key={index}>{result.name}</h4>
                        ))}  
                        </div>
                    </div>
        }else if(data.next.includes("starships")){
            return  <div>
                        <h1 className={styleCard.cartTitle}>Starships</h1>
                        <div className={styleCard.cardBody}>
                        {data.results.map((result,index) =>(
                        <h4 key={index}>{result.name}</h4>
                        ))}  
                        </div>
                    </div>
        }else if(data.next.includes("planets")){
            return<div>
                        <h1 className={styleCard.cartTitle}>Planets</h1>
                        <div className={styleCard.cardBody}>
                        {data.results.map((result,index) =>(
                        <h4 key={index}>{result.name}</h4>
                        ))}  
                        </div>
                    </div>
        }
    }

    return(
        <div className={styleCard.containerCard}>{getTitle()}</div>
    )
}

export default Card