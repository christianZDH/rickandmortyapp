import { Component, OnInit } from '@angular/core';
import { CharacterI } from 'src/app/shared/interfaces/character.interface';
import { EpisodeI } from 'src/app/shared/interfaces/episode.interface';
import { CharacterService } from 'src/app/shared/services/character.service';
import { EpisodeService } from 'src/app/shared/services/episode.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FavoritesService } from '../../shared/services/favorites.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
})
export class CharacterPage implements OnInit {
  idCharacter: number;
  character: CharacterI;
  episode: EpisodeI;
  favorite = false;
  constructor(
    private characterService: CharacterService,
    private episodeService: EpisodeService,
    private favoriteService: FavoritesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.idCharacter = params.id;
    });

    this.characterService
      .getCharacterId(this.idCharacter)
      .subscribe((character: CharacterI) => {
        this.character = character;
        this.favoriteService.checkIfExist(this.character.id).then((exist) => {
          this.favorite = exist;
        });
        this.episodeService
          .getEpisodeId(Number(this.character?.episode[0].split('episode/')[1]))
          .subscribe((episode) => {
            this.episode = episode;
          });
      });
  }

  async viewEpisodeModal(idEpisode: number) {
    this.router.navigate([`episode/${idEpisode}`]);
  }

  async viewLocationModal(idLocation: number | null) {
    if (idLocation !== null) {
      this.router.navigate([`location/${idLocation}`]);
    }
  }

  viewOriginLocation() {
    if (this.character.origin.url !== '') {
      const id = this.character.origin.url.split('location/')[1];
      this.viewLocationModal(Number(id));
    }
  }
  viewLastLocation() {
    if (this.character.location.url !== '') {
      const id = this.character.location.url.split('location/')[1];
      this.viewLocationModal(Number(id));
    }
  }

  favoriteAction() {
    if (this.favorite) {
      this.removeToFavorite();
    } else {
      this.addToFavorite();
    }
  }

  addToFavorite() {
    this.favoriteService.addFavorite(this.character).then(() => {
      this.favorite = true;
    });
  }

  removeToFavorite() {
    this.favoriteService.removeFavorite(this.character.id).then(() => {
      this.favorite = false;
    });
  }
}
