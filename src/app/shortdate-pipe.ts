
import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'shortDateFormat'
})
export class ShortDatePipe implements PipeTransform {

  transform(value: any, limit: number, convert) {
    if (limit> 5) {
      return _.lowerCase(value);
    } else {
      return _.upperCase(value);
    }
  }

}
