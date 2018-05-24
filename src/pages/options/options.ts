import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OptionProvider } from '../../providers/option/option';


@IonicPage()
@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
})
export class OptionsPage {
  index = {
  indexCurrentLevel : 0,
  indexCurrentTheme : 0,
  indexCurrentEffect : 0
  };

  buttons = [
    {title: 'Niveau', options:['facile', 'moyen', 'difficile'] },
    {title: 'Thème',options:['n\'importe', 'sport', 'culture générale'] },
    {title: 'Effets', options:['sons et vibrations', 'vibration', 'aucun'] }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private optionProvider:OptionProvider) { }

  ionViewDidLoad() {
    Object.assign(this.index,this.optionProvider.getIndex())
  }


  changeOption(optionSelected: string[], option) {
   const keyname = Object.keys(option).toString();
   if (this.index[keyname] < optionSelected.length -1) {
     this.index[keyname] ++;
    this.optionProvider.saveIndex(keyname, this.index[keyname])
   }
   else {
    this.index[keyname] = 0;
    this.optionProvider.saveIndex(keyname, this.index[keyname]);
   }
  }







}
