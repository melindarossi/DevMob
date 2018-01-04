import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the GeolocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geoloc',
  templateUrl: 'geoloc.html',
})
export class GeolocPage {
Latitude:number;
Longitude:number;
tGeo:Array<Geotabs>= new Array<Geotabs>();
  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.Latitude=resp.coords.latitude;
      this.Longitude=resp.coords.longitude;
}).catch((error) => {
  console.log('Error getting location', error);
});

let watch = this.geolocation.watchPosition();
watch.subscribe((data) => {
  this.tGeo.push(new Geotabs(data.coords.longitude, data.coords.latitude));
});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeolocPage');
  }

}

class Geotabs{
  constructor(public tLongitude:number, public tLatitude:number){

  }
}
