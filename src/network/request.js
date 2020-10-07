import axios from "axios";
import { Notify } from "vant";
import router from "../router/index";

export function requset(config) {
  Notify.setDefaultOptions({
    duration: 1000
  });
  const instance = axios.create({
    baseURL: "/api",
    timeout: 5000
  });

  instance.interceptors.request.use(
    value => {

      const token = sessionStorage.getItem("token");
	    if (token) {
		    value.headers.Authorization = 'Bearer ' + token
	    }
      return value;
    },
    error => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    value => {
      return value;
    },
    error => {
      if (error.response.status === 401) {
        router.replace("/login")
      }
      Notify(error.response.data.message);
      return Promise.reject(error);
    }
  );
  return instance(config);
}
