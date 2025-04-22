import styles from "../../styles/library.module.css";

export default function Library() {
  const books = [
    {
      title: "El Principito",
      author: "Antoine de Saint-Exupéry",
      type: "Ficción",
      year: 1943,
      img: "ruta/a/la/imagen/el_principito.jpg"
    },
    {
      title: "1984",
      author: "George Orwell",
      type: "Distopía",
      year: 1949,
      img: "ruta/a/la/imagen/1984.jpg"
    },
    {
      title: "Cien años de soledad",
      author: "Gabriel García Márquez",
      type: "Realismo mágico",
      year: 1967,
      img: "ruta/a/la/imagen/cien_anos_de_soledad.jpg"
    },
    {
      title: "Don Quijote de la Mancha",
      author: "Miguel de Cervantes",
      type: "Novela",
      year: 1605,
      img: "ruta/a/la/imagen/don_quijote.jpg"
    },
    {
      title: "La sombra del viento",
      author: "Carlos Ruiz Zafón",
      type: "Novela",
      year: 2001,
      img: "ruta/a/la/imagen/la_sombra_del_viento.jpg"
    }
  ];

  return (
    <div className={styles.libraryContainer}>
      <div className={styles.bookGrid}>
        {books.map((book, index) => (
          <div key={index} className={styles.bookCard} aria-label={`Título: ${book.title}, Autor: ${book.author}`}>
            <img src={book.img} alt={book.title} className={styles.bookImage} />
            <h2 className={styles.bookTitle}>{book.title}</h2>
            <p className={styles.bookInfo}>Autor: {book.author}</p>
            <p className={`${styles.bookInfo} ${styles.bookType}`}>Tipo: {book.type}</p>
            <p className={styles.bookInfo}>Año de publicación: {book.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
