import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { DarkmodeService } from '../../services/darkmode.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnDestroy {
  @Input() searchDisable = false;
  @Input() title: string;
  @Output() onsearchClick = new EventEmitter();
  darkmode: boolean;
  darkmodeSubscription: Subscription;

  constructor(private darkmodeService: DarkmodeService) {
    this.darkmodeService.getStatus().subscribe((status) => {
      this.darkmode = status;
    });
  }

  ngOnDestroy(): void {
    this.darkmodeSubscription.unsubscribe();
  }

  clickSearchEmitter() {
    this.onsearchClick.emit();
  }

  darkModeToggle() {
    this.darkmodeService.darkMode(!this.darkmode);
  }
}
