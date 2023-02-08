import Mock from 'mockjs';
import banner from '@/mock/banner.json';
import floor from '@/mock/floor.json'

Mock.mock('/mock/banner', {code: 200, data: banner});
Mock.mock('/mock/floor', {code: 200, data: floor});
