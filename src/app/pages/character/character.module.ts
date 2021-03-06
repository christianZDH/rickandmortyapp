import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterPageRoutingModule } from './character-routing.module';

import { CharacterPage } from './character.page';
import { SkeletonComponent } from './components/skeleton/skeleton.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CharacterPageRoutingModule],
  declarations: [CharacterPage, SkeletonComponent],
})
export class CharacterPageModule {}
