import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CharacterI } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favoritesBehavior: BehaviorSubject<CharacterI[]> =
    new BehaviorSubject([]);
  constructor() {
    this.loadFavorites();
  }

  getFavoritesObservable(): Observable<CharacterI[]> {
    return this.favoritesBehavior.asObservable();
  }

  addFavorite(character: CharacterI): Promise<void> {
    return new Promise((resolve) => {
      this.favoritesBehavior.value.unshift(character);
      this.saveLocalStorage();
      resolve();
    });
  }

  removeFavorite(characterId: number): Promise<void> {
    return new Promise((resolve) => {
      const newValue = this.favoritesBehavior.value.filter(
        (item) => characterId !== item.id
      );
      this.favoritesBehavior.next(newValue);
      this.saveLocalStorage();
      resolve();
    });
  }

  //check if exist character in favorites
  checkIfExist(characterId: number): Promise<boolean> {
    return new Promise((resolve) => {
      const value = this.favoritesBehavior.value.filter((item) => {
        if (characterId === item.id) {
          return item;
        }
      });

      if (value.length === 0) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  }

  private saveLocalStorage() {
    localStorage.setItem(
      'favorites',
      JSON.stringify(this.favoritesBehavior.value)
    );
  }

  private loadFavorites() {
    if (!localStorage.getItem('favorites')) {
      localStorage.setItem('favorites', '[]');
    }
    this.favoritesBehavior.next(JSON.parse(localStorage.getItem('favorites')));
  }
}
