import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OptionsPage } from '../pages/options/options';
import { QuestionPage } from '../pages/question/question';
import { QtoaProvider } from '../providers/qtoa/qtoa';
import { OptionProvider } from '../providers/option/option';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OptionsPage,
    QuestionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OptionsPage,
    QuestionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QtoaProvider,
    OptionProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
