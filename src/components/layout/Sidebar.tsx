'use client';

import Link from "next/link";
import { useState } from 'react';
import styles from "../../styles/sidebar.module.css";

export default function Sidebar() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const toggleCategories = () => setIsCategoriesOpen(prev => !prev);

  const genres = [
    { name: "Ficción", path: "/library?genre=ficcion" },
    { name: "Distopía", path: "/library?genre=distopia" },
    { name: "Realismo mágico", path: "/library?genre=realismo-magico" },
    { name: "Novela", path: "/library?genre=novela" },
    { name: "Biografía", path: "/library?genre=biografia" },
  ];

  return (
    <aside className={styles.sidebar}>
      <nav aria-label="Barra lateral de filtros">
        <button
          onClick={toggleCategories}
          className={styles.toggleButton}
          aria-expanded={isCategoriesOpen}
          aria-controls="sidebar-filtros"
        >
          {isCategoriesOpen ? "Ocultar filtros" : "Mostrar filtros"}
        </button>

        {isCategoriesOpen && (
          <div id="sidebar-filtros" className={styles.filterSection}>
            <section>
              <h2 className={styles.sectionTitle}>Categorías</h2>
              <ul className={styles.genreList}>
                {genres.map((genre) => (
                  <li key={genre.name}>
                    <Link href={genre.path} className={styles.genreLink}>
                      {genre.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className={styles.filterSection}>
              <h2 className={styles.sectionTitle}>Filtros</h2>
              <div className={styles.checkboxGroup}>
                <label>
                  <input type="checkbox" className="mr-2" />
                  Mostrar solo disponibles
                </label>
                <label>
                  <input type="checkbox" className="mr-2" />
                  Mostrar solo recomendados
                </label>
              </div>
            </section>
          </div>
        )}
      </nav>
    </aside>
  );
}
