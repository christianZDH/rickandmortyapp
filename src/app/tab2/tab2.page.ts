import { Component, OnInit, ViewChild } from '@angular/core';
import { CharacterService } from '../shared/services/character.service';
import { CharacterI } from '../shared/interfaces/character.interface';
import { ModalController, IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';
import { SearchModalComponent } from '../shared/modals/search-modal/search-modal.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  characters: CharacterI[] = [];
  skeletonCharacters = true;
  constructor(
    private characterService: CharacterService,
    private modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.characterService
      .getCharacters()
      .subscribe((characters: CharacterI[]) => {
        this.characters = characters;
      });
  }

  loadData(ev: any) {
    this.characterService.loadMore().then((characters: CharacterI[]) => {
      ev.target.complete();
      if (characters.length < 20) {
        this.infiniteScroll.disabled = true;
      }
    });
  }

  async viewCharacter(character: CharacterI) {
    this.router.navigate([`character/${character.id}`]);
  }

  async searchModal() {
    const modal = await this.modalController.create({
      component: SearchModalComponent,
      componentProps: {
        role: 'character',
        inputPlaceholder: 'Search character',
      },
    });
    return modal.present();
  }

  trackBy(index: number, item: CharacterI) {
    return item.id;
  }
}
