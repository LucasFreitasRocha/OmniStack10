import React, {useEffect, useState}   from 'react';
import { Link , useHistory} from 'react-router-dom'
import { FiPower, FiTrash2} from 'react-icons/fi'

import './Profile.css';
import '../../global.css';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function Profile() {
   const ongName = localStorage.getItem('ongName');
   const ongId = localStorage.getItem('ongId');
   const [incidents, setIncidents] = useState([]);
   const history = useHistory();
   useEffect(()=>{
       if(ongId != null){
       api.get('/profile', {
           headers:{
               Authorization: ongId,
           }
       }).then(({data})=>{
            setIncidents(data);
       })}else{
           history.push('/');
       }
   },[ongId]);

   async function handleDeleteIncident(id) {
       try {
           await api.delete(`/incidents/${id}`,{
               headers:{
                   Authorization: ongId,
               }
           });
           setIncidents(incidents.filter(incident => incident.id !== id));
       } catch (error) {
           alert("Não foi possivel deletar o caso, tente novamente mais tarde");
       }
   }
   function handleLogout() {
       localStorage.clear();
       history.push('/');
   }
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="logo be the hero" />
                <span> Bem Vinda, {ongName}</span>
                <Link className="button" to="/incident/new"> Cadastrar novo Caso</Link>
                <button onClick={handleLogout} type="button" >
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>
            <h1> Casos Cadastrados</h1>

            <ul>
                {incidents.map(incident =>( 
                    <li key={incident.id} >
                        <strong>Caso:</strong>
                        <p>{incident.title}</p>
                        <strong>Descrição:</strong>
                        <p> {incident.description} </p>
                        <strong>Valor</strong>
                        <p> { Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format( incident.value)} </p>
                        <button  onClick={()=> handleDeleteIncident(incident.id)}  type="button">
                            <FiTrash2 size={20} color="#A8A8B3" />
                        </button>
                    </li>
                ))}
               
               
            </ul>
        </div>
    )
}