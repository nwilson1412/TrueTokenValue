
import {HttpClient} from 'aurelia-http-client';
export class App {

  public coindata: any;
  public currencyType = "usd";
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
      }
    } catch (error) {
      console.error(`app.getData: ${error}`);
    } finally {
      this.loadingCoinData = false;
    }
  }
  
}

