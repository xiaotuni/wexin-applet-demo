import { Utility, BaseComponent } from '../Core';

class tabs extends BaseComponent {
  constructor() {
    super();
  }

  /**
   * 初始化参数
   * 
   * @param {any} tabInfo { 
   *    SelectIndex:0,
   *    List: [
   *      {Id: 1, Name: ' ', onSelect: ()=>{ }}
   *    ]
   *  }
   * @memberof tabs
   */
  OnInit(tabInfo) {
    let { List, SelectIndex } = tabInfo || {}
    this.__Init(Utility);
    if (!List) {
      List = [];
    }

    if (!Utility.$IsArray(List)) {
      let i = 0;
      for (i; i < 4; i++) {
        const tab = {};
        tab.Id = i;
        tab.Name = 'Tab_' + i;
        tab.onSelect = this.___onSelect.bind(this, tab);
        List.push(tab);
      }
    }

    this.data.TTabs = { CurrentIndex: SelectIndex || 0, Tabs: List };
    this.__UpdateRender();

    this.__CurrentPage.onSelectTab = this.onSelectTab.bind(this);
  }

  ___onSelect(event, args) {
    console.log('___onSelect---');
  }

  onSelectTab(event) {
    const { currentTarget } = event;
    if (!currentTarget) {
      return;
    }
    const { id } = currentTarget;

    this.data.TTabs.CurrentIndex = Number(id);
    this.__UpdateRender();
    const currentTab = this.data.TTabs.Tabs[id];
    const { onSelect } = currentTab;
    if (onSelect) {
      onSelect(currentTab);
    }
  }
}

const Tabs = new tabs;
export { Tabs };