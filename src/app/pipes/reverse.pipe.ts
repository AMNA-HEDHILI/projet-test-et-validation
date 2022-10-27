import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(ch :any): any {
    // traitement de la fonction
    let res = "";
    for (let i = 0; i < ch.length; i++) {
      res = ch[i] + res
    }
    return res;
  }

}
