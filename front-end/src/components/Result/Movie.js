import React from "react"
import styleMovie from "../../styles/Movie.module.css"


const Movie = (props) => {

    if(props.location){
        let dataString = JSON.parse(props.location.query.data)

        return(
            <div className={styleMovie.extraContainer}>
                <div className={styleMovie.containerMovie}>
                    <div className={styleMovie.movieHeader}>
                <div className={styleMovie.containerCenter}>
                    <h1 className={styleMovie.title}>{dataString.title}</h1>
                </div>
                <div className={styleMovie.containerCenter}>
                    <p className={styleMovie.desc}>{dataString.opening_crawl}</p>
                </div>
            </div>
            <div className={styleMovie.movieBody}>
                <div className={styleMovie.titleInfo}>
                    <h1>Infos</h1>
                </div>
                <div className={styleMovie.sideByside}>
                <div className={styleMovie.containerProperty}>
                    <p>Director:</p>
                    <p>Producer:</p>
                    <p>Release date:</p>
                </div>
                <div className={styleMovie.containerDetail}>
                    <p>{dataString.director}</p>
                    <p>{dataString.producer}</p>
                    <p>{dataString.release_date}</p>

                </div>
                </div>
            </div>
        </div>
            </div>

        )
    }else{
        return(
            <div className={styleMovie.containerMovie}>
                <div className={styleMovie.movieHeader}>
                    <div className={styleMovie.containerCenter}>
                        <h1 className={styleMovie.title}>{props.movie.title}</h1>
                    </div>
                    <div className={styleMovie.containerCenter}>
                        <p className={styleMovie.desc}>{props.movie.opening_crawl}</p>
                    </div>
                </div>
                <div className={styleMovie.movieBody}>
                    <div className={styleMovie.titleInfo}>
                        <h1>Infos</h1>
                    </div>
                    <div className={styleMovie.sideByside}>
                    <div className={styleMovie.containerProperty}>
                        <p>Director:</p>
                        <p>Producer:</p>
                        <p>Release date:</p>
                    </div>
                    <div className={styleMovie.containerDetail}>
                        <p>{props.movie.director}</p>
                        <p>{props.movie.producer}</p>
                        <p>{props.movie.release_date}</p>
    
                    </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Movie