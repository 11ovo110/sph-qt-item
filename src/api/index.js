import request from "@/utils/request";

export const reqTypeNav = () => {
  return request.get("/product/getBaseCategoryList");
};
