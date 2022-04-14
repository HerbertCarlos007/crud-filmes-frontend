import React from "react";
import '../styles/Login.css'
import { Link } from 'react-router-dom'
 
function Login() {

    return(
        <div className="container-login">
            <div className="login-form-group">
                <form className="login-form">
                    <input className="input-login" type='text' placeholder='Login'/>
                    <input className="input-login" type='text' placeholder='Senha'/>
                    <button className="button-login">Entrar</button>
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