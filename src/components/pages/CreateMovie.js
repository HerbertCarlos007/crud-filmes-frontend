import React, { useState } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import '../styles/CreateMovie.css'
import ShowMovies from "./ShowMovies";
import image from '../../assets/imagem.jpg'



function CreateMovie() {

    const [name, setName] = useState('')
    const [synopsi, setSynopsi] = useState('')
    const [duration, setDuration] = useState('')
    const [url, setUrl] = useState('')
    const [genre, setGenre] = useState('')
    const [releaseYear, setReleaseYear] = useState('')

    function handleChangeName(e) {

        const textName = e.target.value
        setName(textName)
        
        
    }

    function handleChangeSynopsi(e) {

        const textSynopsi = e.target.value
        setSynopsi(textSynopsi)
        
    }

    function handleChangeDuration(e) {

        const textDuration = e.target.value
        setDuration(textDuration)
        
    }

    function handleChangeUrl(e) {

        const textUrl = e.target.value
        setUrl(textUrl)
        
    }

    function handleChangeGenre(e) {

        const optionGenre = e.target.value
        setGenre(optionGenre)
        
    }

    function handleChangeReleaseYear(e) {
        
        const optionReleaseYear = e.target.value
        setReleaseYear(optionReleaseYear)
        console.log(optionReleaseYear)
    }

    async function createMovie(e){
        e.preventDefault()

        try {

            const data = {
                name,
                genre,
                synopsis: synopsi,
                duration,
                url
            }

            await fetch(`${process.env.REACT_APP_BACKEND_URL}movies`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data),
            })
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container">
            
            <div className="card">

                <form>
                    <fieldset>
                        <legend><b>Formulário de Filmes</b></legend>

                        <div className="inputs">
                            <input placeholder="Nome" onChange={handleChangeName} value={name}/>
                            <input placeholder="Sinopse" onChange={handleChangeSynopsi} />
                            <input placeholder="Duração" onChange={handleChangeDuration} />
                            <input placeholder="URL" onChange={handleChangeUrl} />
                            
                            <select name="Genero" onChange={handleChangeGenre}>
                                <option>Ação</option>
                                <option>Comédia</option>
                                <option>Terror</option>
                            </select>
                            <button onClick={createMovie}>Adicionar filme</button>
                        </div>
                    </fieldset>
                </form>

            </div>

        </div>
    )
}

export default CreateMovie