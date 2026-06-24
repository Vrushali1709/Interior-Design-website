import axios from "axios";

const api = axios.create({
  baseURL: "https://interior-design-website-zq6j.onrender.com/",
});

export default api;