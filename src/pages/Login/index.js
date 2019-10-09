import React, { useState } from 'react';
import api from '../../services/api'

export default function Login({ history }) {
  //Pegando Email
  const [email, setEmail] = useState('');

  async function handleSubmit(event){
    event.preventDefault(); // Não realizar ação de redirect

    //Faz a chamda a api para recuperar o usuario
    const response = await api.post('/sessions', {
      email: email
    })

    const { _id } = response.data;
    
    localStorage.setItem('user', _id);

    history.push('/dashboard');

  }

    return (
    <>
      <p>
        Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
      </p>

      <form onSubmit = {handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input type="email" 
          id="email" 
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

      <button className= "btn" type="submit">Entrar</button>

      </form>
    </>
    )
    
}