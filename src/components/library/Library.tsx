export default function Library() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border rounded-lg p-4" aria-label="Título: El Principito, Autor: Antoine de Saint-Exupéry">
          <img src="ruta/a/la/imagen/el_principito.jpg" alt="El Principito" className="w-full h-48 object-cover rounded-md" />
          <h2 className="font-bold">El Principito</h2>
          <p>Autor: Antoine de Saint-Exupéry</p>
          <p>Tipo: Ficción</p>
          <p>Año de publicación: 1943</p>
        </div>
        <div className="border rounded-lg p-4" aria-label="Título: 1984, Autor: George Orwell">
          <img src="ruta/a/la/imagen/1984.jpg" alt="1984" className="w-full h-48 object-cover rounded-md" />
          <h2 className="font-bold">1984</h2>
          <p>Autor: George Orwell</p>
          <p>Tipo: Distopía</p>
          <p>Año de publicación: 1949</p>
        </div>
        <div className="border rounded-lg p-4" aria-label="Título: Cien años de soledad, Autor: Gabriel García Márquez">
          <img src="ruta/a/la/imagen/cien_anos_de_soledad.jpg" alt="Cien años de soledad" className="w-full h-48 object-cover rounded-md" />
          <h2 className="font-bold">Cien años de soledad</h2>
          <p>Autor: Gabriel García Márquez</p>
          <p>Tipo: Realismo mágico</p>
          <p>Año de publicación: 1967</p>
        </div>
        <div className="border rounded-lg p-4" aria-label="Título: Don Quijote de la Mancha, Autor: Miguel de Cervantes">
          <img src="ruta/a/la/imagen/don_quijote.jpg" alt="Don Quijote de la Mancha" className="w-full h-48 object-cover rounded-md" />
          <h2 className="font-bold">Don Quijote de la Mancha</h2>
          <p>Autor: Miguel de Cervantes</p>
          <p>Tipo: Novela</p>
          <p>Año de publicación: 1605</p>
        </div>
        <div className="border rounded-lg p-4" aria-label="Título: La sombra del viento, Autor: Carlos Ruiz Zafón">
          <img src="ruta/a/la/imagen/la_sombra_del_viento.jpg" alt="La sombra del viento" className="w-full h-48 object-cover rounded-md" />
          <h2 className="font-bold">La sombra del viento</h2>
          <p>Autor: Carlos Ruiz Zafón</p>
          <p>Tipo: Novela</p>
          <p>Año de publicación: 2001</p>
        </div>
      </div>
    </div>
  );
}