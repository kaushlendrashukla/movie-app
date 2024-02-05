import React, { useEffect, useState } from 'react'
import instance from '../axios'
import requests from '../requests'
import "./Banner.css"

function Banner() {
    const [movie, setMovies] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(requests.fetchActionMovies)

            setMovies(
                request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
            )

        }
        fetchData()
    }, [])
    console.log(movie)

    return (
        <header className='banner_container'
            style={{
                backgroundSize: "cover",
              
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
            }}
        >
            <div className='banner'>
                <h1 className='banner_title'>
                    {movie?.title || movie?.name || movie?.oiginal_name}
                </h1>
                <div className='banner__buttons'>
                    <button className='banner__button' >Play</button>
                    <button className='banner__button' >MyList</button>
                </div>
                <h2 className='banner_description' >
                    {movie?.overview}
                </h2>
            </div>
        </header>
    )
}

export default Banner