import { ApiClient, Utility } from '../Core';
var order = ['red', 'yellow', 'blue', 'green', 'red']

Page({

  /**
   * 页面的初始数据
   */
  data: {
    AreaInfo: {},
    scrollTop: 100,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    Utility.$Loading();
    const __CND = { PageIndex: 0, PageSize: 20 };
    this.InitData(__CND);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('-----scroll view---- on hide--');
    getApp().Loading.OnDestroy();
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('-----scroll view---- on unload--');
    getApp().Loading.OnDestroy();
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
    console.log('-----------aaaaaaa-');
    const { AreaInfo } = this.data;
    const { Condition } = AreaInfo || {};
    const { IsNextData } = Condition || {};
    if (!!IsNextData) {
      Utility.$Loading();
      this.InitData(Condition);
    }

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  UpdateData() {
    this.setData(this.data);
  },

  InitData(Condition) {
    const self = this;
    this.IsLoding = true;
    ApiClient.get(ApiClient.Api.UserList, { data: Condition }).then((data) => {
      setTimeout(() => {
        Utility.$ParseData(self.data.AreaInfo, data);
        Utility.$LoadingHide();
        self.IsLoding = false;
      }, 1000);
    }, () => {
      Utility.$LoadingHide();
    });
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
    // 向下
    if (!!this.IsLoding) {
      return;
    }
    console.log('加载下一页数据')
    this.InitData(this.data.AreaInfo.Condition);
  },
  scroll: function (e) {
    // console.log(e)
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