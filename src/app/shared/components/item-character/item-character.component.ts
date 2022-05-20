import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CharacterI } from 'src/app/shared/interfaces/character.interface';

@Component({
  selector: 'app-item-character',
  templateUrl: './item-character.component.html',
  styleUrls: ['./item-character.component.scss'],
})
export class ItemCharacterComponent implements OnInit {
  @Output() onclick = new EventEmitter();
  @Input() character: CharacterI;
  skeleton = false;

  constructor() {}

  ngOnInit() {}

  ionImgDidLoad() {
    this.skeleton = true;
  }

  ionImgWillLoad() {
    this.skeleton = false;
  }

  clickCharacter(character: CharacterI) {
    this.onclick.emit(character);
  }
}
