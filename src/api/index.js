import request from "@/utils";

export const reqTypeNav = () => request.get('/product/getBaseCategoryList');