"use client";
import Link from "next/link";
import styles from "../../styles/navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>📖 Biblioteca</div>
      <div className={styles.navLinks}>
        <Link href="/">Inicio</Link>
        <Link href="/library">Biblioteca</Link>
        <Link href="/auth/login">Iniciar Sesión</Link>
      </div>
    </nav>
  );
}
