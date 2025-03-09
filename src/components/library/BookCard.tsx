interface BookCardProps {
    title: string;
    author: string;
    type: string;
    year: number;
    image: string;
}

export default function BookCard({ title, author, type, year, image }: BookCardProps) {
    return (
        <div className="border rounded-lg p-4" aria-label={`Título: ${title}, Autor: ${author}`}>
            <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
            <h2 className="font-bold">{title}</h2>
            <p>Autor: {author}</p>
            <p>Tipo: {type}</p>
            <p>Año de publicación: {year}</p>
        </div>
    );
}
