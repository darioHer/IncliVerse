import './styles.css'; 

export default function Page() {
    return (
        <div>
            <header className="header">
                <h1>incluVerse</h1>
            </header>
            <main className="main">
                <h2>Noticias y Actualizaciones</h2>
                <p>Aquí se mostrarán las últimas noticias sobre libros y actualizaciones de la biblioteca.</p>
            </main>
            <footer className="footer">
                <p>Contacto: info@biblioteca.com | Teléfono: (123) 456-7890</p>
                <p>Dirección: Calle Ejemplo 123, Ciudad, País</p>
                <p>&copy; 2023 Derechos de autor del software</p>
            </footer>
        </div>
    );
}
