/* eslint-disable @typescript-eslint/prefer-for-of */
import { Component, OnInit } from '@angular/core';
import { CharacterI } from 'src/app/shared/interfaces/character.interface';
import { LocationI } from 'src/app/shared/interfaces/location.interface';
import { CharacterService } from 'src/app/shared/services/character.service';
import { LocationService } from 'src/app/shared/services/location.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  idLocation: number;
  location: LocationI;
  residents: CharacterI[] = [];
  skeletonResidents = true;
  notResidents = false;
  constructor(
    private locationService: LocationService,
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.idLocation = params.id;
    });

    this.locationService
      .getLocationId(this.idLocation)
      .subscribe((location: LocationI) => {
        this.location = location;
        this.loadCharacters(location.residents);
      });
  }

  loadCharacters(stringUrl: string[]) {
    if (this.location.residents.length === 0) {
      this.skeletonResidents = false;
      this.notResidents = true;
      return;
    }
    for (let index = 0; index < stringUrl.length; index++) {
      const id = Number(stringUrl[index].split('character/')[1]);
      this.characterService
        .getCharacterId(id)
        .subscribe((character: CharacterI) => {
          this.skeletonResidents = false;
          this.residents.push(character);
        });
    }
  }

  async viewCharacter(character: CharacterI) {
    this.router.navigate([`character/${character.id}`]);
  }
}
