import axios from "axios";

const instance = axios.create({
  baseURL: "/vue-advanced-api/",
  timeout: 10000,
});

export function addResponseHandler(success, error) {
  instance.interceptors.response.use(success, error);
}

export default instance;
