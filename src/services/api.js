import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// GET
export const getTransaksi = () => API.get("/transaksi");

// POST
export const addTransaksi = (data) => API.post("/transaksi", data);
export const deleteTransaksi = (id) => API.delete(`/transaksi/${id}`);
export const updateTransaksi = (id, data) => API.put(`/transaksi/${id}`, data);
