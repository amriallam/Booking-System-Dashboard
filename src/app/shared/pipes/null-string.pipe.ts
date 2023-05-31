import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullString'
})
export class NullStringPipe implements PipeTransform {

  transform(value: any): any {
    if (typeof value === 'undefined' || value === null) {
      return "None";
    }
    return value;
  }

}
