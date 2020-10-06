import { requset } from "./request";
export function login(user) {
	return requset({
		url: "/login",
		method: "post",
		data: user,
	});
}