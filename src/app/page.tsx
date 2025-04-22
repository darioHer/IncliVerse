"use client";
import styles from "../styles/page.module.css";

export default function Page() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        📚 Biblioteca Virtual
      </header>
      
      <main className={styles.content}>
        <p>Bienvenido a la biblioteca virtual inclusiva. Explora, aprende y disfruta del conocimiento accesible para todos.</p>
      </main>
      
      <footer className={styles.footer}>
        <p>© 2025 Biblioteca Virtual - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}
