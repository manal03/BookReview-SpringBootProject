import axios from "axios";

const API_URL = "http://localhost:8080/books";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`
  };
};

export const createBook = (data) =>
  axios.post(API_URL, data, { headers: getAuthHeader() });

export const deleteBook = (id) =>
  axios.delete(`${API_URL}/${id}`, { headers: getAuthHeader() });

export const getBooks = () =>
  axios.get(API_URL, { headers: getAuthHeader() });

export const updateBook = (id, book) => {
  return axios.put(`${API_URL}/${id}`, book, { headers: getAuthHeader() });
};

