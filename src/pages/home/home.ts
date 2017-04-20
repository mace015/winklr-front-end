import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GroupsProvider } from '../../providers/groups/groups';
import { GroupPage } from '../group/group';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  groups: Array<{ name: string }> = [];

  constructor(public navCtrl: NavController, public Groups: GroupsProvider) {
	  this.groups = Groups.getGroups();
  }

  openGroup(group) {
	  this.navCtrl.push(GroupPage, { group });
  }

  logout() {
    this.navCtrl.setRoot(LoginPage);
  }

}
