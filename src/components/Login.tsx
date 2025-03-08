"use client"; // Indicar que este es un componente de cliente

import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Lógica de autenticación aquí
  };

  return (
    <section aria-labelledby="login-title">
      <div className="login-container">
        <h2 id="login-title">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" aria-label="Campo de usuario" aria-required="true">Usuario:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" aria-label="Campo de contraseña" aria-required="true">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" aria-label="Iniciar sesión">Iniciar Sesión</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
