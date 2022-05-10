import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EpisodeSchemaI, EpisodeI } from '../interfaces/episode.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
  private episodesBehavior = new BehaviorSubject([]);
  private page = 1;
  constructor(private http: HttpClient) {
    this.loadEpisodes();
  }

  getEpisodes(): Observable<EpisodeI[]> {
    return this.episodesBehavior.asObservable();
  }

  getEpisodeId(idEpisode: number) {
    return this.http.get<EpisodeI>(`${environment.api}/episode/${idEpisode}`);
  }

  loadMore(): Promise<EpisodeI[]> {
    this.page = this.page + 1;
    return new Promise((resolve) => {
      const req = this.http.get<EpisodeSchemaI>(
        `${environment.api}/episode/?page=${this.page}`
      );
      req.subscribe((resp) => {
        const newItems: EpisodeI[] = resp.results;
        this.episodesBehavior.value.push(...newItems);
        resolve(newItems);
      });
    });
  }

  searchEpisode(name: string) {
    return this.http.get<EpisodeSchemaI>(
      `${environment.api}/episode/?name=${name}`
    );
  }

  private loadEpisodes() {
    const req = this.http.get<EpisodeSchemaI>(
      `${environment.api}/episode/?page=1`
    );
    req.subscribe((resp) => {
      this.episodesBehavior.next(resp.results);
    });
  }
}
