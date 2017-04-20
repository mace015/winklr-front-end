import { Component } from '@angular/core';
import { ActionSheetController, IonicPage, NavController, NavParams } from 'ionic-angular';

import { ListProvider } from '../../providers/list/list';

/**
* Generated class for the GroupPage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
@IonicPage()
@Component({
	selector: 'page-group',
	templateUrl: 'group.html',
	providers: [ListProvider]
})
export class GroupPage {
	
	group: { id: number, name: string };
	list: Array<{ id: number, name: string, done: boolean }> = [];
	newList: string;
	
	constructor(public navCtrl: NavController, public navParams: NavParams, public List: ListProvider, public actionSheetCtrl: ActionSheetController) {
		this.group = this.navParams.get('group');
		this.list = List.getList();
	}

	addList() {
		this.list.push({ id: Math.random(), name: this.newList, done: false });
		this.newList = '';
	}
	
	openAction(item, key) {
		let actionSheet = this.actionSheetCtrl.create({
			title: 'Bewerk ' + item.name,
			buttons: [
			{
				text: (item.done)? 'Niet gekocht' : 'Gekocht',
				handler: () => {
					item.done = !item.done
				}
			},{
				text: 'Verwijder',
				role: 'destructive',
				handler: () => {
					this.list.splice(key, 1);
				}
			},{
				text: 'Cancel',
				role: 'cancel',
				handler: () => {
					
				}
			}
			]
		});
		actionSheet.present();
	}

	openMenu() {
		let actionSheet = this.actionSheetCtrl.create({
			title: 'Actie uitvoeren',
			buttons: [
			{
				text: 'Markeer alle als gekocht',
				handler: () => {
					let length = this.list.length;
					for(let i = 0; i <= length - 1; i++){
						this.list[i].done = true;
					}
				}
			},{
				text: 'Markeer alle als niet gekocht',
				handler: () => {
					let length = this.list.length;
					for(let i = 0; i <= length - 1; i++){
						this.list[i].done = false;
					}
				}
			},{
				text: 'Verwijder alle gekochten',
				role: 'destructive',
				handler: () => {
					this.list = this.list.filter(function(item){
						return !item.done;
					});
				}
			},{
				text: 'Cancel',
				role: 'cancel',
				handler: () => {
					//
				}
			}
			]
		});
		actionSheet.present();
	}
	
}
