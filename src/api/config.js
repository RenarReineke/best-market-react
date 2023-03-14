import axios from "axios";

export const url = "http://localhost:7777";

const api = axios.create({ baseURL: url });

export default api;
