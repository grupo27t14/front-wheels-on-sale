import axios from "axios";

export const apicep = axios.create({
  baseURL: "https://viacep.com.br/",
  timeout: 5000,
});

export const api = axios.create({
  baseURL: "https://api-wheelsonsale.onrender.com",
  timeout: 10000,
});

export const fipe = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com",
  timeout: 5000,
});
