import React from 'react';

const BookDetails = ({ book }) => {
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
