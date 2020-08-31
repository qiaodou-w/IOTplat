import { requset } from "./request";

export function getEnvData(cate) {
  return requset({
    url: "/env-info/data",
    params: {
      category: cate
    }
  });
}
