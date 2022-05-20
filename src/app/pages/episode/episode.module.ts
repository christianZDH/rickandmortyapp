import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpisodePageRoutingModule } from './episode-routing.module';

import { EpisodePage } from './episode.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EpisodePageRoutingModule,
    SharedModule,
  ],
  declarations: [EpisodePage],
})
export class EpisodePageModule {}
