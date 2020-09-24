import { Component } from '@angular/core';
import {IonicPageModule, NavController, NavParams} from 'ionic-angular';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {
    darkState,
    xdarkState,lightRed,lightGreen,lightYellow,lightNextRed,lightNextGreen,lightNextYellow,lightWhite,lightBlue,lightSmallWhite} from '../../assets/ts/animations_light';
import {SignalSelector} from "../../assets/ts/SignalSelector";
import {HuLightSignal} from "../../assets/ts/HuLightSignal";

@Component({
    selector: 'page-hu_3_block',
    templateUrl: 'hu_3_block.html',
    animations: [darkState,xdarkState,lightRed,lightGreen,lightYellow,lightNextRed,lightNextGreen,lightNextYellow,lightWhite,lightBlue,lightSmallWhite]})
export class Hu3BlockPage extends HuLightSignal {

    isXTrack=false;
    mainXTrackStyle="";

    nextDistStyle="";

    mastStyle="mast-light";
    imgMast="lg_12_mast";
    imgNextMast="lg_12_mast";
    imgMainPlate="";
    imgNextMainPlate="";
    imgDistPlate="";
    distPlateStyle="";
    nextMainPlateStyle="";
    extPlateStyle="";

    redStyle="";
    greenStyle="";
    yellowLeftStyle="";
    yellowRightStyle="";

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
    isEntry=true;
    isExit=false;
    isLastBlock=false;


    isDistPlateVisible=true;
    isBlockThreeAspect=false;
    isExtPlateVisible=false;

    isMainSecondGreenLightVisible=false;
    isMainThirdGreenLightVisible=false;

    mainRed="on";
    mainGreen="on";
    mainGreen2="on";
    mainGreen3="on";
    mainYellowRight="on";
    mainYellowLeft="on";

    nextRed="on";
    nextGreen="off";
    nextSlow="off";

    constructor(public navCtrl: NavController,navParams : NavParams, signalSelector : SignalSelector,public translate : TranslateService) {
        super(navCtrl,navParams,signalSelector,translate);
        this.calculateLocal(navParams.data);
        this.nxstop();

    }

    calculateAspect() {

        if (this.isLastBlock) this.imgNextMainPlate="lg_3_plate_4";
        else if (this.diststate == "slow") this.imgNextMainPlate="lg_3_plate_3";
        else this.imgNextMainPlate="lg_3_plate_aut1";

        if (this.isLastBlock || this.diststate == "slow") this.nextMainPlateStyle="entry-plate";
        else this.nextMainPlateStyle="main-plate";

        this.imgNextMast=((this.isLastBlock || this.diststate == "slow")  ? "lg_3_mast" : "lg_4_mast");


        this.nextStopStyle=(this.diststate == "on" ? "selectedButton" : "");
        this.nextMaxStyle=(this.diststate == "off" ? "selectedButton" : "");
        this.nextSlowStyle=(this.diststate == "slow" ? "selectedButton" : "");
        this.nextDistStyle=(this.diststate == "nxstop" ? "selectedButton" : "");
        this.mainStopStyle=(this.state == "on" ? "selectedButton" : "");
        this.mainMaxStyle=(this.state == "off" ? "selectedButton" : "");
        this.mainSlowStyle=(this.state == "slow" ? "selectedButton" : "");
        this.mainSlow2Style=(this.state == "slow2" ? "selectedButton" : "");
        this.mainCallsignStyle=(this.state == "pstop" ? "selectedButton" : "");
        this.mainXTrackStyle=(this.isXTrack ? "selectedButton" : "");

        switch(this.state) {
            case "pstop":
                this.mainRed="on";
                this.mainGreen="off";
                this.mainGreen2="off";
                this.mainGreen3="off";
                break;
            case "off":
                this.mainRed="off";
                this.mainGreen=(this.isExit || (this.diststate != "on" && this.diststate != "nxstop") ? "on":"off");
                this.mainGreen2="off";
                this.mainGreen3="off";
                break;
            case "slow":
                this.mainRed="off";
                this.mainGreen="on";
                this.mainGreen2="on";
                this.mainGreen3="off";
                break;
            case "slow2":
                this.mainRed="off";
                this.mainGreen="on";
                this.mainGreen2="on";
                this.mainGreen3="on";
                break;
            default:
                this.mainRed="on";
                this.mainGreen="off";
                this.mainGreen2="off";
                this.mainGreen3="off";
        }
        if (this.state == "on" || this.state == "pstop") {
            this.mainYellowLeft = "off";
            this.mainYellowRight = "off";
        } else {
            switch (this.diststate) {
                case "slow":
                case "off":
                    this.mainYellowLeft = "off";
                    this.mainYellowRight = "off";
                    break;
                case "nxstop":
                    if (this.isExit) {
                        this.mainYellowLeft = "on";
                        this.mainYellowRight = "off";
                    } else {
                        this.mainYellowLeft = "off";
                        this.mainYellowRight = "on";
                    }
                    break;
                default:
                    this.mainYellowLeft = "on";
                    this.mainYellowRight = "on";
            }
        }
        switch (this.diststate) {
            case "nxstop":
                this.nextRed = "off";
                this.nextGreen = "off";
                this.nextSlow = "off";
                break;
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
        this.isLastBlock=params.typ.subtyp.startsWith("LASTBLOCK");
        this.isDistPlateVisible=this.isNextVisible=params.typ.typ=="ENTRY" || params.typ.typ=="DISTANT";
        this.isMainThreeAspect=params.typ.subtyp=="THREEASPECT" || params.typ.subtyp=="THREEASPECT_BRAKE";
        this.isMainFourAspect=params.typ.subtyp=="FOURASPECT" || params.typ.subtyp=="FOURASPECT_BRAKE";
        this.isEntry=params.typ.typ=="ENTRY";
        this.isExit=params.typ.typ=="EXIT";
        this.isBlockThreeAspect=params.typ.subtyp.endsWith("_BRAKE");
        this.isMainSecondGreenLightVisible =  (this.isMainThreeAspect || this.isMainFourAspect);
        this.isMainThirdGreenLightVisible = this.isMainFourAspect;
        this.calculateImages(params);
        this.calculateAspect();
    }


    calculateImages(params : any) {
        this.mastStyle="mast-light";
        this.imgMast="lg_4_mast";
        if(this.isExit && this.isMainThreeAspect) this.imgMainPlate="lg_3_plate_aut2";
        else if(this.isExit && this.isMainFourAspect) this.imgMainPlate="lg_3_plate_aut3";
        else this.imgMainPlate="lg_3_plate_aut1";


        this.nextRedStyle="red";

        this.greenStyle=(this.isMainFourAspect || this.isMainThreeAspect) ? "green" : "green2";

        if (this.isExit && (this.isMainFourAspect || this.isMainThreeAspect)) {
            this.redStyle = params.typ.subtyp.endsWith("_BRAKE") ? "redmiddle" : "redtop";
            this.yellowRightStyle="exit-yellow-right";
            this.yellowLeftStyle=params.typ.subtyp.endsWith("_BRAKE") ? "exit-yellow-left-upper" : "exit-yellow-left-lower";
        } else {
            this.redStyle = params.typ.subtyp.endsWith("_BRAKE") ? "redbottom" : "redmiddle";
            this.yellowRightStyle="yellow-right";
            this.yellowLeftStyle=params.typ.subtyp.endsWith("_BRAKE") ? "yellow-left-upper" : "yellow-left-lower";
        }
    }

    astop() {
        this.isXTrack=false;
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

    permstop() {
        this.state="pstop";
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

    nxdiststop() {
        this.diststate="nxstop";
        this.calculateAspect();
    }

    goxtrack() {
        if (this.state!= "on") {
            this.isXTrack = !this.isXTrack;
            this.calculateAspect();
        }
    }

}



