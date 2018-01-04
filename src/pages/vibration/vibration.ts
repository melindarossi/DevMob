import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

/**
 * Generated class for the VibrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vibration',
  templateUrl: 'vibration.html',
})
export class VibrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private vibration:Vibration) {}

  vibreUneFois(){
    this.vibration.vibrate(2000);
  }
  vibrePlsFois(){
    this.vibration.vibrate([500,250,500,250,500]);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VibrationPage');
  }

}
