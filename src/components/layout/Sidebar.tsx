'use client';
import Link from "next/link";
import { useState } from 'react';

export default function Sidebar() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const genres = [
    { name: "Ficción", path: "/library?genre=ficcion" },
    { name: "Distopía", path: "/library?genre=distopia" },
    { name: "Realismo mágico", path: "/library?genre=realismo-magico" },
    { name: "Novela", path: "/library?genre=novela" },
    { name: "Biografía", path: "/library?genre=biografia" },
  ];

  return (
    <aside className="bg-gray-200 p-4 rounded-lg shadow-md">
      <nav>
        <ul className="space-y-2">
          <li>
            <button
              onClick={toggleCategories}
              className="block p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Filtrar
            </button>
          </li>
        </ul>
      </nav>

      {isCategoriesOpen && (
        <div className="mt-4">
          <h2 className="font-bold text-lg mb-2">Categorías</h2>
          <ul className="list-disc pl-5">
            {genres.map((genre) => (
              <li key={genre.name}>
                <Link 
                  href={genre.path}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {genre.name}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="font-bold text-lg mt-4 mb-2">Filtros</h2>
          <div>
            <label className="block mb-1">
              <input type="checkbox" className="mr-2" />
              Mostrar solo disponibles
            </label>
            <label className="block mb-1">
              <input type="checkbox" className="mr-2" />
              Mostrar solo recomendados
            </label>
          </div>
        </div>
      )}
    </aside>
  );
}