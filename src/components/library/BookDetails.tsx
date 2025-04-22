import React from 'react';

interface Book {
  title: string;
  author: string;
  description: string;
}

type BookDetailsProps = {
  book: Book | null;
};

const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
  if (!book) {
    return <div>Select a book to see the details.</div>;
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetails;
