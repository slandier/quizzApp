import { Injectable } from '@angular/core';

@Injectable()
export class QtoaProvider {
  quizz = {};
  current_nb : number;
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
  score: number;
  constructor() { }


  setQuizz() {
    this.current_nb = Math.floor(Math.random()*this.questions.length);
    this.quizz = this.questions[this.current_nb];
    return this.quizz;
  }

  getQuestions(){
    return this.questions;
  }
  
}
