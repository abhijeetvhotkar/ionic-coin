import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CoinpriceProvider } from "../../providers/coinprice/coinprice";
import { Storage } from "@ionic/storage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  coin: any;

  coinInfo: {
    coinType: string,
    currency: string
  }

  constructor(public navCtrl: NavController,
              private coinpriceProvider: CoinpriceProvider,
              private storage: Storage) {

  }
  ionViewWillEnter() {
    this.storage.get('coinInfo')
      .then((val) => {
        if(val != null){
          this.coinInfo = JSON.parse(val);
        } else {
          this.coinInfo = {
            coinType: 'BTC',
            currency: 'USD'
          }
        }
        this.coinpriceProvider.getCoinprice(this.coinInfo.coinType, this.coinInfo.currency).subscribe(coin => {
          console.log(coin);
          // this.coin = coin;
        });
      });
  }
}
