import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QtoaProvider } from '../../providers/qtoa/qtoa';
import { ScorePage } from '../score/score';


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
  hide_button = true;
  goodAnswer = 0;
  sticker = 0;
  score_button = false;
  hide_footer = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public qtoaProvider: QtoaProvider) {
  }
  
  scorePage(){
    this.navCtrl.push(ScorePage);
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

  clickOnTrue(){
    this.hide_button = false;
    if (this.quizz['bool'] === true){
      this.goodAnswer = 1;
      this.sticker = 1;
      this.score = this.score + 1;
      this.qtoaProvider.score = this.score;
    }else{
      this.goodAnswer = 2;
      this.sticker = 2;
      this.apples = this.apples - 1;
    }
    if(this.base_questions.length === this.qtoaProvider.getQuestions().length - 4){
    this.endOfGame();
    }
  }

  clickOnFalse(){
    this.hide_button = false;
    if (this.quizz['bool'] === false){
      this.goodAnswer = 1;
      this.sticker = 2;
      this.score = this.score + 1;
      this.qtoaProvider.score = this.score;

    }else{
      this.goodAnswer = 2;
      this.sticker = 1;
      this.apples = this.apples - 1;
    }
    if(this.base_questions.length === this.qtoaProvider.getQuestions().length - 4){
    this.endOfGame();
    }
  }

  endOfGame(){
      this.score_button = true;
      this.hide_footer = true;
  }
  
  resetQuizz() {
    let nb = Math.floor(Math.random()*this.base_questions.length);
    this.quizz = this.base_questions[nb];
    return this.quizz;
  }

  clickOnNext(){
    this.goodAnswer = 0;
    this.sticker = 0;
    this.hide_button = true;
    if(this.base_questions.length === this.qtoaProvider.getQuestions().length) {
      this.base_questions = this.qtoaProvider.getQuestions().filter(q => q.question !== this.quizz['question'] );
      this.resetQuizz();
    }
    //else if (this.base_questions.length === this.qtoaProvider.getQuestions().length - 4){
    //   this.score_button = true;
    // }
    else{
      this.base_questions = this.base_questions.filter(q => q.question !== this.quizz['question'] );
      this.resetQuizz();
    }
    // console.log(this.base_questions);
    // console.log(this.resetQuizz());
    //problème du tableau qui se réinitialise
  }




}