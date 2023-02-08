import Mock from 'mockjs';
import banner from './banner.json';
import floor from './floor.json';

// 造轮播图需要的接口
// 第一个参数：接口的路径
// Mock造的接口Get
Mock.mock("/mock/banner", {code: 200, data: banner});
Mock.mock("/mock/floor", {code: 200, data: floor});