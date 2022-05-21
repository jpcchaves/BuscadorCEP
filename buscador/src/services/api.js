import axios from "axios";

// baseURL: "https://viacep.com.br/ws/
// caminho recebido no input: "55026722/json"

const api = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export default api;
