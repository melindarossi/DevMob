import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the QrscanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qrscan',
  templateUrl: 'qrscan.html',
})
export class QrscanPage {

  qrData=null;
  createdCode=null;
  scannedCode=null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner:BarcodeScanner) {}

  createCode(){
    this.createdCode=this.qrData;
  }

  scanCode(){
    this.barcodeScanner.scan().then(barecodeData => {
      this.scannedCode=barecodeData.text;
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad QrscanPage');
  }

}
