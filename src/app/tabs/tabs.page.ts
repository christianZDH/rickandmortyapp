import { Component } from '@angular/core';

interface TabI {
  tab: string;
  label: string;
}
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  tabSelected: string;

  tabs: TabI[] = [
    { tab: 'tab1', label: 'Episodes' },
    { tab: 'tab2', label: 'Characters' },
    { tab: 'tab3', label: 'Locations' },
    { tab: 'tab4', label: 'Favorites' },
  ];
  constructor() {}

  changeTab(ev: any) {
    this.tabSelected = ev.tab;
  }
}
