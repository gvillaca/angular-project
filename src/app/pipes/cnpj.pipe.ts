import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cnpj'
})
export class CnpjPipe implements PipeTransform {

  transform(val: string): string {
    let contentFormmated = val;
    if (val.length === 14) {
      contentFormmated = val.substr(0, 2) + '.' +
        val.substr(2, 3) + '.' +
        val.substr(5, 3) + '/' +
        val.substr(8, 4) + '-' +
        val.substr(12, 2);
    } else if(val.length == 15){
      contentFormmated = val.substr(0, 3) + '.' +
        val.substr(3, 3) + '.' +
        val.substr(6, 3) + '/' +
        val.substr(9, 4) + '-' +
        val.substr(13, 2);
    }
    return contentFormmated;
  }

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

}
