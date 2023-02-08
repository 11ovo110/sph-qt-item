import request from "@/utils/request";

export const reqTypeNav = async () => request.get('/product/getBaseCategoryList');
