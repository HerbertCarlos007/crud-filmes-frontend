
import React, { useEffect, useState } from "react";
import { useLocation, useParams} from 'react-router'
import '../styles/ShowEachMovie.css'


function ShowEachMovie() {
    
    useEffect(() => {
        showMovie()
    }, [])
    
    const { id } = useLocation().state

    const [name, setName] = useState('')
    const [synopsis, setSynopsis] = useState('')
    const [duration, setDuration] = useState('')
    const [url, setUrl] = useState('')
    const [genre, setGenre] = useState('')
    

    async function showMovie() {

        try {

            const response = await fetch(`http://localhost:5000/movies/${id}`)

           const data = await response.json()
            setName(data.name)
            setSynopsis(data.synopsis)
            setGenre(data.genre)
            setUrl(data.url)
            setDuration(data.duration)
          
        } catch (error) {
            
        }
    }


    return(
        <div className="movies">

           <div className="movie-information">
                <h1 className="title">{name}</h1>
                <p className="synopsis"><b>{synopsis}</b></p>
                <p className="genre">Genero: {genre}</p>
                <p className="duration">Duração: {duration}</p>
                
           </div>

           
           <div className="image-container">
                <img src={url} className='image-movie'/>
           </div>

        </div>
    )
}

export default ShowEachMovie
