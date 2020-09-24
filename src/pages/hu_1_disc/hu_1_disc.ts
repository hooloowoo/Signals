import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {
    darkState,
    xdarkState,
    verticalArmState,
    lightRedWhite,
    lightNoneWhite,
    nextTopArmState, discState,distDiscState, lightGreenWhite, nextLightRedWhite
} from '../../assets/ts/animations';
import { HuFormMainAndDistSignal } from '../../assets/ts/HuFormMainAndDistSignal';
import {SignalSelector} from "../../assets/ts/SignalSelector";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'page-hu_1_disc',
  templateUrl: 'hu_1_disc.html',
  animations: [darkState,xdarkState,nextTopArmState,nextLightRedWhite, discState,distDiscState,lightGreenWhite,verticalArmState,lightRedWhite,lightNoneWhite]})
export class Hu1DiscPage extends HuFormMainAndDistSignal {


  constructor(public navCtrl: NavController,navParams : NavParams, signalSelector : SignalSelector,public translate : TranslateService) {
    super(navCtrl,navParams,signalSelector,translate);
      let typ=this.navParams.data.typ;
      this.isDistantVisible=(typ.typ == "DISTANT");
      if (typ.typ == "DISTANT") this.avmax();



  }

}



