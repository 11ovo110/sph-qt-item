import request from "@/utils/request";
import mockRequest from '@/utils/mockRequest';

export const reqTypeNav = () => request.get('/product/getBaseCategoryList');

export const reqGoodList = (data = {}) => request.post('/list', data);

export const reqBanner = () => mockRequest.get('/banner');

export const reqFloor = () => mockRequest.get('/floor');

export const reqGoodItemList = (skuId) => request.get(`/item/${ skuId }`);