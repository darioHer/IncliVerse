"use client";

import styles from "../../styles/library.module.css";
import { FaBook } from "react-icons/fa";

interface Book {
  title: string;
  author: string;
  type: string;
  year: number;
  img?: string;
}

const books: Book[] = [
  {
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    type: "Ficción",
    year: 1943,
    img: "/libroImagen/el_principito.jpg"
  },
  {
    title: "1984",
    author: "George Orwell",
    type: "Distopía",
    year: 1949,
    img: "/libroImagen/1984.jpg",
  },
  {
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    type: "Realismo mágico",
    year: 1967,
    img: "/libroImagen/cien_anos_de_soledad.jpg"
  },
  {
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    type: "Novela",
    year: 1605,
    img: "/libroImagen/don_quijote.jpg"
  },
  {
    title: "La sombra del viento",
    author: "Carlos Ruiz Zafón",
    type: "Novela",
    year: 2001,
    img: "/libroImagen/la_sombra_del_viento.jpg"
  }
];

export default function Library() {
  return (
    <section className={styles.libraryContainer}>
      <div className={styles.bookGrid}>
        {books.map((book) => (
          <article
            key={book.title}
            className={styles.bookCard}
            aria-label={`Libro: ${book.title}, autor: ${book.author}, tipo: ${book.type}, año: ${book.year}`}
          >
            {book.img ? (
              <img
                src={book.img}
                alt={`Portada del libro ${book.title}`}
                className={styles.bookImage}
              />
            ) : (
              <div className={styles.noImage}>
                <FaBook className={styles.bookIcon} />
                <span>Sin imagen</span>
              </div>
            )}

            <h2 className={styles.bookTitle}>{book.title}</h2>
            <p className={styles.bookInfo}><strong>Autor:</strong> {book.author}</p>
            <p className={styles.bookInfo}><strong>Tipo:</strong> {book.type}</p>
            <p className={styles.bookInfo}><strong>Año:</strong> {book.year}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
