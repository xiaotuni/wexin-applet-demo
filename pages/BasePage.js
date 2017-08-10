export default class BasePage {

  constructor() {
    // this.data = {};
    // this.onLoad = this.onLoad.bind(this);
    // this.onReady = this.onReady.bind(this);
    // this.onShow = this.onShow.bind(this);
    // this.onHide = this.onHide.bind(this);
    // this.onUnload = this.onUnload.bind(this);
    // this.onPullDownRefresh = this.onPullDownRefresh.bind(this);
    // this.onReachBottom = this.onReachBottom.bind(this);
    // this.onShareAppMessage = this.onShareAppMessage.bind(this);

    this.callChildrenMethod = this.callChildrenMethod.bind(this);
  }

  callChildrenMethod(self, args) {
    try {
      throw new Error();
    } catch (e) {

      var loc = e.stack.replace(/Error\n/).split(/\n/)[2].replace(/^\s+|\s+$/, "");
      const currentMethod = loc.split(' ')[1].split('.')[1];
      const pMethod = "_" + currentMethod;
      const params = arguments.length > 1 ? Array.prototype.slice.call(arguments, 1) : [];
      if (this[pMethod]) {
        this[pMethod].apply(self, params);
      }
    }
  }

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const __Pages = getCurrentPages();
    // if (Array.isArray(__Pages) && __Pages.length > 0) {
    //   const __CurrentPage = __Pages[__Pages.length - 1];
    //   Object.assign(this, __CurrentPage);
    //   this.setData = __CurrentPage.setData;
    //   this.CPage = __CurrentPage;
    // }
    this.callChildrenMethod(this, options);
  }

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.callChildrenMethod();
  }

  /**
   * 生命周期函数--监听页面显示
   * 
   * @memberof BasePage
   */
  onShow() {
    getApp().Loading.OnInit();
    this.callChildrenMethod(this);
  }


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    this.callChildrenMethod(this);
    getApp().Loading.OnDestroy();
  }

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    this.callChildrenMethod(this);
    getApp().Loading.OnDestroy();
  }

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() { this.callChildrenMethod(this); }

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() { this.callChildrenMethod(this); }

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    this.callChildrenMethod(this);
  }
}
