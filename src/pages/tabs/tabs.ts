import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { GeolocPage } from '../geoloc/geoloc';
import { CameraPage } from '../camera/camera';
import { GyrosPage } from '../gyros/gyros';
import { ToastPage } from '../toast/toast';
import { VibrationPage } from '../vibration/vibration';
import { TtsPage } from '../tts/tts';
import { ShakePage } from '../shake/shake';
import { QrscanPage } from '../qrscan/qrscan';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = GeolocPage;
  tab5Root = CameraPage;
  tab6Root = GyrosPage;
  tab7Root = ToastPage;
  tab8Root = VibrationPage;
  tab9Root = TtsPage;
  tab10Root = ShakePage;
  tab11Root = QrscanPage;

  constructor() {

  }
}
