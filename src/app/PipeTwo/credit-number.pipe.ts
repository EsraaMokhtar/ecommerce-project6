import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CreditNumber'
})

export class CreditNumber implements PipeTransform {

  transform(value: string): string{
    var first = value.substr(0,4);
    var middle = value.substr(4,4);
    var last = value.substr(8,4);
    var credit = `${first}-${middle}-${last}`
    return credit;
  }

}

