// login.js
import { Utility, ApiClient, BasePage } from '../Core';


class Login extends BasePage {
  constructor() {
    super();
    this.data = {};
    this.onBtnLogin = this.onBtnLogin.bind(this);
    this.onTxtBlur = this.onTxtBlur.bind(this);
    this._onLoad = this._onLoad.bind(this);
  }

  _onLoad(args) {
    this.UrlParam = args;
    console.log('login -----on load', args);
  }

  onTxtBlur(event) {
    const { detail, currentTarget } = event;
    const { id } = currentTarget;
    const { value } = detail;
    this.data[id] = value;
    console.log(this.data);
  }

  onBtnLogin() {
    Utility.$Loading();
    const self = this;
    const { UrlParam } = this;
    const { IsGoBack } = UrlParam || {};
    ApiClient.post(ApiClient.Api.Login, { data: this.data }).then((success) => {
      Utility.$LoadingHide();
      Utility.$SetContent(Utility.$ConstItem.TokenInfo, success, true);
      if(IsGoBack==='1'){
        Utility.$GoBack();
      }
      console.log(success);
    }, () => {
      Utility.$LoadingHide();
    });
  }
}
Page(new Login())


