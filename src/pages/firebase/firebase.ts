import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the FirebasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-firebase',
	templateUrl: 'firebase.html',
})
export class FirebasePage {

	item: any;
	public itemsRef: AngularFireList<any>;
	public items: Observable<any[]>;
	constructor(public navCtrl: NavController, public db: AngularFireDatabase, public toastCtrl: ToastController) {
		this.itemsRef = db.list('/list');
		
		this.items = this.itemsRef.snapshotChanges().map(changes => {
			return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
		});
		this.item = { nome: '' };
	}


	ionViewDidLoad() {
		console.log('ionViewDidLoad FirebasePage');
	}

	insert() {
		this.itemsRef.push(this.item).then(() => {
			let toast = this.toastCtrl.create({
				message: 'Alterações realizadas com sucesso!',
				duration: 3000,
				position: 'top'
			});
			toast.present();
			this.item = { nome: '' };
		});
	}

	remover(item: any) {
		console.log(item);
		this.itemsRef.remove(item).then(() => {
			let toast = this.toastCtrl.create({
				message: 'Item removido com sucesso!',
				duration: 3000,
				position: 'top'
			});
		}).catch(() => {
			let toast = this.toastCtrl.create({
				message: 'Ocorreu um erro!',
				duration: 3000,
				position: 'top'
			});
		});

	}
}
