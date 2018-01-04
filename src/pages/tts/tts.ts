import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';

/**
 * Generated class for the TtsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tts',
  templateUrl: 'tts.html',
})
export class TtsPage {
  text: TextData;
  constructor(public navCtrl: NavController, public navParams: NavParams, private tts:TextToSpeech) {
    this.text=new TextData("");
  }

  parleMoi(){
    this.tts.speak(this.text.inputText).then(()=> console.log ('Jai réussi à lire')).catch((reason:any)=>console.log(reason));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TtsPage');
  }

}

class TextData{
  constructor(public inputText : string){}
}
