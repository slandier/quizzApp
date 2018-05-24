import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QtoaProvider } from '../../providers/qtoa/qtoa';

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {
  quizz = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public qtoaProvider: QtoaProvider) {
  }

  ionViewDidLoad() {
   this.qtoaProvider.setQuizz();
   this.quizz = this.qtoaProvider.quizz;
  }

  
 

}
