import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirebasePage } from './firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


var configFirebase = {
    apiKey: "AIzaSyA6lCRlfZ8KIKUpRyjdBZCZDRCUwzy39AI",
    authDomain: "palestra-unitins.firebaseapp.com",
    databaseURL: "https://palestra-unitins.firebaseio.com",
    projectId: "palestra-unitins",
    storageBucket: "palestra-unitins.appspot.com",
    messagingSenderId: "939436484134"
  };


@NgModule({
  declarations: [
    FirebasePage,
  ],
  imports: [
	IonicPageModule.forChild(FirebasePage),
	AngularFireModule.initializeApp(configFirebase),
	AngularFireDatabaseModule
  ],
})

export class FirebasePageModule {}
