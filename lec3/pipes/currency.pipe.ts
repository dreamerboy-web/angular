import {Pipe, PipeTransform} from '@angular/core';
import {config} from "../globals";
import {Dolar} from '../dollar'

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {
  USD:number = 24;
  EURO:number = 28;

  async transform(price: number) {

    let priseUSD = Math.floor(price/this.USD);
    let priseEURO = Math.floor(price/this.EURO);

    return [ `Prise: ${priseUSD} $`, `Prise: ${priseEURO} EURO`]
  }


}
