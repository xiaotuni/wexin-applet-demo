import emitter from './EventEmitter';
const Event = new emitter();

export default class Utility {

  constructor() {

  }

  /**
   * 常量
   * 
   * @static
   * 
   * @memberOf Utility
   */
  static $ConstItem() {
    return {
      Route: 'GOCOM_Router',
      Location: 'GOCOM_Location',
      AppIsGoBack: 'GOCOM_APP_IS_GO_BACK',
      BrowerTitle: 'GOCOM_BrowerTitle',
      Event: 'GOCOM_EVENT_INFO',
      UserInfo: 'GOCOM_USER_INFO',
      QueryParams: 'GOCOM_QUERY_PARAMS',
      UrlPathInfo: 'GOCOM_URL_PATH_INFO',

      Events: {
        HttpStatus: {
          400: 'GOCOM_HTTP_STATUS_400',
          401: 'GOCOM_HTTP_STATUS_401',
          402: 'GOCOM_HTTP_STATUS_402',
          403: 'GOCOM_HTTP_STATUS_403',
          404: 'GOCOM_HTTP_STATUS_404',
          405: 'GOCOM_HTTP_STATUS_405',
          500: 'GOCOM_HTTP_STATUS_500',
          501: 'GOCOM_HTTP_STATUS_501',
        },
        ShowModel: {
          onActionSheet: 'GOCOM_MODEL_ACTION_SHEET',
          onActionSheetHide: 'GOCOM_MODEL_ACTION_SHEET_HIDE',
          onLoading: 'GOCOM_MODEL_LOADING',
          onLoadingHide: 'GOCOM_MODEL_LOADING_HIDE',
          onDialog: 'GOCOM_MODEL_DIALOG',
          onDialogHide: 'GOCOM_MODEL_DIALOG_HIDE',
        }
      },
      UrlItem: {
        GoBack: 'GOCOM_GOBACK',
        Home: 'home',

      }
    }
  };

  static $Emit(name, args) {
    Event.emit(name, args);
  }

  static $On(name, callback) {
    Event.on(name, callback);
  }

  static $ToPage(url, params) {
    console.log(url, params);
  }
  static aaaaaaaaa() {
    console.log('asfasf');
  }
}