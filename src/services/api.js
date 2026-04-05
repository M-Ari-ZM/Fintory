import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getTransaksi = () => API.get("/transaksi");
export const addTransaksi = (data) => API.post("/transaksi", data);
export const getSummary = () => API.get("/transaksi/summary");
