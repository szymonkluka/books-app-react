import { useState } from 'react';
import BookForm from './components/BookForm/BookForm';
import BooksList from './components/BooksList/BooksList';
import shortid from 'shortid';

const App = () => {

  console.log('refreshed');

  const [books, setBooks] = useState([
    { id: 1, title: 'The Lord of The Rings', author: 'J.R.R. Tolkien' },
    { id: 2, title: 'Harry Potter', author: 'J.K. Rowling' }
  ]);

  const removeBook = bookId => {
    setBooks(books.filter(book => book.id !== bookId))
  }

  const addBook = newBook => {
    setBooks([...books, { id: shortid, title: newBook.title, author: newBook.author }]);

  }

  return (
    <div>
      <h1>Books App</h1>
      <BooksList books={books} removeBook={removeBook} />
      <BookForm addBook={addBook} />


    </div>
  );
}

export default App;
