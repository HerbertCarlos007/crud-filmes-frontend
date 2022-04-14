import React from "react";
import '../styles/Register.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import api from "../../services/api";

function Register() {

    

    const handleClickRegister = async ({ name, email, password }) => {
         await api.post('/users/register', { name, email, password })
         
    }

    const validationRegister = yup.object().shape({
        email: yup.string().email('Não é um email').required('Este campo é obrigatório'),
        password: yup.string().min(8, 'A senha deve ter 8 caracteres').required('Este campo é obrigatório'),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas não são iguais')
    });

    return (
        <div className="container-register">

            <h1 className="title-register">Cadastro</h1> 

            <Formik initialValues={{}}
                onSubmit={handleClickRegister}
                validationSchema={validationRegister}>

                <Form className="register-form">

                <div className="register-form-group">
                        <Field name='name' className='register-form-field' placeholder='Nome' />

                        <ErrorMessage component='span' name='name' className='register-form-error' />
                    </div>

                    <div className="register-form-group">
                        <Field name='email' className='register-form-field' placeholder='Email' />

                        <ErrorMessage component='span' name='email' className='register-form-error' />
                    </div>

                    <div className="register-form-group">
                        <Field name='password' className='register-form-field' placeholder='Senha' />

                        <ErrorMessage component='span' name='password' className='register-form-error' />
                    </div>

                    <div className="register-form-group">
                        <Field name='confirmPassword' className='register-form-field' placeholder='Confirme sua senha' />

                        <ErrorMessage component='span' name='confirmPassword' className='register-form-error' />
                    </div>
                    <div className="button-form-register">
                        <button className="button-register" type="submit">Cadastrar</button>
                    </div>
                </Form>


            </Formik>


        </div>
    )
}

export default Register