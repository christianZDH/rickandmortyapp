import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocationI, locationSchemaI } from '../interfaces/location.interface';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private locationsBehavior = new BehaviorSubject([]);
  private page = 1;
  constructor(private http: HttpClient) {
    this.loadLocations();
  }

  getLocations(): Observable<LocationI[]> {
    return this.locationsBehavior.asObservable();
  }

  getLocationId(idLocation: number) {
    return this.http.get<LocationI>(
      `${environment.api}/location/${idLocation}`
    );
  }

  loadMore(): Promise<LocationI[]> {
    this.page = this.page + 1;
    return new Promise((resolve) => {
      this.http
        .get(`${environment.api}/location?page=${this.page}`)
        .subscribe((schema: locationSchemaI) => {
          this.locationsBehavior.value.push(...schema.results);
          resolve(schema.results);
        });
    });
  }

  searchLocation(name: string) {
    return this.http.get<locationSchemaI>(
      `${environment.api}/location/?name=${name}`
    );
  }

  private loadLocations() {
    this.http
      .get(`${environment.api}/location?page=1`)
      .subscribe((schema: locationSchemaI) => {
        const locations: LocationI[] = schema.results;
        this.locationsBehavior.next(locations);
      });
  }
}
