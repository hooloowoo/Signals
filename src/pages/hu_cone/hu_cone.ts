import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {
    darkState,
    xdarkState,
    lightRedWhite,
    lightRedGreen,
    discMoveState,
} from '../../assets/ts/animations';
import { HuFormMainAndDistSignal } from '../../assets/ts/HuFormMainAndDistSignal';
import {SignalSelector} from "../../assets/ts/SignalSelector";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'page-hu_cone',
  templateUrl: 'hu_cone.html',
  animations: [darkState,xdarkState, discMoveState,lightRedGreen,lightRedWhite]})
export class HuConePage extends HuFormMainAndDistSignal {

    isWhiteLight=false;
    coneimage="hudistmast3";

  constructor(public navCtrl: NavController,navParams : NavParams, signalSelector : SignalSelector,public translate : TranslateService) {
    super(navCtrl,navParams,signalSelector,translate);
      let typ=this.navParams.data.typ;
      let year=this.navParams.data.year;
      this.isDistantVisible=(typ.typ == "DISTANT");
      this.isWhiteLight=(year < 1939);
      this.coneimage=(year >= 1967 ? "hudistmast4" : "hudistmast3");
      if (typ.typ == "DISTANT") this.avmax();
  }

}



