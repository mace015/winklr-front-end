import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ListProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ListProvider {

  list: Array<{ id: number, name: string, done: boolean }> = [];

  constructor(public http: Http) {
    this.list.push({ id: 1, name: 'Grillworst', done: false });
    this.list.push({ id: 2, name: 'Vla', done: false });
    this.list.push({ id: 3, name: 'Hagelslag', done: false });
    this.list.push({ id: 4, name: 'Pepermunt', done: true });
  }

  getList() {
    return this.list;
  }

}
