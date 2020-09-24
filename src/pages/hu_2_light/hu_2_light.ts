import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {
    darkState,
    xdarkState,
    lightRed,
    lightGreen,
    lightYellow,
    lightWhite,
    lightBlue,
    lightGreenLine,
    lightYellowLine,
    lightNextRed,
    lightNextGreen, lightNextYellow
} from '../../assets/ts/animations_light';
import {SignalSelector} from "../../assets/ts/SignalSelector";
import {HuLightSignal} from "../../assets/ts/HuLightSignal";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'page-hu_2_light',
  templateUrl: 'hu_2_light.html',
  animations: [darkState,xdarkState,lightRed,lightGreen,lightYellow,lightNextRed,lightNextGreen,lightNextYellow,lightWhite,lightBlue,lightGreenLine,lightYellowLine]})

export class Hu2LightPage extends HuLightSignal {

    imgMast="lg_12_mast";
    imgMastPlate="";
    imgMainPlate="";
    imgNextMastPlate="";
    imgNextPlate="";
    imgNextExtPlate="";

    isMainPlateVisible=true;
    isMainButtonsVisible=true;
    isExtPlateVisible=true;
    isCallPlateVisible=true;
    isNextVisible=false;
    isNextExtPlateVisible=true;
    isMainMastPlateVisible=false;

    isShunt=false;
    isDistant=false;
    isRepeater=false;
    isHump=false;
    isMain=false;
    isBlock=false;
    isProtection=false;

    mastStyle="mast-light";
    mainPlateStyle="";
    nextMainPlateStyle="";
    extPlateStyle="";
    nextExtPlateStyle="";
    callPlateStyle="";

    blinkingYellowStyle="";
    blinkingGreenStyle="";
    blinkingFastGreenStyle="";

    mainRed="off";
    mainGreen="off";
    mainYellowUpper="off";
    mainYellowLower="off";
    mainCallsign="off";
    mainGreenTop="off";
    mainGreenMiddle="off";
    mainGreenBottom="off";
    mainYellowLine="off";

    nextRed="off";
    nextGreen="off";
    nextYellowLower="off";
    nextGreenTop="off";
    nextGreenMiddle="off";
    nextGreenBottom="off";

    isMainRedLightVisible=false;
    isMainGreenLightVisible=false;
    isMainYellowUpperLightVisible=false;
    isMainYellowLowerLightVisible=false;

    isMainBlinkingYellowVisible=false;
    isMainBlinkingFastGreenVisible=false;
    isMainBlinkingGreenVisible=false;

    isMainCallsignVisible=true;

    isLastBlock=false;

    redStyle="";
    greenStyle="";
    yellowUpperStyle="";
    yellowLowerStyle="";

    nextRedStyle="";
    nextGreenStyle="";
    nextYellowLowerStyle="";


    mainSlow20Style="";
    mainSlow40Style="";
    mainSlow80Style="";
    mainSlow120Style="";


    nextSlow40Style="";
    nextSlow80Style="";
    nextSlow120Style="";


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
        this.nextSlow40Style=(this.diststate == "40" ? "selectedButton" : "");
        this.nextSlow80Style=(this.diststate == "80" ? "selectedButton" : "");
        this.nextSlow120Style=(this.diststate == "120" ? "selectedButton" : "");

        this.mainStopStyle=(this.state == "on" ? "selectedButton" : "");
        this.mainMaxStyle=(this.state == "off" ? "selectedButton" : "");
        this.mainSlow20Style=(this.state == "20" ? "selectedButton" : "");
        this.mainSlow40Style=(this.state == "40" ? "selectedButton" : "");
        this.mainSlow80Style=(this.state == "80" ? "selectedButton" : "");
        this.mainSlow120Style=(this.state == "120" ? "selectedButton" : "");
        this.mainCallsignStyle=(this.state == "callsign" ? "selectedButton" : "");

        switch(this.state) {
            case "off":
                if (this.isShunt) {
                    this.mainRed = "off";
                    this.mainGreen = "on";
                } else if (this.isProtection) {
                    this.mainRed = "off";
                    this.mainYellowLower = "on";
                } else {
                    this.mainRed="off";
                    this.mainYellowLower="off";
                    this.mainCallsign="off";
                    this.mainGreenTop="off";
                    this.mainGreenMiddle="off";
                    this.mainGreenBottom="off";
                    this.mainYellowLine="off";
                }
                break;
            case "20":
                this.mainRed="off";
                this.mainYellowLower="on";
                this.mainCallsign="off";
                this.mainGreenTop="off";
                this.mainGreenMiddle="off";
                this.mainGreenBottom="off";
                this.mainYellowLine="on";
                break;
            case "40":
                this.mainRed="off";
                this.mainYellowLower="on";
                this.mainCallsign="off";
                this.mainGreenTop="off";
                this.mainGreenMiddle="off";
                this.mainGreenBottom="off";
                this.mainYellowLine="off";
                break;
            case "80":
                this.mainRed="off";
                this.mainYellowLower="on";
                this.mainCallsign="off";
                this.mainGreenTop="off";
                this.mainGreenMiddle="on";
                this.mainGreenBottom="off";
                this.mainYellowLine="off";
                break;
            case "120":
                this.mainRed="off";
                this.mainYellowLower="on";
                this.mainCallsign="off";
                this.mainGreenTop="on";
                this.mainGreenMiddle="off";
                this.mainGreenBottom="on";
                this.mainYellowLine="off";
                break;
            case "callsign":
                this.mainRed="on";
                this.mainYellowUpper="off";
                this.mainYellowLower="off";
                this.mainGreen="off";
                this.mainCallsign="on";
                this.mainGreenTop="off";
                this.mainGreenMiddle="off";
                this.mainGreenBottom="off";
                this.mainYellowLine="off";
                break;
            default:
                if (this.isShunt) {
                    this.mainRed="on";
                    this.mainGreen="off";
                } else if (this.isProtection) {
                    this.mainRed = "on";
                    this.mainYellowLower = "off";
                } else {
                    this.mainRed = "on";
                    this.mainYellowUpper = "off";
                    this.mainYellowLower = "off";
                    this.mainGreen = "off";
                    this.mainCallsign = "off";
                    this.mainGreenTop = "off";
                    this.mainGreenMiddle = "off";
                    this.mainGreenBottom = "off";
                    this.mainYellowLine = "off";
                }
        }

        if (!this.isShunt && (!this.isProtection || (this.isDistant))) {
            switch (this.diststate) {
                case "off":
                    if (this.isProtection) {
                        this.nextRed = "off";
                        this.nextYellowLower = "on";
                        this.mainGreen="on";
                        this.mainYellowLower="off";
                    } else {
                        this.nextRed = "off";
                        this.nextGreen = "on";
                        this.nextYellowLower = "off";
                        this.nextGreenTop = "off";
                        this.nextGreenMiddle = "off";
                        this.nextGreenBottom = "off";
                        if ((this.state != "on") && (this.state != "callsign")) {
                            this.isMainBlinkingYellowVisible = false;
                            this.isMainBlinkingFastGreenVisible = false;
                            this.isMainBlinkingGreenVisible = false;
                            this.mainYellowUpper = "off";
                            this.mainGreen = "on";
                        } else {
                            this.isMainBlinkingYellowVisible = false;
                            this.isMainBlinkingFastGreenVisible = false;
                            this.isMainBlinkingGreenVisible = false;
                            this.mainYellowUpper = "off";
                            this.mainGreen = "off";
                        }
                    }
                    break;
                case "40":
                    this.nextRed = "off";
                    this.nextGreen = "on";
                    this.nextYellowLower = "on";
                    this.nextGreenTop = "off";
                    this.nextGreenMiddle = "off";
                    this.nextGreenBottom = "off";
                    if ((this.state != "on") && (this.state != "callsign")) {
                        this.isMainBlinkingYellowVisible = !this.isRepeater;
                        this.isMainBlinkingFastGreenVisible = false;
                        this.isMainBlinkingGreenVisible = false;
                        this.mainYellowUpper = "off";
                        this.mainGreen = (this.isRepeater ? "on" : "off");
                    } else {
                        this.isMainBlinkingYellowVisible = false;
                        this.isMainBlinkingFastGreenVisible = false;
                        this.isMainBlinkingGreenVisible = false;
                        this.mainYellowUpper = "off";
                        this.mainGreen = "off";
                    }
                    break;
                case "80":
                    this.nextRed = "off";
                    this.nextGreen = "on";
                    this.nextYellowLower = "on";
                    this.nextGreenTop = "off";
                    this.nextGreenMiddle = "on";
                    this.nextGreenBottom = "off";
                    if ((this.state != "on") && (this.state != "callsign")) {
                        this.isMainBlinkingYellowVisible = false;
                        this.isMainBlinkingFastGreenVisible = false;
                        this.isMainBlinkingGreenVisible = !this.isRepeater;
                        this.mainYellowUpper = "off";
                        this.mainGreen = (this.isRepeater ? "on" : "off");
                    } else {
                        this.isMainBlinkingYellowVisible = false;
                        this.isMainBlinkingFastGreenVisible = false;
                        this.isMainBlinkingGreenVisible = false;
                        this.mainYellowUpper = "off";
                        this.mainGreen = "off";
                    }
                    break;
                case "120":
                    this.nextRed = "off";
                    this.nextGreen = "on";
                    this.nextYellowLower = "on";
                    this.nextGreenTop = "on";
                    this.nextGreenMiddle = "off";
                    this.nextGreenBottom = "on";
                    if ((this.state != "on") && (this.state != "callsign")) {
                        this.isMainBlinkingYellowVisible = false;
                        this.isMainBlinkingFastGreenVisible = !this.isRepeater;
                        this.isMainBlinkingGreenVisible = false;
                        this.mainYellowUpper = "off";
                        this.mainGreen = (this.isRepeater ? "on" : "off");
                    } else {
                        this.isMainBlinkingYellowVisible = false;
                        this.isMainBlinkingFastGreenVisible = false;
                        this.isMainBlinkingGreenVisible = false;
                        this.mainYellowUpper = "off";
                        this.mainGreen = "off";
                    }
                    break;
                default:
                    if (this.isProtection) {
                        this.nextRed = "on";
                        this.nextYellowLower = "off";
                        this.mainGreen="off";
                        this.mainYellowLower="on";
                    } else {
                        this.nextRed = "on";
                        this.nextGreen = "off";
                        this.nextYellowLower = "off";
                        this.nextGreenTop = "off";
                        this.nextGreenMiddle = "off";
                        this.nextGreenBottom = "off";
                        if ((this.state != "on") && (this.state != "callsign")) {
                            this.isMainBlinkingYellowVisible = false;
                            this.isMainBlinkingFastGreenVisible = false;
                            this.isMainBlinkingGreenVisible = false;
                            this.mainYellowUpper = "on";
                            this.mainGreen = "off";
                        } else {
                            this.isMainBlinkingYellowVisible = false;
                            this.isMainBlinkingFastGreenVisible = false;
                            this.isMainBlinkingGreenVisible = false;
                            this.mainYellowUpper = "off";
                            this.mainGreen = "off";
                        }
                    }
            }
        }
    }

    calculateLocal(params : any) {
        this.isLastBlock=(params.typ.subtyp == "LASTBLOCK");
        this.isMain=(params.typ.typ == "MAIN") && (params.typ.subtyp != "BLOCK") && (params.typ.subtyp != "LASTBLOCK");
        this.isBlock=(params.typ.typ == "MAIN") && (params.typ.subtyp == "BLOCK");
        this.isProtection=params.typ.typ=="PROTECTION" || params.typ.subtyp=="PROTECTION";
        this.isDistant=(params.typ.typ == "DISTANT");
        this.isRepeater=(params.typ.typ == "DISTANT") && (params.typ.subtyp=="REPEATER");
        this.isMainRedLightVisible=(params.typ.typ!="SHUNT") && (params.typ.typ!="DISTANT");
        this.isMainGreenLightVisible=(params.typ.typ!="SHUNT");
        this.isMainYellowUpperLightVisible=(params.typ.typ!="SHUNT") && (params.typ.typ!="PROTECTION") && (params.typ.subtyp!="PROTECTION");
        this.isMainYellowLowerLightVisible=(params.typ.typ!="SHUNT");
        this.isMainPlateVisible=!((params.typ.typ == "SHUNT") && (params.typ.subtyp == "DWARF"));
        this.isMainButtonsVisible= (this.isMainPlateVisible || ((params.typ.typ == "SHUNT") && (params.typ.subtyp == "DWARF"))) && (!this.isDistant) && (!this.isRepeater);
        this.isMainMastPlateVisible=!((params.typ.typ == "SHUNT") && (params.typ.subtyp == "DWARF"));
        this.isExtPlateVisible=(params.typ.typ == "MAIN") && (params.typ.subtyp != "BLOCK") && (params.typ.subtyp != "LASTBLOCK");
        this.isCallPlateVisible=(params.typ.typ == "MAIN") && (params.typ.subtyp != "BLOCK") && (params.typ.subtyp != "LASTBLOCK");

        this.isNextVisible=(params.typ.typ == "MAIN") || (params.typ.typ == "DISTANT");

        this.isNextExtPlateVisible=((params.typ.typ == "MAIN") && (params.typ.subtyp != "BLOCK")) || ((params.typ.typ == "DISTANT") && (params.typ.subtyp != "PROTECTION"));

        this.isShunt=params.typ.typ=="SHUNT";
        this.isHump=params.typ.typ=="HUMP";
        this.calculateImages(params);
        this.calculateAspect();
    }


     calculateImages(params : any) {
        this.mastStyle="mast-light";

        if ((params.typ.typ == "SHUNT") && (params.typ.subtyp == "DWARF")) {
            this.redStyle = "dwarf-blue";
            this.greenStyle = "dwarf-white";
        } else if ((params.typ.typ == "SHUNT") && (params.typ.subtyp == "")) {
            this.redStyle = "red";
            this.greenStyle = "yellow-lower";
        } else if ((params.typ.typ == "MAIN") && (params.typ.subtyp == "LASTBLOCK")) {
            this.nextRedStyle="red";
            this.nextGreenStyle="green";
            this.nextYellowLowerStyle="yellow-lower";

            this.yellowLowerStyle="yellow-lower";
            this.yellowUpperStyle="yellow-lower";
            this.blinkingYellowStyle="yellow-lower";
            this.redStyle = "red";
            this.greenStyle = "block-green";
            this.blinkingGreenStyle="block-green";
            this.blinkingFastGreenStyle="block-green";
        } else if ((params.typ.typ == "MAIN") && (params.typ.subtyp == "BLOCK")) {
            this.nextRedStyle="red";
            this.nextGreenStyle="block-green";
            this.nextYellowLowerStyle="yellow-lower";
            this.yellowLowerStyle="yellow-lower";
            this.yellowUpperStyle="yellow-lower";
            this.redStyle = "red";
            this.greenStyle = "block-green";
        } else if (params.typ.typ == "DISTANT") {
            this.nextRedStyle="red";
            this.nextGreenStyle="green";
            this.nextYellowLowerStyle="yellow-lower";
            this.yellowUpperStyle="yellow-lower";
            this.yellowLowerStyle="yellow-lower";
            this.blinkingYellowStyle="yellow-lower";
            this.redStyle = "red";
            this.greenStyle = "red";
            this.blinkingGreenStyle="red";
            this.blinkingFastGreenStyle="red";
        } else {
            this.nextRedStyle="red";
            this.nextGreenStyle="green";
            this.nextYellowLowerStyle="yellow-lower";
            this.blinkingYellowStyle="yellow-upper";
            this.blinkingGreenStyle="green";
            this.blinkingFastGreenStyle="green";
            this.redStyle="red";
            this.greenStyle="green";
            this.yellowLowerStyle="yellow-lower";
            this.yellowUpperStyle="yellow-upper";
        }

        if ((params.typ.typ == "SHUNT") && (params.typ.subtyp == "DWARF")) this.imgMast="lg_4_dwarf_shunt";
//        else this.imgMast=(params.year > 2002 ? "lg_5_mast" : "lg_4_mast");
        else this.imgMast="lg_5_mast";

        if ((params.typ.typ == "PROTECTION") || ((params.typ.typ == "DISTANT") && (params.typ.subtyp != "REPEATER"))) this.imgMainPlate="lg_4_plate_2";
        else if ((params.typ.typ == "SHUNT") && (params.typ.subtyp == "")) this.imgMainPlate="lg_4_plate_shunt";
        else if (params.typ.typ == "HUMP") this.imgMainPlate="lg_4_plate_shunt";
        else if ((params.typ.typ == "MAIN") && ((params.typ.subtyp == "BLOCK") || (params.typ.subtyp == "LASTBLOCK"))) this.imgMainPlate="lg_4_plate_3";
        else this.imgMainPlate="lg_4_plate_4";

        if (params.typ.typ == "MAIN") {
            if (params.typ.subtyp == "BLOCK") this.imgNextPlate="lg_4_plate_3";
            else this.imgNextPlate="lg_4_plate_4";
        }
        else if ((params.typ.typ == "DISTANT") && (params.typ.subtyp != "PROTECTION")) this.imgNextPlate="lg_4_plate_4";
        else this.imgNextPlate="lg_4_plate_2";

        if (params.typ.typ == "DISTANT") {
            if (params.typ.subtyp == "PROTECTION") this.imgMastPlate="lg_5_yellowplate_p";
            else  this.imgMastPlate="lg_5_yellowplate";
        }
        else if (params.typ.typ == "PROTECTION") this.imgMastPlate="lg_5_redplate_p";
        else if ((params.typ.typ == "MAIN") && ((params.typ.subtyp == "BLOCK") || (params.typ.subtyp == "LASTBLOCK"))) this.imgMastPlate="lg_5_whiteplate";
        else if ((params.typ.typ == "SHUNT") && (params.typ.subtyp == "")) this.imgMastPlate="lg_5_blueplate";
        else if (params.typ.typ == "HUMP") this.imgMastPlate="lg_5_blueplate_p";
        else  this.imgMastPlate="lg_5_redplate";

        if ((params.typ.typ == "MAIN") && (params.typ.subtyp == "BLOCK")) this.imgNextMastPlate="lg_5_whiteplate";
        else if ((params.typ.typ == "DISTANT") && (params.typ.subtyp == "PROTECTION")) this.imgNextMastPlate="lg_5_redplate_p";
        else this.imgNextMastPlate="lg_5_redplate";

        this.nextMainPlateStyle=this.mainPlateStyle="main-plate";
        this.nextExtPlateStyle="ext-plate-line";
        this.imgNextExtPlate="lg_4_extplate2";
        this.callPlateStyle="call-plate-main";
    }

    astop() {
        this.state="on";
        this.calculateAspect();
    }

    avmax() {
        this.state="off";
        this.calculateAspect();
    }

    a20() {
        this.diststate="on";
        this.state="20";
        this.calculateAspect();
    }

    a40() {
        this.state="40";
        this.calculateAspect();
    }

    a80() {
        this.state="80";
        this.calculateAspect();
    }

    a120() {
        this.state="120";
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
        if (this.state == "20") this.state="40";
        this.calculateAspect();
    }

    nx40() {
        this.diststate="40";
        if (this.state == "20") this.state="40";
        this.calculateAspect();
    }

    nx80() {
        this.diststate="80";
        if (this.state == "20") this.state="40";
        this.calculateAspect();
    }

    nx120() {
        this.diststate="120";
        if (this.state == "20") this.state="40";
        this.calculateAspect();
    }

}



