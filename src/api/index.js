import request from "@/utils/request";

export const reqTypeNav = () => request.get('/product/getBaseCategoryList');