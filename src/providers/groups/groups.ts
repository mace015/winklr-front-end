import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GroupsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GroupsProvider {

  groups: Array<{ id: number, name: string }> = [];

  constructor(public http: Http) {
    this.groups.push({ id: 1, name: 'Moodles' });
    this.groups.push({ id: 2, name: 'Drogerij 28' });
    this.groups.push({ id: 3, name: 'Nolenslaan 12' });
    this.groups.push({ id: 4, name: 'Hoofdweg 70' });
  }

  getGroups() {
    return this.groups;
  }

}
