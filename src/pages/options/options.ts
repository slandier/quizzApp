import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OptionProvider } from '../../providers/option/option';
import { indexOption } from '../../models/indexOption.inerface';
import { buttonOption } from '../../models/buttonOption.interface';


@IonicPage()
@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
})

export class OptionsPage {
  indexOption: indexOption = {
  indexCurrentLevel : 0,
  indexCurrentTheme : 0,
  indexCurrentEffect : 0
  };

  buttonsConfig: buttonOption[] = [
    {title: 'Niveau', options:['facile', 'moyen', 'difficile'] },
    {title: 'Thème',options:['n\'importe', 'sport', 'culture générale'] },
    {title: 'Effets', options:['sons et vibrations', 'vibration', 'aucun'] }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private optionProvider:OptionProvider) { }

  ionViewDidLoad() {
    Object.assign(this.indexOption,this.optionProvider.getIndex())
  }


  changeOption(optionSelected: string[], option) {
   let keyname = Object.keys(option).toString();

   if (this.indexOption[keyname] < optionSelected.length -1) {
     this.indexOption[keyname] ++;
     let optionToSave = optionSelected[this.indexOption[keyname]];
     this.optionProvider.saveOptions(keyname, optionToSave)
     this.optionProvider.saveIndex(keyname, this.indexOption[keyname])
   }
   else {
    this.indexOption[keyname] = 0;
    let optionToSave = optionSelected[0];
    this.optionProvider.saveOptions(keyname, optionToSave)
    this.optionProvider.saveIndex(keyname, this.indexOption[keyname]);
   }
  }



};
