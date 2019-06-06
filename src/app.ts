
import {HttpClient} from 'aurelia-http-client';
export class App {

  public coindata: any;

  client = new HttpClient();

  getData(){
    //console.log("testing")
    
    this.client.get('https://api.coingecko.com/api/v3/coins/')
      .then(data => {
        
        this.coindata = JSON.parse(data.response);

        //console.log(this.coindata)
      })
      
  }
  
}

