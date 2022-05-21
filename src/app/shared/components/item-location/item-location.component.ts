import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { LocationI } from '../../interfaces/location.interface';

@Component({
  selector: 'app-item-location',
  templateUrl: './item-location.component.html',
  styleUrls: ['./item-location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemLocationComponent implements OnInit {
  @Output() onclick: EventEmitter<LocationI> = new EventEmitter();
  @Input() location: LocationI;
  constructor() {}

  ngOnInit() {}

  viewLocationEmitter(event: LocationI) {
    this.onclick.emit(event);
  }
}
