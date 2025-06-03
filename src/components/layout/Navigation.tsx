"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../../styles/navigation.module.css";
import sidebarStyles from "../../styles/sidebar.module.css";

export default function Navigation() {
  const pathname = usePathname();
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const toggleCategories = () => setIsCategoriesOpen((prev) => !prev);

  const genres = [
    { name: "Ficción", path: "/library?genre=ficcion" },
    { name: "Distopía", path: "/library?genre=distopia" },
    { name: "Realismo mágico", path: "/library?genre=realismo-magico" },
    { name: "Novela", path: "/library?genre=novela" },
    { name: "Biografía", path: "/library?genre=biografia" },
  ];

  const isLibraryRoute = pathname.startsWith("/library");

  return (
    <>
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

      {isLibraryRoute && (
        <div className={sidebarStyles.filterToggleWrapper}>
          <button
            onClick={toggleCategories}
            className={sidebarStyles.hamburgerButton}
            aria-expanded={isCategoriesOpen}
            aria-controls="sidebar-filtros"
          >
            {isCategoriesOpen ? (
              <>
                <FaTimes className={sidebarStyles.hamburgerIcon} />
                Ocultar filtros
              </>
            ) : (
              <>
                <FaBars className={sidebarStyles.hamburgerIcon} />
                Mostrar filtros
              </>
            )}
          </button>
        </div>
      )}

      {isLibraryRoute && isCategoriesOpen && (
        <div
          id="sidebar-filtros"
          className={sidebarStyles.filterPanel}
          role="region"
          aria-label="Filtros de biblioteca"
        >
          <section>
            <h2 className={sidebarStyles.sectionTitle}>Categorías</h2>
            <ul className={sidebarStyles.genreList}>
              {genres.map((genre) => (
                <li key={genre.name}>
                  <Link href={genre.path} className={sidebarStyles.genreLink}>
                    {genre.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className={sidebarStyles.filterSection}>
            <h2 className={sidebarStyles.sectionTitle}>Filtros</h2>
            <div className={sidebarStyles.checkboxGroup}>
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
    </>
  );
}

