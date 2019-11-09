import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipe'
})
export class TestPipePipe implements PipeTransform {

  transform(value: number, textNumb: number): any {
    return value*textNumb;
  }

}
