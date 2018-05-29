import { Injectable } from '@angular/core';
import { OptionProvider } from '../option/option';

@Injectable()
export class QtoaProvider {
  theme;
  quizz = {};
  current_nb : number;
  questionsFilter = [];
  noFilterquestions = [
    {
      question: "Paris est la capitale française ",
      bool: true,
      answer: "La capitale est bien Paris!",
      moreInfo: "Jusqu'en 1194, la capitale française était Lyon!",
      theme:'culture generale'
    },
    {
      question: "New york est la capitale des USA",
      bool: false,
      answer: "La capitale est Washington DC.",
      moreInfo: "Le nom de la capitale a été empruntée au premier président des Etats-Unis.",
      theme:'culture generale'

    },
    {
      question: "2New york est la capitale des USA ",
      bool: false,
      answer: "La capitale est Washington DC.",
      moreInfo: "Le nom de la capitale a été empruntée au premier président des Etats-Unis.",
      theme:'culture generale'

    },
    {
      question: "3New york est la capitale des USA ",
      bool: false,
      answer: "La capitale est Washington DC.",
      moreInfo: "Le nom de la capitale a été empruntée au premier président des Etats-Unis.",
      theme:'culture generale'

    },
    {
      question: "4New york est la capitale des USA ",
      bool: false,
      answer: "La capitale est Washington DC.",
      moreInfo: "Le nom de la capitale a été empruntée au premier président des Etats-Unis.",
      theme:'culture generale'

    },
    {
      question: "5New york est la capitale des USA ",
      bool: false,
      answer: "La capitale est Washington DC.",
      moreInfo: "Le nom de la capitale a été empruntée au premier président des Etats-Unis.",
      theme:'culture generale'

    },
    {
      question: "le club de paris se nomme PSG",
      bool: true,
      answer: "Le paris saint germain plus precisemment",
      moreInfo: "club créer en 1970",
      theme:'sport'
    },
    {
      question: "le club de marseille se nomme OM",
      bool: true,
      answer: "L' olympique de marseille plus precisemment",
      moreInfo: "club créer en 1899",
      theme:'sport'
    }

  ];

  score: number;

  constructor(private optionProvider:OptionProvider) { }

  filter(){
     this.theme = this.optionProvider.getCurrentTheme();
     if(this.theme !== 'tous') {
     this.questionsFilter = this.noFilterquestions.filter(q => q.theme === this.theme);
    }
  }

  setQuizz() {
    this.filter();
    this.current_nb = Math.floor(Math.random()*this.questionsFilter.length);
    this.quizz = this.questionsFilter.length === 0 ? this.noFilterquestions[this.current_nb] : this.questionsFilter[this.current_nb]
    return this.quizz;
  }

  getQuestions(){
    return this.questionsFilter.length === 0 ? this.noFilterquestions : this.questionsFilter ;
  }


}
