import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import heroesimg from '../../assets/heroes.png';
import logoimg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi'
import api from '../../services/api';
import './styles.css';

export default function Logon() {

    const [id, setID] = useState('');
    const history = useHistory();

    async function loginHandler(event) {
        event.preventDefault();
        try {
            const response = await api.post('sessions', {id});
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        } catch (error) {
            alert("Whoops, não conseguimos te logar agora. Tenta de novo (:");
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoimg} alt="Be The Hero" />
                <form onSubmit={loginHandler} className="form">
                    <h1>Faça o seu logon</h1>
                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e=>setID(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                </form>
                <Link className="back-link" to="/register">
                    <FiLogIn size={16} color="#E02041" />
                    Não tenho cadastro
                </Link>
            </section>
            <img src={heroesimg} alt="Heroes" />
        </div>
    );
}