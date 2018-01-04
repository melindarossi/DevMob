import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GyrosPage } from './gyros';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';

@NgModule({
  declarations: [
    GyrosPage,
  ],
  imports: [
    IonicPageModule.forChild(GyrosPage),
  ],
})
export class GyrosPageModule {}
