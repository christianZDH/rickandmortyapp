import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-skeleton-list',
  templateUrl: './item-skeleton-list.component.html',
  styleUrls: ['./item-skeleton-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemSkeletonListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
