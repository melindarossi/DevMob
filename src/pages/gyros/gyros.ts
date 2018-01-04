import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';

/**
 * Generated class for the GyrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gyros',
  templateUrl: 'gyros.html',
})
export class GyrosPage {
  orientX:number;
  orientY:number;
  orientZ:number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private gyroscope: Gyroscope) {
      let options: GyroscopeOptions = {
        frequency: 1000
      }
    this.gyroscope.watch(options).subscribe((orientation: GyroscopeOrientation) => {
      this.orientX=orientation.x;
      this.orientY=orientation.y;
      this.orientZ=orientation.z;
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GyrosPage');
  }
}
