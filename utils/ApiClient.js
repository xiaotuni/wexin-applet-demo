import Utility from './Utility';

const methods = ['get', 'post', 'put', 'patch', 'delete'];

function formatUrl(path) {
  const adjustedPath = path[0] !== '/' ? '/' + path : path;
  const _ApiUrl = 'https://127.0.0.1:30081/webapi' + adjustedPath;
  return _ApiUrl;
}

export default class ApiClient {

  constructor() {

    methods.forEach((method) =>
      this[method] = (path, { params, data } = {}) => new Promise((resolve, reject) => {
        const url = formatUrl(path);
        console.log('method :%s --> url is %s', method, url);
        const header = { 'Content-Type': 'application/json' };
        wx.request({
          method, url, header, dataType: 'json', data,
          success: (res) => {
            const { statusCode, data, header } = res;
            if (statusCode === 200) {
              resolve(data);
            } else {
              const { Events } = Utility.$ConstItem();
              const { HttpStatus } = Events;
              const flag = HttpStatus[statusCode];
              if (flag) {
                Utility.$Emit(flag, data && data.msg ? data.msg : '处理错误...');
              }
              reject(data && data.msg ? data.msg : '处理错误...');
            }
          }, fail: (err) => {
            reject(err);
          }
        })
      })

    );



    this.Api = {
      Common: {},
      /**
       * post 用户登录
       */
      Login: '/user/login',
    }

  }
}