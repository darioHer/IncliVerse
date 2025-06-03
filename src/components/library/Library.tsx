"use client";

import Image from "next/image"; // Este import faltaba en tu ejemplo
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
    img: "/libroImagen/el_principito.jpg",
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
    img: "/libroImagen/cien_anos_de_soledad.jpg",
  },
  {
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    type: "Novela",
    year: 1605,
    img: "/libroImagen/don_quijote.jpg",
  },
  {
    title: "La sombra del viento",
    author: "Carlos Ruiz Zafón",
    type: "Novela",
    year: 2001,
    img: "/libroImagen/la_sombra_del_viento.jpg",
  },
];

export default function Library() {
  return (
    <section className={styles.libraryContainer} aria-labelledby="library-heading">
      <h2 id="library-heading" className="sr-only">
        Lista de libros disponibles
      </h2>

      <div className={styles.bookGrid} role="list">
        {books.map((book) => (
          <article
            key={`${book.title}-${book.author}`}
            className={styles.bookCard}
            aria-labelledby={`${book.title.replace(/\s/g, "-")}-heading`}
            role="listitem"
            tabIndex={0}
            itemScope
            itemType="https://schema.org/Book"
          >
            {book.img ? (
              <div className={styles.bookImageWrapper}>
                <Image
                  src={book.img}
                  alt={`Portada del libro ${book.title}`}
                  width={200}
                  height={280}
                  className={styles.bookImage}
                  loading="lazy"
                  itemProp="image"
                />
              </div>
            ) : (
              <div
                className={styles.noImage}
                role="img"
                aria-label={`Sin imagen disponible para el libro ${book.title}`}
              >
                <FaBook className={styles.bookIcon} />
                <span>Sin imagen</span>
              </div>
            )}

            <h3
              id={`${book.title.replace(/\s/g, "-")}-heading`}
              className={styles.bookTitle}
              itemProp="name"
            >
              {book.title}
            </h3>
            <p className={styles.bookInfo}>
              <strong>Autor:</strong>{" "}
              <span itemProp="author">{book.author}</span>
            </p>
            <p className={styles.bookInfo}>
              <strong>Tipo:</strong> {book.type}
            </p>
            <p className={styles.bookInfo}>
              <strong>Año:</strong>{" "}
              <time itemProp="datePublished" dateTime={book.year.toString()}>
                {book.year}
              </time>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
