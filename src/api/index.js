import request from "@/utils/request";
import mockRequest from "@/utils/mockRequest";

export const reqTypeNav = () => request.get("/product/getBaseCategoryList");

export const reqGoodList = (data = {}) => request.post("/list", data);

export const reqBanner = () => mockRequest.get("/banner");

export const reqFloor = () => mockRequest.get("/floor");

export const reqItemList = (skuId) => request.get(`/item/${skuId}`);

export const reqAddOrUpdateCar = (skuId, skuNum) => request.post(`/cart/addToCart/${skuId}/${skuNum}`);

export const reqCarList = () => request.get("/cart/cartList");

export const reqChangeChecked = (skuId, isChecked) => request.get(`/cart/checkCart/${skuId}/${isChecked}`);

export const reqDelateGood = (skuId) => request.delete(`/cart/deleteCart/${skuId}`);

export const reqPhoneCode = (phone) => request.get(`/user/passport/sendCode/${phone}`)

export const reqRegister = (data)=> request.post(`/user/passport/register`,data);

export const reqLogin = (data) => request.post(`/user/passport/login`, data);

export const reqUserInfo = () => request.get('/user/passport/auth/getUserInfo');
