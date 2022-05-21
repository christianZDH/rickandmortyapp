import { Component, OnInit } from '@angular/core';
import { CharacterI } from '../shared/interfaces/character.interface';
import { FavoritesService } from '../shared/services/favorites.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  favoritesCharacters: CharacterI[] = [];
  constructor(
    private favoriteService: FavoritesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.favoriteService
      .getFavoritesObservable()
      .subscribe((characters: CharacterI[]) => {
        this.favoritesCharacters = characters;
      });
  }

  viewCharacter(character: CharacterI) {
    this.router.navigate([`character/${character.id}`]);
  }

  removeToFavorite(characterId: number) {
    this.favoriteService.removeFavorite(characterId);
  }

  trackBy(index: number, item: CharacterI) {
    return item.id;
  }
}
