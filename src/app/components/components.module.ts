import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { IonicModule } from '@ionic/angular';
import { ItemEpisodeComponent } from './item-episode/item-episode.component';
import { ItemCharacterComponent } from './item-character/item-character.component';
import { ItemLocationComponent } from './item-location/item-location.component';
import { ItemSkeletonComponent } from '../components/item-skeleton/item-skeleton.component';
import { ItemSkeletonListComponent } from './item-skeleton-list/item-skeleton-list.component';

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
export class ComponentsModule {}
