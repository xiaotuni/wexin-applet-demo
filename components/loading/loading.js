import { Utility, BaseComponent } from '../Core';
/**
 * loading组件，继承BaseComponent类
 * 
 * @class loading
 * @extends {BaseComponent}
 */
class loading extends BaseComponent {
  constructor() {
    super();
  }

  /**
   * 初始化操作
   * 
   * @memberof loading
   */
  OnInit() {
    this.__Init(Utility);
    this.ListenerEvent();
    this.data.TData = { Title: '加载中...', IsShow: false };
    this.__CurrentPage.onCloseLoading = this.onCloseLoading.bind(this);
    this.__UpdateData();
  }

  /**
   * 销毁事件，请在 页面 onHide 或 onUnload的时候，调用此方法
   * 
   * @memberof loading
   */
  OnDestroy() {
    Object.keys(this.LoadingEventInfo || {}).forEach((key) => {
      const value = this.LoadingEventInfo[key];
      Utility.$RemoveEvent(key, value);
    });
  }

  /**
   * 更新数据，通知页面宣染用的
   * 
   * @memberof loading
   */
  __UpdateData() {
    this.setData(this.data);
  }

  /**
   * 监听事件方法
   * 
   * @memberof loading
   */
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

  /**
   * 关闭操作
   * 
   * @memberof loading
   */
  onCloseLoading() {
    this.data.TData.IsShow = !this.data.TData.IsShow;
    this.__UpdateData();
  }
}

const Loading = new loading();
export { Loading };