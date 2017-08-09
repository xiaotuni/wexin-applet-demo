import { Utility, BaseComponent } from '../Core';

class tabs extends BaseComponent {
  constructor() {
    super();
  }

  /**
   * 
   * 
   * @param {any} tabCollection [
   *  {Id: 1, Name: ' ', onSelect: ()=>{ }}
   * ]
   * @memberof tabs
   */
  OnInit(tabCollection) {
    this.__Init(Utility);
    if (!tabCollection) {
      tabCollection = [];
    }

    if (!Utility.$IsArray(tabCollection)) {
      let i = 0;
      for (i; i < 4; i++) {
        const tab = {};
        tab.Id = i;
        tab.Name = 'Tab_' + i;
        tab.onSelect = this.___onSelect.bind(this, tab);
        tabCollection.push(tab);
      }
    }

    this.data.TTabs = { Tabs: tabCollection };
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

    this.data.TTabs.CurrentIndex = Number(id);// dataset.hi;
    this.__UpdateRender();
    const currentTab = this.data.TTabs.Tabs[id];
    const { onSelect } = currentTab;
    if (onSelect) {
      onSelect(currentTab);
    }
    console.log('---------', event.currentTarget.dataset);
  }
}

const Tabs = new tabs;
export { Tabs };