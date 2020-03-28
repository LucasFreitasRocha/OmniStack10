import React from 'react';
import  {useState} from 'react';
import {FiLogIn} from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import './Login.css';
import '../../global.css';
import api from '../../services/api';
import herosImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';


export default function Login() {
    
     async function handleLogin(e) {
        e.preventDefault();
       
        try {
            const res = await api.post('/login', { id })
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', res.data.name);
            history.push('/profile')
        } catch (error) {
            alert("login incorreto");
        }
    }
    const [id, setId] = useState('');
    const history = useHistory();
    return(
        <div className="login-container">
            <section className="form">
                <img src={logoImg}  alt=" logo be the hero"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Login</h1>
                    <input placeholder=" Sua ID" value={id} onChange={ e =>setId(e.target.value)} />
                    <button className="button" type="submit">Entrar</button>
                    <Link  className="back-link" to="/Register">
                        <FiLogIn size={16} color="#E02141" />
                        Não tenho cadastrado
                    </Link>
                </form>
            </section>
            <img src={herosImg}  alt=" Imagem de pessoas abraçadas"/>
        </div>
    )
}