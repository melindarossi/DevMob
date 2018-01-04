import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController} from 'ionic-angular';

/**
 * Generated class for the ToastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html',
})
export class ToastPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl:ToastController) {

  }

  toastBas(){
    let toast = this.toastCtrl.create({
      message:"en bas",
      duration:3000,
      position:'bottom'
    });
    toast.onDidDismiss(()=>{
      console.log('tout à disparu');
    });
    toast.present();
  }
  toastHaut(){
    let toast = this.toastCtrl.create({
      message:"en haut",
      duration:3000,
      position:'top'
    });
    toast.onDidDismiss(()=>{
      console.log('tout à disparu')
    });
    toast.present();
  }
  toastOk(){
    let toast = this.toastCtrl.create({
      message:"je fonctionne parfaitement",
      showCloseButton:true,
      position:'bottom'
    });
    toast.onDidDismiss(()=>{
      console.log('je suis parti')
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToastPage');
  }

}
