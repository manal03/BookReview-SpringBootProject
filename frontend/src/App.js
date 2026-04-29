import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from "./components/books/BookList";
import AddBook from "./components/books/AddBook";
import StatsPage from "./components/stats/StatsPage";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {


  return (
    <Router>
      <Navbar />

      <Routes>
  <Route path="/" element={<AddBook />} />

  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />

  <Route
    path="/books"
    element={
      <ProtectedRoute>
        <BookList />
      </ProtectedRoute>
    }
  />

  <Route
    path="/add"
    element={
      <ProtectedRoute>
        <AddBook />
      </ProtectedRoute>
    }
  />

  <Route
    path="/stats"
    element={
      <ProtectedRoute>
        <StatsPage />
      </ProtectedRoute>
    }
  />
</Routes>
      
    </Router>
  );
}

export default App;