import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {
    darkState,
    xdarkState, lightRed, lightGreen, lightYellow, lightWhite, lightBlue, lightNextYellow, lightNextGreen, lightNextRed
} from '../../assets/ts/animations_light';
import {SignalSelector} from "../../assets/ts/SignalSelector";
import {HuLightSignal} from "../../assets/ts/HuLightSignal";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'page-hu_1_light',
  templateUrl: 'hu_1_light.html',
  animations: [darkState,xdarkState,lightRed,lightGreen,lightYellow,lightNextRed,lightNextGreen,lightNextYellow,lightWhite,lightBlue]})

export class Hu1LightPage extends HuLightSignal {

    mastStyle="mast-light";
    imgMast="lg_12_mast";
    imgMainPlate="";
    imgNextMainPlate="";
    imgDistPlate="";
    imgExtPlate="";
    mainPlateStyle="";
    distPlateStyle="";
    nextMainPlateStyle="";
    extPlateStyle="";

    redStyle="";

    greenStyle="";
    greenSecondStyle="";
    greenThirdStyle="";
    callsignStyle="";
    distYellowStyle="";
    distSecondYellowStyle="";
    distThirdYellowStyle="";
    distGreenStyle="";
    distSecondGreenStyle="";
    distThirdGreenStyle="";

    nextRedStyle="";
    nextGreenStyle="";
    nextGreenSecondStyle="";

    isNextVisible=false;
    isMainThreeAspect=true;
    isMainFourAspect=false;
    isShunt=false;
    isEntry=true;
    isExit=false;
    isProtection=false;
    isMainPlateVisible=true;
    isDistPlateVisible=true;
    isDistThreeAspect=false;
    isExtPlateVisible=false;

    isMainRedLightVisible=false;
    isMainGreenLightVisible=false;
    isMainSecondGreenLightVisible=false;
    isMainThirdGreenLightVisible=false;
    isMainCallsignLightVisible=false;
    isDistYellowLightVisible=false;
    isDistSecondYellowLightVisible=false;
    isDistThirdYellowLightVisible=false;
    isDistGreenLightVisible=false;
    isDistSecondGreenLightVisible=false;
    isDistThirdGreenLightVisible=false;




    mainRed="on";
    mainGreen="off";
    mainGreen2="off";
    mainGreen3="off";
    mainCallsign="off";
    distYellow="off";
    distSlow="off";
    distGreen="off";

    nextRed="on";
    nextGreen="off";
    nextSlow="off";

    year=1939;

    constructor(public navCtrl: NavController,navParams : NavParams, signalSelector : SignalSelector,public translate : TranslateService) {
        super(navCtrl,navParams,signalSelector,translate);
        let typ=this.navParams.data.typ;
        this.year=this.navParams.data.year;
        if (typ.typ == "DISTANT") this.avmax();
        this.calculateLocal(navParams.data);
    }

    calculateAspect() {

        this.nextStopStyle=(this.diststate == "on" ? "selectedButton" : "");
        this.nextMaxStyle=(this.diststate == "off" ? "selectedButton" : "");
        this.nextSlowStyle=(this.diststate == "slow" ? "selectedButton" : "");
        this.mainStopStyle=(this.state == "on" ? "selectedButton" : "");
        this.mainMaxStyle=(this.state == "off" ? "selectedButton" : "");
        this.mainSlowStyle=(this.state == "slow" ? "selectedButton" : "");
        this.mainSlow2Style=(this.state == "slow2" ? "selectedButton" : "");
        this.mainCallsignStyle=(this.state == "callsign" ? "selectedButton" : "");


        switch(this.state) {
            case "off":
                this.mainRed="off";
                this.mainGreen="on";
                this.mainGreen2="off";
                this.mainGreen3="off";
                this.mainCallsign="off";
                break;
            case "slow":
                this.mainRed="off";
                this.mainGreen="on";
                this.mainGreen2="on";
                this.mainGreen3="off";
                this.mainCallsign="off";
                break;
            case "slow2":
                this.mainRed="off";
                this.mainGreen="on";
                this.mainGreen2="on";
                this.mainGreen3="on";
                this.mainCallsign="off";
                break;
            case "callsign":
                this.mainRed="on";
                this.mainGreen="off";
                this.mainGreen2="off";
                this.mainGreen3="off";
                this.mainCallsign="on";
                break;
            default:
                this.mainRed="on";
                this.mainGreen="off";
                this.mainGreen2="off";
                this.mainGreen3="off";
                this.mainCallsign="off";
        }
        if ((this.year < 1947) && (this.state == "on")) {
            this.distYellow = "on";
            this.distSlow = "off";
            this.distGreen = "off";
        } else {
            switch (this.diststate) {
                case "off":
                    this.distYellow = "off";
                    this.distSlow = "off";
                    this.distGreen = ((this.state == "on" || this.state == "callsign") ? "off" : "on");
                    break;
                case "slow":
                    if ((this.state == "on") || (this.state == "callsign")) {
                        this.distYellow = "off";
                        this.distSlow = "off";
                        this.distGreen = "off";
                    } else {
                        this.distYellow = (this.year < 1952 ? "on" : "off");
                        this.distSlow = "on";
                        this.distGreen = (this.year < 1952 ? "off" : "on");
                    }
                    break;
                default:
                    this.distYellow = ((this.state == "on" || this.state == "callsign") ? "off" : "on");
                    this.distSlow = "off";
                    this.distGreen = "off";
            }
        }
        switch (this.diststate) {
            case "off":
                this.nextRed = "off";
                this.nextGreen = "on";
                this.nextSlow = "off";
                break;
            case "slow":
                this.nextRed = "off";
                this.nextGreen = "on";
                this.nextSlow = "on";
                break;
            default:
                this.nextRed = "on";
                this.nextGreen = "off";
                this.nextSlow = "off";
        }


    }


    calculateLocal(params : any) {
        this.isProtection=params.typ.typ=="PROTECTION" || params.typ.subtyp=="PROTECTION";
        this.isMainPlateVisible=params.typ.typ=="ENTRY" || (params.typ.typ != "DISTANT");
        this.isDistPlateVisible=this.isNextVisible=params.typ.typ=="ENTRY" || params.typ.typ=="DISTANT";
        this.isMainRedLightVisible=(params.typ.typ!="SHUNT") && (params.typ.typ!="DISTANT");

        this.isMainThreeAspect=params.typ.subtyp=="THREEASPECT";
        this.isMainFourAspect=params.typ.subtyp=="FOURASPECT";
        this.isEntry=params.typ.typ=="ENTRY";
        this.isShunt=params.typ.typ=="SHUNT";
        this.isExit=params.typ.typ=="EXIT";
        this.isDistThreeAspect=params.typ.disttyp=="THREEASPECT";

        this.isMainGreenLightVisible = this.isMainPlateVisible && (!this.isShunt);
        this.isMainSecondGreenLightVisible = this.isMainPlateVisible && (!this.isShunt) && (this.isMainThreeAspect || this.isMainFourAspect);
        this.isMainThirdGreenLightVisible = this.isMainPlateVisible && (!this.isShunt) && this.isMainFourAspect;

        this.isDistYellowLightVisible = this.isDistPlateVisible;
        this.isDistSecondYellowLightVisible = this.isDistPlateVisible;
        this.isDistGreenLightVisible = this.isDistPlateVisible;
        this.isDistSecondGreenLightVisible = this.isDistPlateVisible;
        this.calculateImages(params);
        this.calculateAspect();


    }


    calculateImages(params : any) {
        this.mastStyle="mast-light";

        if (params.year < 1947) {
            this.imgMast="lg_12_mast";
            if (this.isMainThreeAspect) this.imgMainPlate=(this.isEntry ? "lg_1_plate_entry" : "lg_1_plate_3");
            else if (this.isMainFourAspect) this.imgMainPlate="lg_1_plate_4";
            else if (this.isShunt) this.imgMainPlate="lg_1_plate_shunt";
            else this.imgMainPlate="lg_1_plate2";
            this.imgDistPlate="lg_1_distplate";
            this.imgNextMainPlate=(this.isDistThreeAspect ? "lg_1_plate_3" : "lg_1_plate2");
            this.mainPlateStyle=(this.isEntry ? "main-entry-plate-era2" : "main-plate-era2");
            this.distPlateStyle=(this.isEntry ? "dist-entry-plate-era1" : "dist-plate-era1");
            this.nextMainPlateStyle="main-plate-era2";
            this.isExtPlateVisible=false;
            this.isMainCallsignLightVisible=false;
            this.isDistThirdYellowLightVisible = false;
            this.isDistThirdGreenLightVisible = false;

            this.redStyle=(this.isEntry ? "entry-red-era2" : "red-era2");
            this.greenStyle=(this.isEntry ? "entry-green-era2" : "green-era2");
            this.greenSecondStyle=(this.isEntry ? "entry-green2-era2" : "green2-era2");
            this.greenThirdStyle="green3-era2";

            this.distYellowStyle=(this.isEntry ? "dist-entry-yellow-era1" : "dist-yellow-era1");
            this.distSecondYellowStyle=(this.isEntry ? "dist-entry-yellow2-era1" : "dist-yellow2-era1");
            this.distGreenStyle=(this.isEntry ? "dist-entry-green-era1" : "dist-green-era1");
            this.distSecondGreenStyle=(this.isEntry ? "dist-entry-green2-era1" : "dist-green2-era1");

            this.nextRedStyle="red-era2";
            this.nextGreenStyle="green-era2";
            this.nextGreenSecondStyle="green2-era2";


        } else if (params.year < 1952) {
            this.imgMast=(this.isProtection ? "lg_2_mastp" : "lg_12_mast");
            if (this.isMainThreeAspect) this.imgMainPlate=(this.isEntry ? "lg_2_plate_entry" : "lg_2_plate_3");
            else if (this.isMainFourAspect) this.imgMainPlate="lg_2_plate_4";
            else if (this.isShunt) this.imgMainPlate="lg_2_plate_shunt";
            else this.imgMainPlate="lg_2_plate2";
            this.imgDistPlate=(this.isDistThreeAspect ? "lg_3_distplate_31" : "lg_3_distplate_32");
            this.imgNextMainPlate=(this.isDistThreeAspect ? "lg_2_plate_3" : "lg_2_plate2");
            this.mainPlateStyle=(this.isEntry ? "main-entry-plate-era2" : "main-plate-era2");
            this.distPlateStyle=(this.isEntry ? "dist-entry-plate-era2" : "dist-plate-era2");
            this.nextMainPlateStyle="main-plate-era2";
            this.isExtPlateVisible=false;
            this.isMainCallsignLightVisible=false;
            this.isDistThirdYellowLightVisible = false;
            this.isDistThirdGreenLightVisible = this.isDistPlateVisible;

            this.redStyle=(this.isEntry ? "entry-red-era2" : "red-era2");
            this.greenStyle=(this.isEntry ? "entry-green-era2" : "green-era2");
            this.greenSecondStyle=(this.isEntry ? "entry-green2-era2" : "green2-era2");
            this.greenThirdStyle="green3-era2";

            this.distThirdGreenStyle=(this.isEntry ? "dist-entry-green3-era2" : "dist-green3-era2");
            this.distPlateStyle=(this.isEntry ? "dist-entry-plate-era2" : "dist-plate-era2");
            this.distYellowStyle=(this.isEntry ? "dist-entry-yellow-era2" : "dist-yellow-era2");
            this.distSecondYellowStyle=(this.isEntry ? "dist-entry-yellow2-era2" : "dist-yellow2-era2");
            this.distGreenStyle=(this.isEntry ? "dist-entry-green-era2" : "dist-green-era2");
            this.distSecondGreenStyle=(this.isEntry ? "dist-entry-green2-era2" : "dist-green2-era2");

            this.nextRedStyle="red-era2";
            this.nextGreenStyle="green-era2";
            this.nextGreenSecondStyle="green2-era2";

        } else if (params.year < 1968) {
            this.imgMast=(this.isProtection ? "lg_3_mastp" : "lg_3_mast");
            if (this.isMainThreeAspect) this.imgMainPlate=(this.isEntry ? "lg_3_plate_4" : "lg_3_plate_3");
            else if (this.isMainFourAspect) this.imgMainPlate=(this.isEntry ? "lg_3_plate_entry_5" : "lg_3_plate_5");
            else if (this.isShunt) this.imgMainPlate="lg_3_plate_shunt";
            else this.imgMainPlate="lg_3_plate_2";
            this.extPlateStyle=(this.isEntry ? "ext-plate-era3" : "ext-dist-plate-era3");
            this.imgDistPlate="lg_3_distplate_32";
            this.imgNextMainPlate=(this.isDistThreeAspect ? "lg_3_plate_3" : "lg_3_plate_2");
            this.imgExtPlate=(this.isEntry ? (this.isDistThreeAspect ? "lg_3_xplate_entry" : "lg_3_xplate_call") : "lg_3_xplate");
            this.nextMainPlateStyle=this.mainPlateStyle="main-plate-era3";
            this.distPlateStyle=(this.isEntry ? "dist-entry-plate-era3" : "dist-plate-era3");
            this.isExtPlateVisible=this.isEntry || (params.typ.typ == "DISTANT" && this.isDistThreeAspect);
            this.isMainCallsignLightVisible=this.isEntry;
            this.isDistThirdYellowLightVisible = this.isDistPlateVisible;
            this.isDistThirdGreenLightVisible = false;

            this.callsignStyle="dist-call-white-era3";
            this.nextRedStyle=this.redStyle="red-era3";
            this.nextGreenStyle=this.greenStyle="green-era3";
            this.nextGreenSecondStyle=this.greenSecondStyle="green2-era3";
            this.greenThirdStyle="green3-era3";
            this.distYellowStyle=(this.isEntry ? "dist-entry-yellow-era3" : "dist-yellow-era3");
            this.distSecondYellowStyle=(this.isEntry ? "dist-entry-yellow2-era3" : "dist-yellow2-era3");
            this.distThirdYellowStyle=(this.isEntry ? "dist-entry-yellow3-era3" : "dist-yellow3-era3");
            this.distGreenStyle=(this.isEntry ? "dist-entry-green-era3" : "dist-green-era3");
            this.distSecondGreenStyle=(this.isEntry ? "dist-entry-green2-era3" : "dist-green2-era3");
        }
    }

    astop() {
        this.state="on";
        this.calculateAspect();
    }

    avmax() {
        this.state="off";
        this.calculateAspect();
    }

    aslow() {
        this.state="slow";
        this.calculateAspect();
    }

    aslow2() {
        this.state="slow2";
        this.calculateAspect();
    }

    acall() {
        this.state="callsign";
        this.calculateAspect();
    }


    nxstop() {
        this.diststate="on";
        this.calculateAspect();
    }

    nxvmax() {
        this.diststate="off";
        this.calculateAspect();
    }

    nxslow() {
        this.diststate="slow";
        this.calculateAspect();
    }

}



