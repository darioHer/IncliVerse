"use client";
import styles from "../styles/page.module.css";

export default function Page() {
  return (
    <div className={styles.pageContainer} role="region" aria-label="Página de inicio de Biblioteca Virtual">
      <header className={styles.header} role="banner">
        <h1>📚 Biblioteca Virtual</h1>
      </header>

      <main className={styles.content} role="main">
        <p className={styles.welcomeText}>
          Bienvenido a la biblioteca virtual inclusiva. Explora, aprende y disfruta del conocimiento accesible para todos.
        </p>
      </main>

      <footer className={styles.footer} role="contentinfo">
        <p>© 2025 Biblioteca Virtual — Todos los derechos reservados</p>
      </footer>
    </div>
  );
}
