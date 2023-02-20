//引入vee-validate插件
import VeeValidate from "vee-validate";
//引入Vue
import Vue from 'vue';
//安装插件
Vue.use(VeeValidate);
//次插件提供一个全局的能力:全局的自定义指令能力 v-validate全局在指令

//发现提示信息,为英文,可以设置为中文提示
import zh_CN from 'vee-validate/dist/locale/zh_CN'
VeeValidate.Validator.localize('zh_CN', {
    messages: {
        ...zh_CN.messages,
        is: (field) => `${field}必须与密码相同` // 修改内置规则的 message，让确认密码和密码相同
    },
    attributes: { // 给校验的 field 属性名映射中文名称
        phone: '手机号',
        code: '验证码',
        password: '密码',
        password1: '确认密码',
        agree: '协议'
    }
})


//复选框的自定义校验规则
VeeValidate.Validator.extend('agree', {
    validate: value => {
        return value
    },
    getMessage: field => field + '必须同意'
})

