"use client"; 

import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import styles from "./login.module.css"; 

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className={styles.loginContainer}>
      <div className={styles.inputContainer}>
        <FaUser className={styles.icon} />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
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
        />
      </div>

      <button type="submit" className={styles.button}>Iniciar sesión</button>
    </form>
  );
}
