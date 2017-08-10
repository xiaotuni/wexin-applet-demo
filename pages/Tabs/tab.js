// tab.js
import { ApiClient, Utility } from '../Core';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    TTabs: {},
  },
  __OnSelectTab(args) {
    const { url } = args;
    Utility.$RedirectTo(url);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { Tab0, Tab1, Tab2, Tab3 } = Utility.$ConstItem.UrlItem;
    getApp().Tabs.OnInit({
      SelectIndex: 0,
      List: [
        { Id: 0, Name: '全部', url: Tab0, onSelect: this.__OnSelectTab.bind(this) },
        { Id: 1, Name: '状态1', url: Tab1, onSelect: this.__OnSelectTab.bind(this) },
        { Id: 2, Name: '状态2', url: Tab2, onSelect: this.__OnSelectTab.bind(this) },
        { Id: 3, Name: '状态3', url: Tab3, onSelect: this.__OnSelectTab.bind(this) },
      ]
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    getApp().Loading.OnInit();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})