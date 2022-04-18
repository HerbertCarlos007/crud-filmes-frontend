
import React, { useEffect, useState } from "react";
import { useLocation, useParams} from 'react-router'
import api from "../../services/api";
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

        const token = localStorage.getItem('token')

        try {

            const response = await api.get(`${process.env.REACT_APP_BACKEND_URL}/movies/${id}`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

           const data = response.data

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

