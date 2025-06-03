"use client";

import styles from '../register/register.module.css';
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className={styles.registerContainer}>
      <h1 className={styles.title}>Registro</h1>

      <form className={styles.form} aria-labelledby="register-form">
        <label htmlFor="username" className={styles.label}>Nombre de usuario:</label>
        <input
          type="text"
          id="username"
          required
          aria-label="Nombre de usuario"
          className={styles.input}
        />

        <label htmlFor="email" className={styles.label}>Correo electrónico:</label>
        <input
          type="email"
          id="email"
          required
          aria-label="Correo electrónico"
          className={styles.input}
        />

        <label htmlFor="password" className={styles.label}>Contraseña:</label>
        <input
          type="password"
          id="password"
          required
          aria-label="Contraseña"
          className={styles.input}
        />

        
        <button type="submit" className={styles.button}>Registrars</button>

        <p className={styles.loginLink}>
          ¿Ya tienes una cuenta?{" "}
          <Link href="/auth/login" className={styles.link}>
            Inicia sesión
          </Link>
        </p>
      </form>
    </div>
  );
}
