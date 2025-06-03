import Image from "next/image";
import { FC } from "react";

interface BookDetailsProps {
  title: string;
  author: string;
  description: string;
  coverUrl: string;
}

const BookDetails: FC<BookDetailsProps> = ({ title, author, description, coverUrl }) => {
  return (
    <section
      className="bg-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto"
      aria-labelledby="book-detail-title"
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative w-full md:w-1/3 h-60 rounded overflow-hidden">
          <Image
            src={coverUrl}
            alt={`Portada del libro ${title}`}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex-1">
          <h2 id="book-detail-title" className="text-2xl font-bold text-gray-800">{title}</h2>
          <p className="text-md text-gray-600 mb-4" aria-label={`Autor: ${author}`}>por {author}</p>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
