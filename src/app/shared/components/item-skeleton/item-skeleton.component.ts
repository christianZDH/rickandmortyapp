import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-skeleton',
  templateUrl: './item-skeleton.component.html',
  styleUrls: ['./item-skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemSkeletonComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
