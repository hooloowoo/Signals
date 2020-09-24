import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { darkState, xdarkState, lightBlueWhite, plateState,prismState} from '../../assets/ts/animations';
import { HuFormMainAndDistSignal } from '../../assets/ts/HuFormMainAndDistSignal';
import { SignalSelector} from "../../assets/ts/SignalSelector";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'page-hu_shunt',
  templateUrl: 'hu_shunt.html',
  animations: [darkState,xdarkState,lightBlueWhite,plateState,prismState]})
export class HuShuntPage extends HuFormMainAndDistSignal {

    mainmastimage="hudistmast_bs";
    isMastPlateVisible=false;
    isPlateVisible=false;
    plateimage="shuntplate";

    constructor(public navCtrl: NavController,navParams : NavParams, signalSelector : SignalSelector,public translate : TranslateService) {
        super(navCtrl,navParams,signalSelector,translate);
        let typ=this.navParams.data.typ;
        let year=this.navParams.data.year;
        if (year < 1967) this.mainmastimage="hudistmast_bs";
        else if (year < 1982) this.mainmastimage="hushuntmast_blue";
        else this.mainmastimage="hudistmast_tbl";
        this.isMastPlateVisible=(year >= 1982);
        this.isPlateVisible=(year >= 2003);
        if (year >= 2003) this.plateimage="shuntplate_lr";
        else this.plateimage="shuntplate";
    }
}



