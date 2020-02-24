import axios from 'axios';
import Vue from 'vue';
import qs from 'qs';
import CookieOperater from 'cookie-operator';

/**
 * cookie-operator自定义实例
 * 参考文档：https://github.com/LucasGoodman/cookie-operator/blob/master/README_CN.md
 * */
export const cookieOperater = CookieOperater.create({
    expires: 30,
    domain: CookieOperater.getTopDomain(),
    path: '/',
    secure: false
});

/**
 * cookie-operator操作所用的cookie keys
 * */
export const cookieKeys = ['auth_token'];

/**
 * 权限验证失败的跳转
 * */
export const redirectToAuthUrl = (url = window.location.href) => {
    let redirect_uri = `${location.origin}${process.env.VUE_APP_AUTH_REDIRECT_URI}?back_url=${encodeURIComponent(url)}`;
    window.location.href = `${process.env.VUE_APP_AUTH_URL}?response_type=code&client_id=${process.env.VUE_APP_AUTH_CLIENT_ID}&redirect_uri=${encodeURIComponent(redirect_uri)}`;
};

/**
 * 相应数据的默认转换
 * */
export const handleResponseDefault = data => {
    if (typeof data === 'string' && data[0] === '{') {
        return JSON.parse(data);
    } else {
        return data;
    }
};

/**
 * 登出
 * */
export const logout = (redirectUrl = window.location.origin) => {
    cookieOperater.remove('auth_token');
    if (redirectUrl) {
        window.location.href = process.env.VUE_APP_AUTH_LOGOUT_URL + encodeURI(redirectUrl);
    }
};

/**
 * 创建axios实例
 * 官方文档：https://github.com/axios/axios
 * 看云中文文档：https://www.kancloud.cn/yunye/axios/234845
 * */
export const $axios = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    transformResponse: [handleResponseDefault],
    paramsSerializer: function(params) {
        return qs.stringify(params, { arrayFormat: 'brackets' });
    }
});

/**
 * 添加请求拦截器
 * */
$axios.interceptors.request.use(
    config => {
        config.headers['Authorization'] = cookieOperater.get('auth_token');
        return config;
    },
    error => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

/**
 * 添加响应拦截器
 * */
$axios.interceptors.response.use(
    response => {
        if (response.data.success) {
            // 对响应数据做点什么
            return response.data.data;
        } else if (typeof response.data.success === 'undefined') {
            // 老版本接口
            const excption = response.data.message;
            if (excption) {
                errorTip(excption);
                return Promise.reject(excption);
            } else {
                return response.data;
            }
        } else {
            let { hideMessage } = response.data;
            if (!hideMessage) {
                // 对响应错误做点什么
                errorTip(response.data.resultMsg || '服务器错误');
            }
            return Promise.reject(response.data.resultMsg);
        }
    },
    error => {
        let { hideMessage } = error.response.data;

        // 针对获取个人信息的特别处理
        if (error.response.data.requestUseInfo) {
            return Promise.reject(error);
        }

        // 401
        if (error.response && error.response.status && error.response.status === 401) {
            if (!hideMessage) {
                errorTip('身份信息验证失败，请重新登录');
            }
            setTimeout(() => {
                redirectToAuthUrl();
            }, 500);
            return Promise.reject(error);
        }
        // 403
        if (error.response && error.response.status && error.response.status === 403) {
            if (!hideMessage) {
                errorTip('权限验证失败，即将跳转到首页');
            }
            // 跳转到首页
            setTimeout(() => {
                window.location.href = window.location.origin;
            }, 500);
            return Promise.reject(error);
        }
        // 对响应错误做点什么
        if (!(error.message && (error.message === '取消上传' || error.message === 'cancel'))) {
            if (navigator.onLine) {
                error.message ? errorTip(error.message) : errorTip('服务器错误，请联系系统管理员！');
            } else {
                errorTip('网络错误，请检查网络连接！');
            }
            return Promise.reject(error);
        }
    }
);

/**
 * 统一的错误提示
 * */
const errorTip = (message, code = null) => {
    let cut = code === '100' || code === '' || code === null;
    let msg = cut ? (message.length > 30 ? '运行报错' : message) : message;
    let tipFn = Vue.prototype.$message.error ? Vue.prototype.$message.error : console.log;
    tipFn(msg);
};
