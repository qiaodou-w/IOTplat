import { requset } from "./request";
export function getHomeData() {
  return requset({
    url: "/env-info"
  });
}
