import { Injectable } from '@angular/core';

/*
  Generated class for the OptionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OptionProvider {
  indexSave =
  {
    indexCurrentLevel : 0,
    indexCurrentTheme : 0,
    indexCurrentEffect : 0
  };

  constructor() { }

  saveIndex(key:string, value:number) {
    return this.indexSave[key] = value;
   }

  getIndex() {
    return this.indexSave;
  }
  

}
