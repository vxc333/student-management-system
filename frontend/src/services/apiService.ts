import axios from "axios";

//EXEMPLO
export const api_studant = axios.create({
  baseURL: "http://localhost:8081/api",
});
