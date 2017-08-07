// test.js
// import ApiClient from '../../utils/ApiClient';
import { ApiClient, Utility } from '../Core';
var order = ['red', 'yellow', 'blue', 'green', 'red']

Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttons: [
      { id: 1001, title: 'aaaa' },
      { id: 1002, title: 'aaaa' },
      { id: 1003, title: 'aaaa' },
    ],
    AreaInfo: {},
    scrollTop: 100,
  },
  updateData() {
    this.setData(this.data);
  },
  InitData(Condition) {
    const self = this;
    ApiClient.get(ApiClient.Api.UserList, { data: Condition }).then((data) => {
      // self.data.AreaInfo = data;
      Utility.$ParseData(self.data.AreaInfo, data);
      self.updateData();
    }, (err) => {
      console.log(err);
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const self = this;
    this.InitData({ PageIndex: 0, PageSize: 20 })
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

    console.log('-----------bbb-');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('-----------aaaaaaa-');
    const { AreaInfo } = this.data;
    const { Condition } = AreaInfo || {};
    const { IsNextData } = Condition || {};
    if (!!IsNextData) {
      this.InitData(Condition);
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})