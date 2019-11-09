class Dollar {
  dollar: number;

  async currencyConverter(): Promise<Response> {
    const d = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
      // .then(value => value.json())
      // .then(jsonValue => {
      //   this.dollar = jsonValue[0].sale;
      //   console.log(this.dollar);
      //   return jsonValue[0].sale;
      // });

    console.log(d);
    return d
  }
}

export const Dolar = new Dollar().currencyConverter();
