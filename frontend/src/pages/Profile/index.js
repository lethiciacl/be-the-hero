import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import logoimg from '../../assets/logo.svg';
import api from '../../services/api';
import './styles.css';

export default function Profile() {
    const [incidents, setIncidents] = useState([]);
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');
    const history = useHistory();

    useEffect(
        ()=>{
            api.get('profile', {
                headers: {
                    Authorization: ongId,
                }
            }).then(
                response => {
                    setIncidents(response.data);
                }
            );
        }, 
        [ ongId ]
    );

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }


    async function handleIncidentDeletion(id) {
       try {
           await api.delete(`incidents/${id}`,{
               headers: {
                   Authorization: ongId,
               }
           });

           setIncidents(incidents.filter(
               incident => incident.id !== id
           ));

       } catch (error) {
           alert('Whoops, não conseguimos deletar isso agora. Tenta de novo! (:')
       }
    }
    
    return (
        <div className="profile-container">
            <header>
                <img src={logoimg} alt="Be The Hero" />
                <p> Bem vinda, {ongName} </p>
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>
            <ul>
                {
                    incidents.map(incident => (
                        <li key={incident.id}>
                            <strong>Caso:</strong>
                            <p>{incident.title}</p>
                            <strong>Descrição:</strong>
                            <p>{incident.description}</p>
                            <strong>Valor:</strong>
                            <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>
                            <button onClick={()=>handleIncidentDeletion(incident.id)} type="button">
                                <FiTrash2 size={20} color="#a8a8b3" />
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}