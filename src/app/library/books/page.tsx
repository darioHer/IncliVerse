import BookCard from '../../../components/library/BookCard';

export default function BooksPage() {
  return (
    <div>
      <h1>Lista de Libros</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <BookCard 
          title="El Principito" 
          author="Antoine de Saint-Exupéry" 
          type="Ficción" 
          year={1943} 
          image="ruta/a/la/imagen/el_principito.jpg" 
        />
        <BookCard 
          title="1984" 
          author="George Orwell" 
          type="Distopía" 
          year={1949} 
          image="ruta/a/la/imagen/1984.jpg" 
        />
        <BookCard 
          title="Cien años de soledad" 
          author="Gabriel García Márquez" 
          type="Realismo mágico" 
          year={1967} 
          image="ruta/a/la/imagen/cien_anos_de_soledad.jpg" 
        />
        <BookCard 
          title="Don Quijote de la Mancha" 
          author="Miguel de Cervantes" 
          type="Novela" 
          year={1605} 
          image="ruta/a/la/imagen/don_quijote.jpg" 
        />
        <BookCard 
          title="La sombra del viento" 
          author="Carlos Ruiz Zafón" 
          type="Novela" 
          year={2001} 
          image="ruta/a/la/imagen/la_sombra_del_viento.jpg" 
        />
      </div>
    </div>
  );
}
