import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRecords'
})
export class FilterRecordsPipe implements PipeTransform {
debugger
  transform(value: any, args?: any): any {
    const uniqueArray = value.filter( (el, index, array) => {
      return array.indexOf (el) === index;
    });

    return uniqueArray;
  }

}
