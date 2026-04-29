import axios from "axios";

const BASE_URL = "http://localhost:8080/auth";

export const loginUser = (username, password) => {
  return axios.post(`${BASE_URL}/login`, {
    username,
    password
  });
};

export const registerUser = (username, password) => {
  return axios.post(`${BASE_URL}/register`, {
    username,
    password
  });
};