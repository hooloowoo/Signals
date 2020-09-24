import { NavController,NavParams } from 'ionic-angular';
import { Signal } from '../ts/signal';
import {SignalSelector} from "./SignalSelector";
import {TranslateService} from "@ngx-translate/core";

export class HuLightSignal extends Signal {

    isDistantVisible=false;
    isMainVisible=false;

    disttyp="THREEASPECT";

    state="on";
    diststate="on";

    nextStopStyle="selectedButton";
    nextMaxStyle="";
    nextSlowStyle="";

    mainStopStyle="selectedButton";
    mainMaxStyle="";
    mainSlowStyle="";
    mainSlow2Style="";
    mainCallsignStyle="";

    isDistWarnPlateVisible=false;

    constructor(public navCtrl: NavController,navParams : NavParams, public signalSelector : SignalSelector,public translate : TranslateService) {
        super(navCtrl,navParams,signalSelector,translate);
        this.typ=navParams.data.typ.typ;
        this.subtyp=navParams.data.typ.subtyp;
        this.state=navParams.data.typ.state;
        if (this.state === undefined) this.state="on";
        this.disttyp=navParams.data.typ.disttyp;
        this.diststate=navParams.data.typ.diststate;
        this.isDistWarnPlateVisible=(this.typ == "DISTANT");
        if (this.diststate === undefined) this.diststate="on";
    }



}
