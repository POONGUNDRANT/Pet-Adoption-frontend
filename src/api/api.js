import axios from "axios";

const api = axios.create({
  baseURL: "https://pet-adoption-backend-onjf.onrender.com/api/v1/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
