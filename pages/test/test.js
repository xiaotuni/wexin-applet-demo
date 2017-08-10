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
    TTabs: {},
    AreaInfo: {},
    scrollTop: 100,
    LoadingTitle: '点击显示Loading弹框',
    CurrentSelectTab: null
  },
  __UpdateRender() {
    this.setData(this.data);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const __TabInfo = {
      SelectIndex: 2,
      List: [
        { Id: 1, Name: '状态1', onSelect: this.__OnSelectTab.bind(this) },
        { Id: 2, Name: '状态2', onSelect: this.__OnSelectTab.bind(this) },
        { Id: 3, Name: '状态3', onSelect: this.__OnSelectTab.bind(this) },
      ]
    };
    this.data.CurrentSelectTab = __TabInfo.List[2];
    getApp().Tabs.OnInit(__TabInfo);
  },

  __OnSelectTab(args) {
    console.log('__OnSelectTab---', args);
    this.data.CurrentSelectTab = args;
    this.__UpdateRender();
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
    getApp().Loading.OnDestroy();
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    getApp().Loading.OnDestroy();
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onTapScrollView: function (type) {
    Utility.$ToPage(Utility.$ConstItem.UrlItem.ScrollView);
  },

  /**
   * 弹出Loading组件，2秒后关闭
   * 
   */
  onTapLoading() {
    Utility.$Loading();
    let times = 5;
    this.data.LoadingTitle = '将在(' + times + ')后隐藏';
    this.setData(this.data);
    const Interval = setInterval(() => {
      times--;
      this.data.LoadingTitle = '将在(' + times + ')后隐藏';
      this.setData(this.data);
      if (times === 0) {
        this.data.LoadingTitle = '点击显示Loading弹框';
        Utility.$LoadingHide();
        clearInterval(Interval);
      }
    }, 1000);
  }

})