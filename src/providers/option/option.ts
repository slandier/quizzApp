import { Injectable } from '@angular/core';
import { indexOption } from '../../models/indexOption.inerface';


@Injectable()
export class OptionProvider {
  private CurrentLevel:string;
  private CurrentTheme:string;
  private CurrentEffect:string;
  indexSave:indexOption = {indexCurrentLevel : 0, indexCurrentTheme : 0, indexCurrentEffect : 0};

  constructor() { }

saveIndex(key: string, value: number) {
  return this.indexSave[key] = value;
}

getIndex(): Object {
  return this.indexSave;
}

saveOptions(categoryOption: string, value: string):void {
  const _this = this;
  for (let i in this.indexSave) {
    if (i === categoryOption) {
      _this[categoryOption.slice(5)] = value;
    }
  }
}

  getCurrentLevel():string {
    return this.CurrentLevel;
  }

  getCurrentTheme():string {
    return this.CurrentTheme;
  }

  getCurrentEffect():string {
    return this.CurrentEffect;
  }



}
