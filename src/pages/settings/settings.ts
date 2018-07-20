import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { HomePage } from "../home/home";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  coinType: string;
  currency: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage) {

    this.storage.get('coinInfo').then((val) => {
      if(val != null){
        let coinInfo = JSON.parse(val);
        this.coinType = coinInfo.coinType;
        this.currency = coinInfo.currency;
      } else {
        this.coinType = 'BTC';
        this.currency = 'USD';
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveForm(){
    let coinInfo = {
      coinType: this.coinType,
      currency: this.currency
    }
    this.storage.set('coinInfo', JSON.stringify(coinInfo));
    this.navCtrl.push(HomePage);
  }

}
