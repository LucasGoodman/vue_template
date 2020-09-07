// api-tools文档：http://npm.segma.tech/-/web/detail/@segma/api-tools
import { ApiFactory, getToken, setToken, SegmaStrategy } from '@segma/api-tools';
import Vue from 'vue';

export const $axios = ApiFactory({
    tip: (message, code) => {
        (Vue.prototype.$message.error || console.log)(message, code);
    },
    axiosConfig: {
        baseURL: process.env.VUE_APP_BASE_API
    },
    auth: SegmaStrategy
});

export const log = process.env.NODE_ENV === 'development' ? console.log : () => {};

export const isProd = () => process.env.NODE_ENV === 'production';

export { getToken, setToken };

export default $axios;
