import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { darkState,xdarkState,topArmState,prismState,verticalArmState,lightRedWhite,lightNoneWhite} from '../../assets/ts/animations';
import { HuFormMainAndDistSignal } from '../../assets/ts/HuFormMainAndDistSignal';
import {SignalSelector} from "../../assets/ts/SignalSelector";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'page-hu_1_entry',
  templateUrl: 'hu_1_entry.html',
  animations: [darkState,xdarkState,topArmState,prismState,verticalArmState,lightRedWhite,lightNoneWhite]})
export class Hu1EntryPage extends HuFormMainAndDistSignal {

  constructor(public navCtrl: NavController,navParams : NavParams, signalSelector : SignalSelector,public translate : TranslateService) {
    super(navCtrl,navParams,signalSelector,translate);
      this.isMainVisible=true;
      this.isDistantVisible=false;
  }

}



