import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrscanPage } from './qrscan';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [
    QrscanPage,
  ],
  imports: [
    IonicPageModule.forChild(QrscanPage),
    NgxQRCodeModule
  ],
})
export class QrscanPageModule {}
