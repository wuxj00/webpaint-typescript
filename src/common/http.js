import axios from 'axios';
import { Notification } from 'element-ui';

const OVER_TIME = 5000;// 请求的超时时间

const http = axios.create({
    baseURL: process.env.BASER_URL,
    timeout: OVER_TIME,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    withCredentials: true // 允许携带cookie
});
http.interceptors.request.use(
    // (config) => {
    //     const { headers, params = {} } = config;
    //     const ticket = helper.getParameter('ticket');
    //     if (helper.isDef(ticket)) {
    //         headers.Authorization = ticket;// header携带ticket
    //         // url中parameter携带ticket
    //         params.ticket = ticket;
    //     }
    //     config.headers = headers;
    //     config.params = params;
    //     return config;
    // },
    config => config,
    err => Promise.reject(err));

http.interceptors.response.use(
    (response) => {
        const { status } = response;
        switch (status) {
            case 204:
                break;
            default:
                break;
        }
        return response;
    },
    (error) => {
        let msg;
        const { data = {} } = error.response || {};
        const errorInfo = data.data || {};
        const { redirectUrl } = errorInfo;
        if (error.response) {
            switch (error.response.status) {
                case 302:
                    break;
                case 400:
                    msg = '请求出现语法错误!';
                    break;
                case 401:
                    if (redirectUrl) {
                        window.location.href = redirectUrl;// `${}${document.location.href}`;
                        window.event.returnValue = false;
                        // window.open(`${redirectUrl}${document.location.href}`);
                    }
                    msg = '权限不足，未认证！';
                    break;
                case 403:
                    msg = '权限不足，不能访问该资源！';
                    break;
                case 404:
                    msg = '访问的资源不存在!';
                    break;
                case 500:
                    msg = '服务器异常！';
                    break;
                default:
                    msg = error.response.data.error;
                    break;
            }
            Notification({
                type: 'error',
                title: `HTTP:${error.response.status}`,
                message: msg
            });
        }
        return Promise.reject(error);
    });
export default http;
