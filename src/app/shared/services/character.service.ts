import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  CharacterI,
  CharacterSchemaI,
} from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  page = 1;
  private charactersBehavior$ = new BehaviorSubject([]);
  constructor(private http: HttpClient) {
    this.loadCharacters();
  }

  getCharacters(): Observable<CharacterI[]> {
    return this.charactersBehavior$.asObservable();
  }

  loadMore(): Promise<CharacterI[]> {
    return new Promise((resolve) => {
      this.page = this.page + 1;
      const req = this.http.get<CharacterSchemaI>(
        `${environment.api}/character/?page=${this.page}`
      );
      req.subscribe((resp) => {
        const items = [...this.charactersBehavior$.value, ...resp.results];
        this.charactersBehavior$.next(items);
        resolve(resp.results);
      });
    });
  }

  getCharacterId(idCharacter: number): Observable<CharacterI> {
    return this.http.get<CharacterI>(
      `${environment.api}/character/${idCharacter}`
    );
  }

  searchCharacter(name: string) {
    return this.http.get<CharacterSchemaI>(
      `${environment.api}/character/?name=${name}`
    );
  }

  private loadCharacters() {
    const req = this.http.get<CharacterSchemaI>(
      `${environment.api}/character/?page=1`
    );
    req.subscribe((resp) => {
      this.charactersBehavior$.next(resp.results);
    });
  }
}
