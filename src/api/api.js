import axios from 'axios';
import Vue from 'vue';
import qs from 'qs';
import CookieOperater from 'cookie-operator';

/**
 * cookie-operator自定义实例
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

export const redirectToAuthUrl = (url = window.location.href) => {
    let redirect_uri = `${location.origin}${process.env.VUE_APP_AUTH_REDIRECT_URI}?back_url=${encodeURIComponent(url)}`;
    // let redirect_uri = `${location.origin}${process.env.VUE_APP_AUTH_REDIRECT_URI}`;
    window.location.href = `${process.env.VUE_APP_AUTH_URL}?response_type=code&client_id=${process.env.VUE_APP_AUTH_CLIENT_ID}&redirect_uri=${encodeURIComponent(redirect_uri)}`;
};

export const handleResponseDefault = data => {
    if (typeof data === 'string' && data[0] === '{') {
        return JSON.parse(data);
    } else {
        return data;
    }
};

export const logout = (redirectUrl = window.location.origin) => {
    cookieOperater.remove('auth_token');
    if (redirectUrl) {
        window.location.href = process.env.VUE_APP_AUTH_LOGOUT_URL + encodeURI(redirectUrl);
    }
};

// 使用自定义配置新建一个 axios 实例
const $axios = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    transformResponse: [handleResponseDefault],
    // get 请求时处理英文括号在url上传递报400
    // `paramsSerializer` 是一个负责 `params` 序列化的函数
    paramsSerializer: function(params) {
        return qs.stringify(params, { arrayFormat: 'brackets' });
    }
});

// 添加请求拦截器
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

// 添加响应拦截器
$axios.interceptors.response.use(
    response => {
        if (response.data.success) {
            // 对响应数据做点什么
            return response.data.data;
        } else if (typeof response.data.success === 'undefined') {
            // 老版本接口
            const excption = response.data.message;
            if (excption) {
                // window.msgbox(excption, response.data.type);
                Vue.prototype.$message.error(excption);
                return Promise.reject(excption);
            } else {
                return response.data;
            }
        } else {
            let { hideMessage } = response.data;
            if (!hideMessage) {
                // 对响应错误做点什么
                console.error('request-id:', response.data.requestId);
                console.error('error-api:', response.data.resultMsg);
                Vue.prototype.$message.error(response.data.resultMsg || '服务器错误');
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
                Vue.prototype.$message.error('身份信息验证失败，请重新登录');
            }
            setTimeout(() => {
                redirectToAuthUrl();
            }, 500);
            return Promise.reject(error);
        }
        // 403
        if (error.response && error.response.status && error.response.status === 403) {
            if (!hideMessage) {
                Vue.prototype.$message.error('权限验证失败，即将跳转到首页');
            }
            // 跳转到首页
            setTimeout(() => {
                window.location.href = window.location.origin;
            }, 500);
            return Promise.reject(error);
        }
        // 对响应错误做点什么
        if (!(error.message && (error.message === '取消上传' || error.message === 'cancel'))) {
            console.log('error!!!!', error);
            if (navigator.onLine) {
                error.message ? Vue.prototype.$message.error(error.message) : Vue.prototype.$message.error('服务器错误，请联系系统管理员！');
            } else {
                Vue.prototype.$message.error('网络错误，请检查网络连接！');
            }
            return Promise.reject(error);
        }
    }
);

export default $axios;
