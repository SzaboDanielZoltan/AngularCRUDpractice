import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: User[], filter: string = '', prop: string = 'name'): any {
    if (prop === "name") {
      return array.filter(user =>
        (user[prop].first.toLowerCase().indexOf(filter.toLowerCase()) > -1)
        ||
        (user[prop].last.toLowerCase().indexOf(filter.toLowerCase()) > -1));
    } else if (prop === "id" || "age") {
      return array.filter(user => user[prop].toString().toLowerCase().indexOf(filter.toLowerCase()) > -1);
    }
    return array.filter(user => user[prop].toLowerCase().indexOf(filter.toLowerCase()) > -1);
  }

}
