import React, { useState } from "react";
import '../styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import api from "../../services/api";

 
function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleClickLogin = async () => {
      const response = await api.post('/users/login', { email, password })
      if(response.status === 200) {
        localStorage.setItem('token', response.data.token)
        navigate('/createMovies')
      }
       
    }

    return(
        <div className="container-login">
            <div className="login-form-group">
                <form className="login-form">
                    <input className="input-login" onChange={(e) => setEmail(e.target.value)} value={email} type='text' placeholder='Login'/>
                    <input className="input-login" onChange={(e) => setPassword(e.target.value)} value={password} type='text' placeholder='Senha'/>
                    <input type='button' className="button-login" onClick={handleClickLogin} value='Entrar'/>
                </form>
            <div className="register-login">
                <span>Nao tem cadastro?</span>
                <Link className="link-login" to='/register'>
                    <span className="text-register">Resgistre-se</span>
                </Link>
            </div>
            </div>

        </div>
    )
}

export default Login