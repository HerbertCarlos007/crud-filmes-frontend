import React from "react";
import { useEffect, useState } from 'react'
import '../styles/ShowMovies.css'
import image from '../../assets/imagem.jpg'
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import api from "../../services/api";



function ShowMovies() {

    const [movies, setMovies] = useState([])

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

    return (
        <div className="movies-container">
            <Link   className=' list2' to='/createMovies'>Home</Link>
            {movies.map((movie) =>

                <Link to={`/movies/${movie._id}`} state={{ id: movie._id }}>
                    <div className="card-movies" >

                        <div className="info">
                            <p>{movie.name}</p>
                        </div>

                        <img src={movie.url}></img>


                    </div>
                    <div>
                        <button className="button" onClick={() => deleteMovies(movie._id)}>Deletar Filme</button>
                    </div>
                </Link>
            )}

        </div>
    )
}

export default ShowMovies