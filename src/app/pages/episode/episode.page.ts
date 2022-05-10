/* eslint-disable @typescript-eslint/prefer-for-of */
import { Component, OnInit } from '@angular/core';
import { CharacterI } from 'src/app/interfaces/character.interface';
import { EpisodeI } from 'src/app/interfaces/episode.interface';
import { CharacterService } from 'src/app/services/character.service';
import { EpisodeService } from 'src/app/services/episode.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.page.html',
  styleUrls: ['./episode.page.scss'],
})
export class EpisodePage implements OnInit {
  idEpisode: number;
  characters: CharacterI[] = [];
  episode: EpisodeI;
  skeletonCharacters = true;
  constructor(
    private episodeService: EpisodeService,
    private characterService: CharacterService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.idEpisode = params.id;
    });

    this.episodeService
      .getEpisodeId(this.idEpisode)
      .subscribe((episode: EpisodeI) => {
        this.episode = episode;
        this.loadCharacters(episode.characters);
      });
  }

  loadCharacters(stringUrl: string[]) {
    for (let index = 0; index < stringUrl.length; index++) {
      const id = Number(stringUrl[index].split('character/')[1]);
      this.characterService
        .getCharacterId(id)
        .subscribe((character: CharacterI) => {
          this.characters.push(character);
          this.skeletonCharacters = false;
        });
    }
  }

  async viewCharacter(character: CharacterI) {
    this.router.navigate([`character/${character.id}`]);
  }
}
