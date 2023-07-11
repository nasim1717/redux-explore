import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:9100",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export default axiosInstance;
