import axios from "axios";

const api = axios.create({
  baseURL: "https://interior-design-backend-flag.onrender.com",
});

export default api;