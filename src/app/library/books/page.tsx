import Image from "next/image";
import { FC } from "react";

interface BookCardProps {
  title: string;
  author: string;
  coverUrl: string;
  onClick?: () => void;
}

const BookCard: FC<BookCardProps> = ({ title, author, coverUrl, onClick }) => {
  return (
    <article
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-4 cursor-pointer"
      role="button"
      aria-label={`Ver detalles de ${title}`}
      onClick={onClick}
    >
      <div className="relative h-56 w-full rounded-lg overflow-hidden">
        <Image
          src={coverUrl}
          alt={`Portada del libro ${title}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{author}</p>
      </div>
    </article>
  );
};

export default BookCard;
