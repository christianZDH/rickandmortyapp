import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ItemCharacterComponent } from './components/item-character/item-character.component';
import { ItemEpisodeComponent } from './components/item-episode/item-episode.component';
import { ItemLocationComponent } from './components/item-location/item-location.component';
import { ItemSkeletonComponent } from './components/item-skeleton/item-skeleton.component';
import { ItemSkeletonListComponent } from './components/item-skeleton-list/item-skeleton-list.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    ItemEpisodeComponent,
    ItemCharacterComponent,
    ItemLocationComponent,
    ItemSkeletonComponent,
    ItemSkeletonListComponent,
  ],
  imports: [CommonModule, IonicModule],
  exports: [
    ToolbarComponent,
    ItemEpisodeComponent,
    ItemCharacterComponent,
    ItemLocationComponent,
    ItemSkeletonComponent,
    ItemSkeletonListComponent,
  ],
})
export class SharedModule {}
