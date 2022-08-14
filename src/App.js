import { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import {Search} from './components/Search/Search';
import {Home} from './components/Home/Home';
import * as bookService from './services/bookService'

function App() {

  const [books, setBooks] = useState([]);

  
  useEffect(() => {
    bookService.getAll().then((result) => {
      setBooks(result);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Search />
      <main id="main">
      <Home books = {books}/>
      </main>
      

    </div>
  );
}

export default App;
