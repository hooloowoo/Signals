import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Hu1EntryPage } from '../pages/hu_1_entry/hu_1_entry';
import { Hu2EntryPage } from '../pages/hu_2_entry/hu_2_entry';
import {SignalSelector} from "../assets/ts/SignalSelector";
import {Hu3EntryPage} from "../pages/hu_3_entry/hu_3_entry";
import {Hu3BlockPage} from "../pages/hu_3_block/hu_3_block";
import {Hu4EntryPage} from "../pages/hu_4_entry/hu_4_entry";
import {Hu5EntryPage} from "../pages/hu_5_entry/hu_5_entry";
import {Hu6EntryPage} from "../pages/hu_6_entry/hu_6_entry";
import {HuShuntPage} from "../pages/hu_shunt/hu_shunt";
import {Hu1PlatePage} from "../pages/hu_1_plate/hu_1_plate";
import {Hu1DiscPage} from "../pages/hu_1_disc/hu_1_disc";
import {HuConePage} from "../pages/hu_cone/hu_cone";
import {Hu1LightPage} from "../pages/hu_1_light/hu_1_light";
import {Hu2LightPage} from "../pages/hu_2_light/hu_2_light";
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {Http, HttpModule} from "@angular/http";

export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Hu1EntryPage,
    Hu1PlatePage,
    Hu1DiscPage,
    Hu2EntryPage,
    Hu3EntryPage,
    Hu3BlockPage,
    Hu4EntryPage,
    Hu5EntryPage,
    Hu6EntryPage,
    HuConePage,
    HuShuntPage,
    Hu1LightPage,
    Hu2LightPage
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Hu1EntryPage,
    Hu1PlatePage,
    Hu1DiscPage,
    Hu2EntryPage,
    Hu3EntryPage,
    Hu3BlockPage,
    Hu4EntryPage,
    Hu5EntryPage,
    Hu6EntryPage,
    HuConePage,
    HuShuntPage,
    Hu1LightPage,
    Hu2LightPage
  ],
  providers: [
    StatusBar,
    SignalSelector,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
