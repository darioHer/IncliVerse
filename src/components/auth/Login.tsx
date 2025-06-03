"use client";

import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import styles from "./login.module.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      className={styles.loginContainer}
      role="form"
      aria-labelledby="login-heading"
    >
      <h1 className={styles.title} id="login-heading">
        Inicia Sesión
      </h1>

      <div className={styles.inputContainer}>
        <FaUser className={styles.icon} />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          aria-label="Correo electrónico"
          required
        />
      </div>

      <div className={styles.inputContainer}>
        <FaLock className={styles.icon} />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          aria-label="Contraseña"
          required
        />
      </div>

      <button type="submit" className={styles.button}>
        Iniciar sesión
      </button>
    </form>
  );
}
