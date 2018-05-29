import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QtoaProvider } from '../../providers/qtoa/qtoa';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-score',
  templateUrl: 'score.html',
})
export class ScorePage {
  score = this.qtoaProvider.score;

  constructor(public navCtrl: NavController, public navParams: NavParams, public qtoaProvider: QtoaProvider) {
  }

  replay() {
    this.navCtrl.setRoot(HomePage)
  }

}
