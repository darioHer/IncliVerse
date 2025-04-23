"use client";

import Link from "next/link";
import styles from "../../styles/navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.navbar} aria-label="Navegación principal">
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logo}>
          📖 Biblioteca
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link href="/">Inicio</Link>
        <Link href="/library">Biblioteca</Link>
        <Link href="/auth/login">Iniciar Sesión</Link>
        <Link href="/auth/register">Registrarse</Link>
      </div>
    </nav>
  );
}
