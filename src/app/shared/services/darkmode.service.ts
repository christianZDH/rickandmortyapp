import { Injectable } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { BehaviorSubject, Observable } from 'rxjs';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class DarkmodeService {
  private darkmodeBehavior = new BehaviorSubject(false);
  constructor(private platform: Platform) {
    if (!localStorage.getItem('darkmode')) {
      localStorage.setItem('darkmode', 'false');
    }
    this.darkmodeBehavior.next(JSON.parse(localStorage.getItem('darkmode')));
    this.darkMode(this.darkmodeBehavior.value);
  }

  getStatus(): Observable<boolean> {
    return this.darkmodeBehavior.asObservable();
  }

  darkMode(status: boolean) {
    document.body.classList.toggle('dark', status);
    localStorage.setItem('darkmode', JSON.stringify(status));

    if (this.platform.is('android' || 'ios')) {
      if (!status) {
        StatusBar.setBackgroundColor({ color: '#ffffff' });
        StatusBar.setStyle({ style: Style.Light });
      } else {
        StatusBar.setBackgroundColor({ color: '#24282F' });
        StatusBar.setStyle({ style: Style.Dark });
      }
    }
  }
}
