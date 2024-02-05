import React, { useState, useEffect } from 'react'
import axios from '../axios';
import instance from '../axios';
import "./Row.css";

function Row({ title, fetchUrl,isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const baseUrl = "https://image.tmdb.org/t/p/original"

    useEffect(() => {
        async function fetchData() {
            // const request = await axios.get(fetchUrl)
            const request = await instance.get(fetchUrl)
            
            setMovies(request.data.results)
            return request
        }
        fetchData();
    }, [fetchUrl])

    return (
        <div className='row' >
            <h2>{title}  </h2>
            <div className= {`row_posters`}  >
                {movies.map((movie) => (
                    <img key={movie.id} className={`row_poster ${isLargeRow && "row_isLarge"}` } src={`${baseUrl}${ isLargeRow ? movie.poster_path :movie.backdrop_path} `} alt={movie.name} />
                ))}
            </div>

        </div>
    )
}

export default Row