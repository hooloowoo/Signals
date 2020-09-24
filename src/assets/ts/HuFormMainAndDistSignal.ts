import { NavController,NavParams } from 'ionic-angular';
import { Signal } from '../ts/signal';
import {SignalSelector} from "./SignalSelector";
import {TranslateService} from "@ngx-translate/core";

export class HuFormMainAndDistSignal extends Signal {

    isDistantVisible=false;
    isMainVisible=false;

    isDistWarnPlateVisible=false;

    isSecondArmVisible=false;
    isThirdArmVisible=false;
    isDistArmVisible=false;

    disttyp="THREEASPECT";
    
    armMainTop="on";
    armMainSecond="on";
    armMainThird="on";

    distPlate="on";
    distArm="on";

    nextArmMainTop="on";
    nextArmMainSecond="on";

    state="on";
    diststate="on";

	nextStopStyle="selectedButton";
	nextMaxStyle="";
	nextSlowStyle="";

	mainStopStyle="selectedButton";
	mainMaxStyle="";
	mainSlowStyle="";
	mainSlow2Style="";


    constructor(public navCtrl: NavController,navParams : NavParams, public signalSelector : SignalSelector,public translate : TranslateService) {
        super(navCtrl,navParams,signalSelector,translate);
        this.typ=navParams.data.typ.typ;
        this.subtyp=navParams.data.typ.subtyp;
        this.state=navParams.data.typ.state;
        if (this.state === undefined) this.state="on";
        this.disttyp=navParams.data.typ.disttyp;
        this.diststate=navParams.data.typ.diststate;
        if (this.diststate === undefined) this.diststate="on";
        this.isDistWarnPlateVisible=(this.typ == "DISTANT");
        this.calculate();
    }

    calculate() {

		this.nextStopStyle=(this.diststate == "on" ? "selectedButton" : "");
		this.nextMaxStyle=(this.diststate == "off" ? "selectedButton" : "");
		this.nextSlowStyle=(this.diststate == "slow" ? "selectedButton" : "");


		this.mainStopStyle=(this.state == "on" ? "selectedButton" : "");
		this.mainMaxStyle=(this.state == "off" ? "selectedButton" : "");
		this.mainSlowStyle=(this.state == "slow" ? "selectedButton" : "");
		this.mainSlow2Style=(this.state == "slow2" ? "selectedButton" : "");


        this.isSecondArmVisible=((this.subtyp == "THREEASPECT") || (this.subtyp == "FOURASPECT"));

        this.isThirdArmVisible=(this.subtyp == "FOURASPECT");

        this.isDistArmVisible=(this.disttyp == "THREEASPECT");
        switch(this.state) {
            case "off":
                this.armMainTop="off";
                this.armMainSecond="on";
                this.armMainThird="on";
                break;
            case "slow":
                this.armMainTop="off";
                this.armMainSecond="off";
                this.armMainThird="on";
                break;
            case "slow2":
                this.armMainTop="off";
                this.armMainSecond="off";
                this.armMainThird="off";
                break;
            default:
                this.armMainTop="on";
                this.armMainSecond="on";
                this.armMainThird="on";
        }
        switch(this.diststate) {
            case "off":
                this.nextArmMainTop="off";
			    this.nextArmMainSecond="on";
                this.distPlate=(this.state == "on" ? "on" : "off");
                this.distArm="on";
                break;
            case "slow":
                this.nextArmMainTop="off";
			    this.nextArmMainSecond="off";
                this.distPlate="on";
                this.distArm=(this.state == "on" ? "on" : "off");
                break;
            default:
                this.nextArmMainTop="on";
			    this.nextArmMainSecond="on";
                this.distPlate="on";
                this.distArm="on";
        }
    }

    astop() {
        this.state="on";
        this.calculate();
    }

    avmax() {
        this.state="off";
        this.calculate();
    }

    aslow() {
        this.state="slow";
        this.calculate();
    }

    aslow2() {
        this.state="slow2";
        this.calculate();
    }

    nxstop() {
        this.diststate="on";
        this.calculate();
    }

    nxvmax() {
        this.diststate="off";
        this.calculate();
    }

    nxslow() {
        this.diststate="slow";
        this.calculate();
    }



}
