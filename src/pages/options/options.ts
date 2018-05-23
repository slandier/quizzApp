import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
})
export class OptionsPage {
  buttons = [
    {title: 'Niveau', options:['facile', 'moyen', 'difficile'] },
    {title: 'Thème',options:['n\'importe', 'sport', 'culture générale'] },
    {title: 'Effets', options:['sons et vibrations', 'vibration', 'aucun'] }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OptionsPage');
  }

  // changeOption() {

  // }



}
