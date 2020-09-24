import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { darkState,xdarkState,topArmState,prismState,distPlateState,distPrismState,distArmState,distPrism3State,verticalArmState,lightRedGreen,nextLightRedGreen,nextLightNoneGreen,lightNoneGreen,lightYellowGreen,distLightNoneGreen,nextPrismState,nextTopArmState,nextVerticalArmState} from '../../assets/ts/animations';
import { HuFormMainAndDistSignal } from '../../assets/ts/HuFormMainAndDistSignal';
import {SignalSelector} from "../../assets/ts/SignalSelector";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'page-hu_6_entry',
  templateUrl: 'hu_6_entry.html',
  animations: [darkState,xdarkState,topArmState,prismState,distPlateState,distArmState,distPrismState,distPrism3State,verticalArmState,nextLightRedGreen,nextLightNoneGreen,lightRedGreen,lightNoneGreen,lightYellowGreen,distLightNoneGreen,nextPrismState,nextTopArmState,nextVerticalArmState]})
export class Hu6EntryPage extends HuFormMainAndDistSignal {

    mainmastimage="huentrymast_redtbl";
    distmastimage="hudistmast_y";
    prismimage="mprismhu";
    mainmastplate="entrymasthu_plate";
    distmastplate="hudistmastplate_y";
    isProtection=false;

  constructor(public navCtrl: NavController,navParams : NavParams, signalSelector : SignalSelector,public translate : TranslateService) {
    super(navCtrl,navParams,signalSelector,translate);
    let typ=this.navParams.data.typ;

    this.isProtection=(typ.typ == "PROTECTION" || typ.subtyp == "PROTECTION");
    this.isMainVisible=((typ.typ == "PROTECTION") || (typ.typ == "ENTRY") || (typ.typ == "EXIT"));
    this.isDistantVisible=((typ.typ == "DISTANT") || (typ.typ == "ENTRY"));

    this.mainmastimage=(this.isProtection ? "humainmast_redtbl" : "huentrymast_redtbl");
    this.prismimage=(this.isProtection ? "mprismhu_y" : "mprismhu");
    this.distmastimage=(this.isProtection ? "hudistmast_py" : "hudistmast_y");
    this.mainmastplate=(this.isProtection ? "masthu_plate" : "entrymasthu_plate");
    this.distmastplate=(this.isProtection ? "hudistmastplate_py" : "hudistmastplate_y");
    if (typ.typ == "DISTANT") this.avmax();
  }

}



