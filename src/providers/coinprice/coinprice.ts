import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  'rxjs/add/operator/map';

/*
  Generated class for the CoinpriceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CoinpriceProvider {

  url;

  constructor(public http: HttpClient) {
    console.log('Hello CoinpriceProvider Provider');
    this.url = 'https://min-api.cryptocompare.com/data/price?fsym=';
  }

  getCoinprice(coinType, currency){
    return this.http.get(this.url+coinType+'&tsyms='+currency)
      .map(res => res);
  }
}
