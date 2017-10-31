import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  app: AppData;
  clickmessage: String;

  Clickme(){
    this.clickmessage="Bienvenue";
  }
  constructor(public navCtrl: NavController) {
    this.app=new AppData("nom app", 0.3);
  }
}

class AppData{
  constructor(public nom:string, public version: Number){

  }
}
