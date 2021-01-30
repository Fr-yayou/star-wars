import React from "react"
import styleMovie from "../../styles/Movie.module.css"


const Movie = ({movie}) => {
    return(
        <div className={styleMovie.containerMovie}>
            <div className={styleMovie.movieHeader}>
                <div className={styleMovie.containerCenter}>
                    <h1 className={styleMovie.title}>{movie.title}</h1>
                </div>
                <div className={styleMovie.containerCenter}>
                    <p className={styleMovie.desc}>{movie.opening_crawl}</p>
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
                    <p>{movie.director}</p>
                    <p>{movie.producer}</p>
                    <p>{movie.release_date}</p>

                </div>
                </div>
            </div>
        </div>
    )
}

export default Movie