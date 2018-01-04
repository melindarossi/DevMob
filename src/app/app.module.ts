import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { GeolocPageModule } from '../pages/geoloc/geoloc.module';
import { CameraPageModule } from '../pages/camera/camera.module';
import { GyrosPageModule } from '../pages/gyros/gyros.module';
import { ToastPageModule } from '../pages/toast/toast.module';
import { VibrationPageModule} from '../pages/vibration/vibration.module';
import { TtsPageModule } from '../pages/tts/tts.module';
import { ShakePageModule } from '../pages/shake/shake.module';
import { QrscanPageModule } from '../pages/qrscan/qrscan.module';
import { NgxQRCodeModule } from 'ngx-qrcode2';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';
import { Vibration } from '@ionic-native/vibration';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Shake } from '@ionic-native/shake';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    GeolocPageModule,
    CameraPageModule,
    IonicModule.forRoot(MyApp),
    GyrosPageModule,
    ToastPageModule,
    VibrationPageModule,
    TtsPageModule,
    ShakePageModule,
    QrscanPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    Geolocation,
    Camera,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Gyroscope,
    Vibration,
    TextToSpeech,
    Shake,
    BarcodeScanner
  ]
})
export class AppModule {}
