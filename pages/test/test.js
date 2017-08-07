// test.js
// import ApiClient from '../../utils/ApiClient';
import { ApiClient, Utility } from '../Core';


Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttons: [
      { id: 1001, title: 'aaaa' },
      { id: 1002, title: 'aaaa' },
      { id: 1003, title: 'aaaa' },
    ]
  },
  updateData: function () {
    this.setData(this.data);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    for (let i = 0; i < 5; i++) {
      const btn = {
        id: i + 1,
        title: '按钮_' + (i + 1),
      }
      this.data.buttons.push(btn);
    }
    this.updateData();

    ApiClient.get('/userinfo/users', { params: {}, data: { pageIndex: 0, pageSize: 15 } }).then((data) => {
      console.log('--------api------------');
      console.log(data);
      console.log('--------api------------');
    }, (err) => {
      // console.log(err);
      // Utility.$Emit('gocom_alert', err);
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
    Utility.aaaaaaaaa();
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