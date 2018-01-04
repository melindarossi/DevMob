import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { GeolocPage } from '../pages/geoloc/geoloc';
import { CameraPage} from '../pages/camera/camera';
import { GyrosPage } from '../pages/gyros/gyros';
import { ToastPage } from '../pages/toast/toast';
import { VibrationPage } from '../pages/vibration/vibration';
import { TtsPage } from '../pages/tts/tts';
import { ShakePage } from '../pages/shake/shake';
import { QrscanPage} from '../pages/qrscan/qrscan';

@Component({
  templateUrl: 'app.html',
  /*template: `
  <ul>
    <li *ngFor="let hero of heroes">
      {{ tGeo }}
    </li>
  </ul>`*/
})
export class MyApp {

  rootPage:any = TabsPage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
