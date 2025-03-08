import React from 'react';

const books = [
    {
        id: 1,
        title: "El Alquimista",
        author: "Paulo Coelho",
        description: "Una historia sobre seguir tus sueños.",
        image: "/path/to/image1.jpg" // Cambiar a la ruta de la imagen real
    },
    {
        id: 2,
        title: "Cien años de soledad",
        author: "Gabriel García Márquez",
        description: "La historia de la familia Buendía en Macondo.",
        image: "/path/to/image2.jpg" // Cambiar a la ruta de la imagen real
    },
    // Agregar más libros según sea necesario
];

const Library = () => {
    return (
        <section aria-labelledby="library-title">
            <h2 id="library-title">Biblioteca</h2>
            <div className="book-list">
                {books.map(book => (
                    <div key={book.id} className="book-item">
                        <img src={book.image} alt={book.title} />
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                        <p>{book.description}</p>
                        <button>Añadir a Favoritos</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Library;
