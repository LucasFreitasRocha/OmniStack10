import React from 'react';
import { Link } from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';
import "./NewIncident.css"
export default function newIncident(params) {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt=" logo be the hero" />
                    <h1> Cadastrar novo caso </h1>
                    <p> Descveva o caso detalhadamente para encotrar um herói para resolver isso</p>
                    <Link  className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02141" />
                       Voltar para home
                    </Link>
                </section>
                <form>

                    <input type="text" placeholder="Tipo do caso"/>
                    <textarea placeholder="Descrição do caso" ></textarea>
                    <input type="text" placeholder="Valor em reais"/>
                    <button className="button" type="submit"> Cadastrar</button>
                </form>
            </div>
        </div>
    )
}