import React, { useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';
import './Register.css';
import  api  from '../../services/api'
export default function Register() {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [whatsapp, setWhatsApp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUF] = useState('');

    const history = useHistory();
    async function handleRegister(e) {
        e.preventDefault();
        const data = {
            name,
            mail,
            whatsapp,
            city,
            uf
        };
        try {
            const res = await api.post('/ong/create', data );
            alert(`Cadastro realizado com sucesso, sua id é: ${res.data.id} `);
            history.push('/');
        } catch (error) {
            alert("erro no cadastro, tente novamente")
        }
       
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt=" logo be the hero" />
                    <h1> Cadastro</h1>
                    <p> Faça seu Cadastro, entre na plataforma e ajude pessoas a encontrarem os cados da sua ONG</p>
                    <Link  className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02141" />
                       Já tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>

                    <input type="text" 
                    value={name} 
                    onChange = {e => setName(e.target.value)}
                    placeholder="Nome da ONG"/>

                    <input type="email" 
                    value={mail}  
                    onChange = {e => setMail(e.target.value)}
                     placeholder="E-mail"/>

                    <input type="text"
                    value={whatsapp} 
                    onChange = {e => setWhatsApp(e.target.value)}
                    placeholder="WhatsApp"/>
                    <div className="input-group">
                    <input type="text"
                    value={city}
                    onChange = {e => setCity(e.target.value)}
                    placeholder="Cidade"/>
                    <input type="text" value={uf}  
                    onChange = {e => setUF(e.target.value)}
                    placeholder="UF" style={{ width:80}} />
                    </div>
                    <button className="button" type="submit"> Cadastrar</button>
                </form>
            </div>
        </div>
    )
}