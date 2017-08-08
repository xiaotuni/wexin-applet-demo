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

        const header = { 'Content-Type': 'application/json' };
        const __Condition = Object.assign({}, params || {}, data || {});
        const { PageIndex, PageSize } = __Condition;
        wx.request({
          method, url, header, dataType: 'json', data: __Condition,
          success: (res) => {
            const { statusCode, data, header } = res;
            if (statusCode === 200) {
              if (PageIndex >= 0) {
                if (data && data.length > 0) {
                  __Condition.IsNextData = data.length < PageSize ? false : true;
                  if (__Condition.IsNextData) {
                    __Condition.PageIndex++
                  }
                  const NewData = {
                    List: data,
                    Condition: __Condition
                  };
                  resolve(NewData);
                  return;
                }
              }
              resolve(data);
            } else {
              const { Events } = Utility.$ConstItem;
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
       * 用户列表
       */
      UserList: '/common/area',
      /**
       * post 用户登录
       */
      Login: '/user/login',
    }

  }
}