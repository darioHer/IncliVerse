import styles from '../../../styles/login.module.css';
import React from 'react';

export default function LoginForm() {
  return (
    <form aria-labelledby="login-form" className={styles.form}>
      <label htmlFor="email" className={styles.label}>Correo electrónico:</label>
      <input type="email" id="email" required aria-label="Correo electrónico" className={styles.input} />

      <label htmlFor="password" className={styles.label}>Contraseña:</label>
      <input type="password" id="password" required aria-label="Contraseña" className={styles.input} />

      <button type="submit" className={styles.button}>Iniciar sesión</button>
    </form>
  );
}
