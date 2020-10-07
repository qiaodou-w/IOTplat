import { requset } from "./request";

export function getEnvData(cate) {
  return requset({
    url: "/users/env-info/data",
    params: {
      category: cate
    }
  });
}
