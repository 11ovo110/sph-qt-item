import request from "@/utils/request";
import mockRequest from '@/utils/mockRequest';

export const reqTypeNav = () => request.get('/product/getBaseCategoryList');

export const reqBanner = () => mockRequest.get('/banner');

export const reqFloor = () => mockRequest.get('/floor');