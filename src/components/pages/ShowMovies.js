import React from "react";
import { useEffect, useState } from 'react'
import '../styles/ShowMovies.css'
import image from '../../assets/imagem.jpg'
import { Link, useParams } from "react-router-dom";



function ShowMovies() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies()
    }, [])

    async function getMovies() {

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/movies`, { method: 'GET' })

            const data = await response.json()

            setMovies(data)

        } catch (error) {
            console.log(error)
        }
    }

    async function deleteMovies(id) {

        try {

            await fetch(`${process.env.REACT_APP_BACKEND_URL}/movies/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            })

        } catch (error) {
            console.log(error)
        }

        await getMovies()
    }

    return (
        <div className="movies-container">

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