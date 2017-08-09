import { Utility, BaseComponent } from '../Core';
class loading extends BaseComponent {
  constructor() {
    super();
    // this.Title = '哈哈';
    // this.data = {};
  }

  OnInit() {
    this.__Init(Utility);
    this.ListenerEvent();

    // const __Pages = getCurrentPages();
    // if (!Utility.$IsArray(__Pages)) {
    //   return;
    // }
    // const __CurrentPage = __Pages[__Pages.length - 1];
    // Object.assign(this, __CurrentPage);
    // this.setData = __CurrentPage.setData;
    this.data.TData = { Title: '加载中...', IsShow: false };
    this.setData(this.data);
    this.__CurrentPage.onCloseLoading = this.onCloseLoading.bind(this);
  }

  OnDestroy() {
    Object.keys(this.LoadingEventInfo || {}).forEach((key) => {
      const value = this.LoadingEventInfo[key];
      Utility.$RemoveEvent(key, value);
    });
  }

  __UpdateData() {
    this.setData(this.data);
  }

  ListenerEvent() {
    const { onLoading, onLoadingHide } = Utility.$ConstItem.Events.ShowModel;
    const self = this;
    const __Update = (isShow) => {
      this.data.TData.IsShow = isShow;
      this.setData(this.data);
    };
    const LoadingIndex = Utility.$On(onLoading, () => {
      __Update(true);
    });
    const LoadingHide = Utility.$On(onLoadingHide, () => {
      __Update(false);
    });
    const EventInfo = {};
    EventInfo[onLoading] = LoadingIndex;
    EventInfo[onLoadingHide] = onLoadingHide;
    this.LoadingEventInfo = EventInfo;
  }

  onCloseLoading() {
    this.data.TData.IsShow = !this.data.TData.IsShow;
    this.setData(this.data);
  }
}

const Loading = new loading();

export { Loading };