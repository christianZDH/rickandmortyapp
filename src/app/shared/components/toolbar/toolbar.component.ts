import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { DarkmodeService } from '../../services/darkmode.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  @Input() searchDisable = false;
  @Input() title: string;
  @Output() onsearchClick = new EventEmitter();
  darkmode = false;

  constructor(private darkmodeService: DarkmodeService) {
    this.darkmodeService.getStatus().subscribe((status) => {
      this.darkmode = status;
    });
  }

  clickSearchEmitter() {
    this.onsearchClick.emit();
  }

  darkModeToggle() {
    this.darkmode = !this.darkmode;
    this.darkmodeService.darkMode(this.darkmode);
  }
}
