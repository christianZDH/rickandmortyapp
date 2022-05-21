import { Component, OnInit, ViewChild } from '@angular/core';
import { LocationService } from '../shared/services/location.service';
import { LocationI } from '../shared/interfaces/location.interface';
import { Router } from '@angular/router';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { SearchModalComponent } from '../shared/modals/search-modal/search-modal.component';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  @ViewChild(IonInfiniteScroll) ionInfinite: IonInfiniteScroll;
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

  async viewLocationModal(location: LocationI) {
    this.route.navigate([`location/${location.id}`]);
  }

  loadData(event: any) {
    this.locationService.loadMore().then((locations: LocationI[]) => {
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

  trackBy(index: number, item: LocationI) {
    return item.id;
  }
}
