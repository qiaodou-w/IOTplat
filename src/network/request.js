import axios from 'axios'
export function requset(config) {
	const instance = axios.create({
		baseURL:"http://127.0.0.1:3000",
		timeout:5000
	})
	return instance(config)
}
