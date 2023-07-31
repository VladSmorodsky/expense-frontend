import httpClient from "../httpClient";

export const login = (email, password) => {
  return httpClient.post('http://localhost:8000/api/login', {
    email: email,
    password: password
  });
}