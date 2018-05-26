import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QtoaProvider } from '../../providers/qtoa/qtoa';
import { ScorePage } from '../score/score';
import { AlertController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {
  base_questions = this.qtoaProvider.getQuestions();
  quizz= {};
  score = this.qtoaProvider.score = 0;
  apples = 3;
  jokers = 2;
  hide_button = true; // cacher btn "suivant"
  goodAnswer = 0; // changer couleur q° + texte "bravo.." OU "dommage.."
  sticker = 0; // afficher sticker "vrai" ou "faux"
  score_button = false;
  hide_footer = false;
  notAnswer = false; // afficher txt joker
  constructor(public navCtrl: NavController, public navParams: NavParams, public qtoaProvider: QtoaProvider,
  private alertCtrl: AlertController) { }

  //redirection vers page score
  scorePage(){
    this.navCtrl.push(ScorePage);
  }

  ionViewDidLoad() {
   this.qtoaProvider.setQuizz();
   this.quizz = this.qtoaProvider.quizz;
  }

  ionViewDidEnter(){
    this.hide_button = true;
    this.goodAnswer = 0;
  }

  //paramètres à changer selon le résultat de la question
  rightAnswer(){
    this.goodAnswer = 1;
    this.sticker = 1;
    this.score = this.score + 1;
    this.qtoaProvider.score = this.score;
  }

  wrongAnswer(){
    this.goodAnswer = 2;
    this.sticker = 2;
    this.apples --;
  }

  answer(){
    this.notAnswer = true;
    this.hide_button = false;
    this.sticker = 2;
    this.goodAnswer = 3;
  }

  //clic sur le bouton vrai
  clickOnTrue(){
    this.hide_button = false;
    if (this.quizz['bool'] === true){
      this.rightAnswer();
    }else{
      this.wrongAnswer();
    }
    this.noMoreQuestion();
  }

  //clic sur le bouton faux
  clickOnFalse(){
    this.hide_button = false;
    if (this.quizz['bool'] === false){
      this.rightAnswer();
    }else{
      this.wrongAnswer();
    }
    this.noMoreQuestion();
  }

  //s'il reste plus de questions
  noMoreQuestion(){
    if(this.base_questions.length === this.qtoaProvider.getQuestions().length - 4){
      this.endOfGame();
    }
  }

  //affichage du footer de fin de partie
  endOfGame(){
    this.score_button = true;
    this.hide_footer = true;
  }

  //fonctions d'affichage de la liste de question
  resetQuizz() {
    let nb = Math.floor(Math.random()*this.base_questions.length);
    this.quizz = this.base_questions[nb];
    return this.quizz;
  }
  clickOnNext(){
    this.goodAnswer = 0;
    this.sticker = 0;
    this.hide_button = true;
    this.notAnswer = false;

    if(this.base_questions.length === this.qtoaProvider.getQuestions().length) {
      this.base_questions = this.qtoaProvider.getQuestions().filter(q => q.question !== this.quizz['question'] );
      this.resetQuizz();
    }else{
      this.base_questions = this.base_questions.filter(q => q.question !== this.quizz['question'] );
      this.resetQuizz();
    }
  }

  //fonctions de gestion des jokers
  clickOnJoker(){
    this.jokers--;
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
          this.clickOnJoker();
        }
      },
      'NON'
    ]
  });
  alert.present();
  }

  clickOnImg(){
      this.showAlert();
    }


}
