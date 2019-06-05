import axios from "axios";
const api = axios.create({
  baseURL: "http://www.ibsm.org.br/?json=1"
});
export default api;
