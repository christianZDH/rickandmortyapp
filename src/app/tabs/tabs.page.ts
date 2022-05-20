import { Component } from '@angular/core';

interface TabI {
  label: string;
  icon: string;
  tab: string;
}
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  tabSelected: string;

  tabs: TabI[] = [
    { tab: 'tab1', label: 'Episodes', icon: 'videocam-outline' },
    { tab: 'tab2', label: 'Characters', icon: 'accessibility-outline' },
    { tab: 'tab3', label: 'Locations', icon: 'globe-outline' },
    { tab: 'tab4', label: 'Favorites', icon: 'heart-outline' },
  ];
  constructor() {}

  changeTab(ev: any) {
    this.tabSelected = ev.tab;
  }
}
