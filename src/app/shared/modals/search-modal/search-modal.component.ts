import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { IonSearchbar, ModalController } from '@ionic/angular';
import {
  CharacterI,
  CharacterSchemaI,
} from '../../interfaces/character.interface';
import { CharacterService } from '../../services/character.service';
import { EpisodeI, EpisodeSchemaI } from '../../interfaces/episode.interface';
import {
  LocationI,
  locationSchemaI,
} from '../../interfaces/location.interface';
import { EpisodeService } from '../../services/episode.service';
import { LocationService } from '../../services/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss'],
})
export class SearchModalComponent implements OnInit {
  @ViewChild(IonSearchbar) ionSearchbar: IonSearchbar;
  @Input() inputPlaceholder: string;
  @Input() role: string;
  characters: CharacterI[] = [];
  episodes: EpisodeI[] = [];
  locations: LocationI[] = [];
  constructor(
    private modalController: ModalController,
    private router: Router,
    private characterService: CharacterService,
    private episodeService: EpisodeService,
    private locationService: LocationService
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.ionSearchbar.setFocus();
  }

  onSearchChange(ev: any) {
    const textSearch = ev.detail.value.toLowerCase().trim();
    if (textSearch !== '') {
      switch (this.role) {
        case 'character':
          this.searchCharacter(textSearch);
          break;
        case 'episode':
          this.searchEpisode(textSearch);
          break;
        case 'location':
          this.searchLocation(textSearch);
          break;
      }
    }
  }

  searchCharacter(text: string) {
    this.characterService
      .searchCharacter(text)
      .subscribe((schema: CharacterSchemaI) => {
        this.characters = [];
        this.characters = schema.results;
      });
  }

  searchEpisode(text: string) {
    this.episodeService
      .searchEpisode(text)
      .subscribe((schema: EpisodeSchemaI) => {
        this.episodes = [];
        this.episodes = schema.results;
      });
  }

  searchLocation(text: string) {
    this.locationService
      .searchLocation(text)
      .subscribe((schema: locationSchemaI) => {
        this.locations = [];
        this.locations = schema.results;
      });
  }

  viewCharacter(character: CharacterI) {
    this.router.navigate([`character/${character.id}`]);
    this.closeModal();
  }

  viewEpisode(episode: EpisodeI) {
    this.router.navigate([`episode/${episode.id}`]);
    this.closeModal();
  }

  viewLocation(location: LocationI) {
    this.router.navigate([`location/${location.id}`]);
    this.closeModal();
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
