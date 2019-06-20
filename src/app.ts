
import {HttpClient} from 'aurelia-http-client';
import { exportDefaultSpecifier } from '@babel/types';
export class App {

  public products = [
    //USD is already set. It is the default
    { id: '$', name: 'aud' },
    { id: 'Ξ', name: 'eth' },
    { id: '₿', name: 'btc' },
    { id: '€', name: 'eur' },
  ];

  public currencySymbol: any;
  public coindata: any;

  loadingCoinData = false;
  client = new HttpClient();

  attached() {
    this.getData();
  }

  async getData(){
    this.loadingCoinData = true;
    try {
      const coinData = await this.client.get('https://api.coingecko.com/api/v3/coins/');
      if (coinData && coinData.isSuccess) {
        this.coindata = coinData.content;
        console.log(this.coindata[0])
      }
    } catch (error) {
      console.error(`app.getData: ${error}`);
    } finally {
      this.loadingCoinData = false;
    }
  }
}

