//app.js
import { Utility } from './pages/Core';
import { Loading } from './components/Index';

App({
  Loading,
  onLaunch: function () {

    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    const { UrlItem, Events } = Utility.$ConstItem;
    const { HttpStatus } = Events;

    Utility.$On(HttpStatus['400'], (args) => {
      wx.showToast({ title: args });
    });
    Utility.$On(HttpStatus['401'], (args) => {
      wx.showToast({ title: args });
      Utility.$ToPage(UrlItem.Login);
    });
  },

  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function (res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null
  }
})
