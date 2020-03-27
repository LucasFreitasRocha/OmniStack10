import React from 'react';
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2} from 'react-icons/fi'

import './Profile.css';
import '../../global.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="logo be the hero" />
                <span> Bem Vinda, Code Rock Soluitons</span>
                <Link className="button" to="/incident/new"> Cadastrar novo Caso</Link>
                <button type="button" >
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>
            <h1> Casos Cadastrados</h1>

            <ul>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>
                    <strong>Descrição:</strong>
                    <p>Descrição teste</p>
                    <strong>Valor</strong>
                    <p>R$ 4000</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#A8A8B3" />
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>
                    <strong>Descrição:</strong>
                    <p>Descrição teste</p>
                    <strong>Valor</strong>
                    <p>R$ 4000</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#A8A8B3" />
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>
                    <strong>Descrição:</strong>
                    <p>Descrição teste</p>
                    <strong>Valor</strong>
                    <p>R$ 4000</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#A8A8B3" />
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>
                    <strong>Descrição:</strong>
                    <p>Descrição teste</p>
                    <strong>Valor</strong>
                    <p>R$ 4000</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#A8A8B3" />
                    </button>
                </li>
            </ul>
        </div>
    )
}