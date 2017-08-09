export default class BaseComponent {
  constructor() {

  }
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

  __UpdateRender() {
    this.setData(this.data);
  }
}
