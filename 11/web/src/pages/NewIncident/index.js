import React, {useState} from 'react';
import { Link , useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';
import "./NewIncident.css"
import api from '../../services/api';
export default function NewIncident(params) {
    const ongId = localStorage.getItem('ongId');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();
    async function handleNewIncident(e) {
        e.preventDefault();
        const data = {
            title,
            description,
            value
        };
        try {
           await api.post('/incidents/create', data, {
                headers:{
                    Authorization: ongId,
                },
                
            });
            history.push('/profile');
        } catch (error) {
            alert("não foi possivel, tente mais tarde!")
        }
    }
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
                <form onSubmit={handleNewIncident}>

                    <input 
                    type="text"
                    placeholder="Tipo do caso"
                    value={title}
                    onChange = {e =>setTitle(e.target.value)}
                    />
                    <textarea
                    placeholder="Descrição do caso" 
                    value={description}
                    onChange = {e =>setDescription(e.target.value)}
                    ></textarea>
                    <input 
                    type="text" 
                    placeholder="Valor em reais"
                    value={value}
                    onChange = {e =>setValue(e.target.value)}
                    />
                    <button className="button" type="submit"> Cadastrar</button>
                </form>
            </div>
        </div>
    )
}