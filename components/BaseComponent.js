/**
 * 基类
 * 
 * @export
 * @class BaseComponent
 */
export default class BaseComponent {
  constructor() { }

  /**
   * 初始化一些公共的。
   * 
   * @param {any} Utility 
   * @returns 
   * @memberof BaseComponent
   */
  __Init(Utility) {
    const __Pages = getCurrentPages();
    if (!Utility.$IsArray(__Pages)) {
      return;
    }

    const __CurrentPage = __Pages[__Pages.length - 1];
    Object.assign(this, __CurrentPage);
    this.setData = __CurrentPage.setData;
    this.__CurrentPage = __CurrentPage;
  }

  /**
   * 更新数据操作,通知页面宣染。
   * 
   * @memberof BaseComponent
   */
  __UpdateRender() {
    this.setData(this.data);
  }
}
