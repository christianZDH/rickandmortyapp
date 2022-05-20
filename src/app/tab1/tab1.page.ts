import { Component, OnInit, ViewChild } from '@angular/core';
import { EpisodeI } from '../shared/interfaces/episode.interface';
import { EpisodeService } from '../shared/services/episode.service';
import { Router } from '@angular/router';
import {
  IonInfiniteScroll,
  IonVirtualScroll,
  ModalController,
} from '@ionic/angular';
import { SearchModalComponent } from '../shared/modals/search-modal/search-modal.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll) virtualScroll: IonVirtualScroll;
  episodes: EpisodeI[] = [];
  constructor(
    private episodeService: EpisodeService,
    private router: Router,
    private modalController: ModalController
  ) {}

  ngOnInit(): void {
    this.episodeService.getEpisodes().subscribe((episodes) => {
      this.episodes = episodes;
    });
  }

  ionViewDidEnter() {
    this.virtualScroll.checkEnd();
    this.virtualScroll.checkRange(0);
  }

  async viewEpisodeModal(episode: EpisodeI) {
    this.router.navigate([`/episode/${episode.id}`]);
  }

  loadData(event) {
    this.episodeService.loadMore().then((episodes) => {
      event.target.complete();
      this.virtualScroll.checkEnd();
      if (episodes.length < 20) {
        this.infiniteScroll.disabled = true;
      }
    });
  }

  async searchModal() {
    const modal = await this.modalController.create({
      component: SearchModalComponent,
      componentProps: { role: 'episode', inputPlaceholder: 'Search episode' },
    });
    return modal.present();
  }
}
