import axios from "axios";

const API_URL = "http://localhost:8080/reviews";

export const getReviewsByBook = (bookId) =>
  axios.get(`${API_URL}/book/${bookId}`);

export const addReview = (bookId, data) =>
  axios.post(`${API_URL}/book/${bookId}`, data);