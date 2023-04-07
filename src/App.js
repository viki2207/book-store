import Header from "./components/Header";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/components/Book/Home";
import AddBook from "../src/components/Book/AddBook";
import Books from "../src/components/Book/Books";
import About from "../src/components/Book/About";
import BookDetail from "../src/components/Book/BookDetail";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddBook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/books/:id" element={<BookDetail />}></Route>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
