import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from "./components/books/BookList";
import AddBook from "./components/books/AddBook";
import StatsPage from "./components/stats/StatsPage";
import Navbar from "./components/Navbar";

function App() {


  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<AddBook/>} />
        <Route path="/books" element={<BookList />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>

      
    </Router>
  );
}

export default App;