import axios from "axios";

export const apicep = axios.create({
  baseURL: "https://viacep.com.br/",
  timeout: 5000,
});

export const api = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 5000
})