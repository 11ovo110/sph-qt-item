//造假的接口
import Mock from 'mockjs';
//webpack特性:JSON|image|CSS 虽然不能书写暴露,但是默认对外暴露
import banner from './banner.json';

//引入楼层的数据
import floor from './floor.json';
//造轮播图需要的接口
//第一个参数:接口的路径  第二个参数:接口返回的数据[前端发请求,接口返回数据]
//Mock造的接口GET
Mock.mock("/mock/banner",{code:200,data:banner,success:"成功"});

//楼层的接口
Mock.mock('/mock/floor',{code:200,data:floor,success:'成功'});
