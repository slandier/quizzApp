import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionPage } from '../question/question';
import { OptionsPage } from '../options/options';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  jouer(){
    this.navCtrl.push(QuestionPage);
  }
  option(){
    this.navCtrl.push(OptionsPage);

  }

}
