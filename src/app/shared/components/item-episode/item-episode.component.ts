import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { EpisodeI } from '../../interfaces/episode.interface';

@Component({
  selector: 'app-item-episode',
  templateUrl: './item-episode.component.html',
  styleUrls: ['./item-episode.component.scss'],
})
export class ItemEpisodeComponent implements OnInit {
  @Input() episode: EpisodeI;
  @Output() onclick = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onClick(episode: EpisodeI) {
    this.onclick.emit(episode);
  }
}
