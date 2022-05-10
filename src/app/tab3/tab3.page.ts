import { Component, OnInit, ViewChild } from '@angular/core';
import { LocationService } from '../services/location.service';
import { LocationI } from '../interfaces/location.interface';
import { Router } from '@angular/router';
import {
  IonInfiniteScroll,
  IonVirtualScroll,
  ModalController,
} from '@ionic/angular';
import { SearchModalComponent } from '../modals/search-modal/search-modal.component';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  @ViewChild(IonInfiniteScroll) ionInfinite: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll) virtualScroll: IonVirtualScroll;
  locations: LocationI[] = [];
  constructor(
    private locationService: LocationService,
    private route: Router,
    private modalController: ModalController
  ) {}

  ngOnInit(): void {
    this.locationService.getLocations().subscribe((locations: LocationI[]) => {
      this.locations = locations;
    });
  }

  ionViewDidEnter() {
    this.virtualScroll.checkEnd();
    this.virtualScroll.checkRange(0);
  }

  async viewLocationModal(location: LocationI) {
    this.route.navigate([`location/${location.id}`]);
  }

  loadData(event: any) {
    this.locationService.loadMore().then((locations: LocationI[]) => {
      this.virtualScroll.checkEnd();
      event.target.complete();
      if (locations.length < 20) {
        this.ionInfinite.disabled = true;
      }
    });
  }

  async searchModal() {
    const modal = await this.modalController.create({
      component: SearchModalComponent,
      componentProps: { role: 'location', inputPlaceholder: 'Search location' },
    });
    return modal.present();
  }
}
