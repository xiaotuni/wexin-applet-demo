import { Utility } from '../Core';
class loading {
  constructor() {
    this.Title = '哈哈';
    this.data = {};
  }

  Init() {
    const __Pages = getCurrentPages();
    if (!Utility.$IsArray(__Pages)) {
      return;
    }

    const __CurrentPage = __Pages[__Pages.length - 1];
    Object.assign(this, __CurrentPage);
    this.setData = __CurrentPage.setData;
    __CurrentPage.onCloseLoading = this.onCloseLoading.bind(this);
    this.data.LoadingInfo = { Title: '加载中...' };
    console.log('-------------------');

  }

  onCloseLoading() {
    this.data.LoadingInfo.IsShow = !this.data.LoadingInfo.IsShow;
    this.setData(this.data);
  }
}

const Loading = new loading();

export { Loading };