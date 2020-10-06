import axios from "axios";
import { Notify } from 'vant';

export function requset(config) {
  const instance = axios.create({
    baseURL: "/users",
    timeout: 5000
  });

  instance.interceptors.request.use(value => {
	  console.log("interceptors.request fulfilled")
  	return value
  }, error => {
	  console.log("interceptors.request reject")
  	return Promise.reject(error)
  })

	instance.interceptors.response.use(value => {
		console.log("interceptors.res fulfilled")
		return value
	}, error => {
		console.log("interceptors.res reject")
		Notify(error.response.data.message)
		return error
	})
  return instance(config);
}
