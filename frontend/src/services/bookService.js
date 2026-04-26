import axios from "axios";

const API_URL = "http://localhost:8080/books";

export const getBooks = () => axios.get(API_URL);
export const createBook = (data) => axios.post(API_URL, data);
export const deleteBook = (id) => axios.delete(`${API_URL}/${id}`);