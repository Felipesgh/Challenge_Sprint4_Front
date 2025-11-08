import axios from "axios"

export const api = axios.create({
  baseURL: "http://localhost:8080/api", // 👉 depois muda para o link da API hospedada
  timeout: 5000,
})
