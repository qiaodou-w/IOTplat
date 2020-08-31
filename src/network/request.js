import axios from "axios";
export function requset(config) {
  const instance = axios.create({
    baseURL: "/users",
    timeout: 5000
  });
  return instance(config);
}
