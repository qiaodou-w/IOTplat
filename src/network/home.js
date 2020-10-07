import { requset } from "./request";
export function getHomeData() {
  return requset({
    url: "/users/env-info"
  });
}
