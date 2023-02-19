import request from "@/utils/request";
import mockRequest from "@/utils/mockRequest";

export const reqTypeNav = () => request.get("/product/getBaseCategoryList");

export const reqSearch = (data) => request.post(`/list`, data);

export const reqDetail = (skuId) => request.get(`/item/${skuId}`);

export const reqCarList = () => request.get("/cart/cartList");

export const reqAddOrUpdate = ({ skuId, skuNum }) => request.post(`/cart/addToCart/${skuId}/${skuNum}`);

export const reqchangeChecked = ({ skuId, isChecked }) => request.get(`/cart/checkCart/${skuId}/${isChecked}`);

export const reqDeteleGood = (skuId) => request.delete(`/cart/deleteCart/${skuId}`);

export const reqGetCode = (phone) => request.get(`/user/passport/sendCode/${phone}`);

export const reqRegister = (data) => request.post(`/user/passport/register`, data);

export const reqLogin = (data) => request.post("/user/passport/login", data);

export const reqGetUserInfo = () => request.get("/user/passport/auth/getUserInfo");

export const reqLoginOut = () => request.get("/user/passport/logout");

export const reqGetTrade = () => request.get("/order/auth/trade");

export const reqSubmitOrder = (tradeNo, data) => request.post(`/order/auth/submitOrder?tradeNo=${tradeNo}`, data);

export const reqGetOrder = (orderId) => request.get(`/payment/weixin/createNative/${orderId}`);

export const reqGetState = (orderId) => request.get(`/payment/weixin/queryPayStatus/${orderId}`);

export const reqGetHistoryOrder = (page, limit) => request.get(`/order/auth/${page}/${limit}`)

export const reqBanner = () => mockRequest.get("/banner");

export const reqFloor = () => mockRequest.get("/floor");
