import React from "react";
import { useEffect, useState } from 'react'
import '../styles/ShowMovies.css'
import image from '../../assets/imagem.jpg'
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import api from "../../services/api";



function ShowMovies() {

    const [movies, setMovies] = useState([])

    const navigate = useNavigate();

    

    useEffect(() => {
        getMovies()
    }, [])

    async function getMovies() {

        const token = localStorage.getItem('token')

        try {

            const response = await api.get(`${process.env.REACT_APP_BACKEND_URL}/movies`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response)

            const data = response.data

            setMovies(data)

        } catch (error) {
            console.log(error)
        }
    }

    async function deleteMovies(id) {
        const token = localStorage.getItem('token')

        try {

            await api.delete(`${process.env.REACT_APP_BACKEND_URL}/movies/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

        } catch (error) {
            console.log(error)
        }

        await getMovies()
    }

    

    function goToCreateMovies() {
        navigate('/createMovies')
    }

    return (
        <div className="show-movies-container"> 
            <p className="link-to-create-movies" onClick={goToCreateMovies}>Home</p>
            {movies.map((movie) =>
               <div className="show-card-movies" >

                   
                   <Link className="link-movies" to={`/movies/${movie._id}`} state={{id: movie._id}}>
                    <img className="img-show-movies" src={movie.url}></img>
                    <p className="name-movie">{movie.name}</p>
                   </Link>      
                    <button className="button-show-movies" onClick={() => deleteMovies(movie._id)}>Deletar</button>
                 
               </div>
            )}

        </div>
    )
}

export default ShowMovies