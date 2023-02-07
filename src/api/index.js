import request from "@/utils/request";

export const getBaseCategoryList = () => {
  return request.get("/product/getBaseCategoryList");
};
