import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QtoaProvider } from '../../providers/qtoa/qtoa';
import { AlertController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {
  base_questions = this.qtoaProvider.getQuestions();
  current_questions: any[] = [];
  quizz= {};
  score = 0;
  apples = 3;
  jokers = 2;
  hide_button = true;
  goodAnswer = 0;
  sticker = 0;
  notAnswer = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public qtoaProvider: QtoaProvider,
  private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
   this.qtoaProvider.setQuizz();
   this.quizz = this.qtoaProvider.quizz;
  }
  ionViewDidEnter(){
    this.apples = 3;
    this.jokers = 2;
    this.hide_button = true;
    this.goodAnswer = 0;
  }

  clickOnJoker(){
    this.jokers = this.jokers - 1;
    return this.jokers;
  }
  //ajouter traitement des vies
  clickOnTrue(){
    this.hide_button = false;
    if (this.quizz['bool'] === true){
      this.goodAnswer = 1;
      this.sticker = 1;
      this.score = this.score + 1;
    }else{
      this.goodAnswer = 2;
      this.sticker = 2;
      this.apples = this.apples - 1;
    }
  }

  clickOnFalse(){
    this.hide_button = false;
    if (this.quizz['bool'] === false){
      this.goodAnswer = 1;
      this.sticker = 2;
      this.score = this.score + 1;
    }else{
      this.goodAnswer = 2;
      this.sticker = 1;
      this.apples = this.apples - 1;
    }
  }
  resetQuizz() {
    let nb = Math.floor(Math.random()*this.current_questions.length);
    this.quizz = this.current_questions[nb];
    return this.quizz;
  }

  clickOnNext(){
    this.hide_button = false;
    this.goodAnswer = 0;
    this.sticker = 0;
    this.notAnswer = false;
    if(this.base_questions.length === this.qtoaProvider.getQuestions().length) {
      this.current_questions = this.base_questions.filter(q => q.question !== this.quizz['question'] );
    }else{
      this.current_questions = this.current_questions.filter(q => q.question !== this.quizz['question'] );
    }
    console.log(this.current_questions);
    console.log(this.resetQuizz());
    //problème du tableau qui se réinitialise
  }
  private showAlert(){
  let alert =this.alertCtrl.create({
    title:'Passer cette question',
    buttons: [
      {
        text: 'OUI',
        role: 'cancel',
        handler: () => {
          this.answer();
        }
      },
      'NON'
    ]
  });
  alert.present();
  console.log(alert.title)

}

clickOnImg(){
    this.showAlert();
  }
answer(){
  this.notAnswer = true;
  this.hide_button = false;
  this.sticker = 2;
  this.goodAnswer = 3;
}


}
