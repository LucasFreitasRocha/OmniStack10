import React from 'react' ;
import {FiLogIn} from 'react-icons/fi'
import './main.css';

import herosImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
export default function login() {
    return(
        <div className="login-container">
            <section className="form">
                <img src={logoImg}  alt=" logo be the hero"/>
                <form>
                    <h1>Faça seu Login</h1>
                    <input placeholder=" Sua ID"/>
                    <button className="button" type="submit">Entrar</button>
                    <a href="/Register">
                        <FiLogIn size={16} color="#E02141" />
                        Não tenho cadastrado
                    </a>
                </form>
            </section>
            <img src={herosImg}  alt=" Imagem de pessoas abraçadas"/>
        </div>
    )
}