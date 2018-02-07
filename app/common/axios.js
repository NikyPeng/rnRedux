/**
 * Created by glzc on 2018/1/31.
 */
//const Promise = require('pinkie-promise');
//const axios = require('axios');
import axios from 'axios';
//const http = require('http');
//const https = require('https');
const CancelToken = axios.CancelToken;
const _configs = axios.create({
    baseUrl: '',                //baseUrl + url = absolute api url
    transformRequest: (data, headers) => {          //change data before send,only for methods 'put'/'post'/'patch',
        return data;
    },
    transformResponse: (data) => {
        return data;
    },
    headers: {

    },
    params: {               //url parameters
        id: 'pc'
    },
    //paramsSerializer: (params) => {},         //url parameters serializer
    data: {                         //the data to be sent as the request body

    },
    timedOut: 10000,                //if the request takes longer than 'timeout', the request will be aborted
    widthCredentials: false,            //跨域是否需要认证，默认是false，xmlHttpRequest2独有的属性
    //adapter: (config) => {},            //创建ajax实例，node环境启用http创建服务，其他环境使用xmlHttpRequest以及XDomainRequest
    auth: {
        username: '',
        password: '',
    },
    responseType: 'json',           //返回的数据格式，支持'arraybuffer'、'blob'、'document'、'json'、'text'、'stream'
    xsrfCookieName: 'XSRF-TOKEN',   //default，要用作xrsf令牌值的名称
    xsrfHeaderName: 'X-XSRF-TOKEN', //default，携带xsrf令牌值的http头的名称
    onUploadProgress: (progressEvent) => {          //允许处理上传的进度事件

    },
    onDownloadProgress: (progressEvent) => {        //允许处理下载的进度事件

    },
    maxContentLength: 2000,                         //定义允许的http响应内容的最大大小
    validateStatus: (status) => {                   //null or function，if function, return true， promise将被解析；else promise被拒绝
        return status >= 200 && status < 300;       //default
    },
    maxRedirects: 5,                       //定义在node.js中要遵循的重定向最大数量，如果设置为0，则不会遵循重定向
    //httpAgent: new http.Agent({keepAlive: true}),                   //
    //httpsAgent: new https.Agent({ keepAlive: true }),               //
    proxy: {
        host: '127.0.0.1',
        port: '8989',
        auth: {
            username: 'pc',
            password: ''
        }
    },
    cancelToken: new CancelToken((cancel) => {})
});
export default {
    get: (url, config) => {
        let _config = Object.assign({}, config);
        return axios.get(url, _config);
    },
    delete: (url, config) => {
        let _config = Object.assign({}, config);
        return axios.delete(url, _config);
    },
    head: (url, config) => {
        let _config = Object.assign({}, config);
        return axios.head(url, _config);
    },
    options: (url, config) => {
        let _config = Object.assign({}, config);
        return axios.options(url, _config);
    },
    post: (url, data, config) => {
        let _config = Object.assign({}, config);
        return axios.post(url, data, _config);
    },
    put: (url, data, config) => {
        let _config = Object.assign({}, config);
        return axios.put(url, data, _config);
    },
    patch: (url, data, config) => {
        let _config = Object.assign({}, config);
        return axios.patch(url, data, _config);
    }
}

