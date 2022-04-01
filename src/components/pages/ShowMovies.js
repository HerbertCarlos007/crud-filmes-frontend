import React from "react";
import { useEffect, useState } from 'react'
import '../styles/ShowMovies.css'
import image from '../../assets/imagem.jpg'

function ShowMovies() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies()
    }, [])

    async function getMovies() {

        try {
            const response = await fetch('http://localhost:5000/movies', { method: 'GET' })

            const data = await response.json()

            setMovies(data)

        } catch (error) {
            console.log(error)
        }
    }

    async function deleteMovies(id) {

        try {

            await fetch(`http://localhost:5000/movies/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            })

        } catch (error) {
            console.log(error)
        }

        await getMovies()
    }


    return (
        <div className="container">


            {movies.map((movie) =>
                <div className="card-movies">

                    <div className="info">
                        <p>{movie.name}</p>

                    </div>

                    <div>
                       
                    </div>
                    <img src={movie.url}></img>

                        <button className="button" onClick={() => deleteMovies(movie._id)}>Deletar Filme</button>
                    
                </div>
            )}

        </div>
    )
}

export default ShowMovies