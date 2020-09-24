import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { darkState,xdarkState,topArmState,prismState,distPlateState,distPrismState,distArmState,distPrism3State,verticalArmState,lightRedGreen,nextLightRedGreen,nextLightNoneGreen,lightNoneGreen,lightYellowGreen,distLightNoneGreen,nextPrismState,nextTopArmState,nextVerticalArmState} from '../../assets/ts/animations';
import { HuFormMainAndDistSignal } from '../../assets/ts/HuFormMainAndDistSignal';
import {SignalSelector} from "../../assets/ts/SignalSelector";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'page-hu_2_entry',
  templateUrl: 'hu_2_entry.html',
  animations: [darkState,xdarkState,topArmState,prismState,distPlateState,distArmState,distPrismState,distPrism3State,verticalArmState,nextLightRedGreen,nextLightNoneGreen,lightRedGreen,lightNoneGreen,lightYellowGreen,distLightNoneGreen,nextPrismState,nextTopArmState,nextVerticalArmState]})
export class Hu2EntryPage extends HuFormMainAndDistSignal {

  constructor(public navCtrl: NavController,navParams : NavParams, signalSelector : SignalSelector,public translate : TranslateService) {
    super(navCtrl,navParams,signalSelector,translate);
    let typ=this.navParams.data.typ;
    this.isMainVisible=((typ.typ == "PROTECTION") || (typ.typ == "ENTRY") || (typ.typ == "EXIT"));
    this.isDistantVisible=((typ.typ == "DISTANT") || (typ.typ == "ENTRY"));
    if (typ.typ == "DISTANT") this.avmax();

  }

}



