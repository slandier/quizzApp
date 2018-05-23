import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {

  questions = [
    {
      question: "Paris est la capitale française ",
      bool: true,
      answer: "La capitale est bien Paris!",
      moreInfo: "Jusqu'en 1194, la capitale française était Lyon!"
    },
    {
      question: "New york est la capitale des USA",
      bool: false,
      answer: "La capitale est Washington DC.",
      moreInfo: "Le nom de la capitale a été empruntée au premier président des Etats-Unis."
    },
    {
      question: "2New york est la capitale des USA ",
      bool: false,
      answer: "La capitale est Washington DC.",
      moreInfo: "Le nom de la capitale a été empruntée au premier président des Etats-Unis."
    },
    {
      question: "3New york est la capitale des USA ",
      bool: false,
      answer: "La capitale est Washington DC.",
      moreInfo: "Le nom de la capitale a été empruntée au premier président des Etats-Unis."
    },
    {
      question: "4New york est la capitale des USA ",
      bool: false,
      answer: "La capitale est Washington DC.",
      moreInfo: "Le nom de la capitale a été empruntée au premier président des Etats-Unis."
    },
    {
      question: "5New york est la capitale des USA ",
      bool: false,
      answer: "La capitale est Washington DC.",
      moreInfo: "Le nom de la capitale a été empruntée au premier président des Etats-Unis."
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }

 

}
