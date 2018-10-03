import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	user: FormGroup;
  constructor(
    public navCtrl: NavController,
    public FB: FormBuilder) {
  	this.user = FB.group({
      email: ['me@karendacruz.com'],
      password: ['12345678']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signin() {
    this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: "forward"});
  }

}
