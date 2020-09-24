import { Component,HostListener  } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { SignalSelector } from './SignalSelector';
import {TranslateService} from "@ngx-translate/core";

export class Signal {

  public isTypButtonsVisible=false;
  public isSignalButtonsVisible=false;
  public isEraButtonsVisible=false;
  public isSpeedButtonsVisible=true;




  typ="ENTRY";
  subtyp="THREEASPECT";
  year=1939;


  public daynight = "moon";
  public selectedlang="flag";
  public selectedcountry="globe";
  dark = "light";
  eraName="";
  signalName="";
  sTypeName="FORM_SIGNALS";

  language="hu";
  country="hu";

  constructor(public navCtrl: NavController,public navParams : NavParams, public signalSelector : SignalSelector,public translate : TranslateService) {
    if (navParams.data.dark) this.setDark();
    else this.setDaylight(); 
  }




  public ionViewDidLoad() {
    this.doResize();
    this.signalName=this.signalSelector.getName(this.navParams.data.typ);
    this.eraName=this.signalSelector.getEraName(this.navParams.data.year);
    this.sTypeName=this.signalSelector.getSignalTypeName();
  }

  private setDark() {
    this.dark="dark";
    this.daynight="sunny";
  }

  private setDaylight() {
    this.dark="light";
    this.daynight="moon";
  }

    private selectLang() {
/*
        if (this.language == "hu") this.language="en";
        else if (this.language == "en") this.language="de";
        else this.language="hu";*/
        if (this.language == "hu") this.language="en";
        else if (this.language == "en") this.language="hu";

        this.translate.use(this.language);
    }

  public selectCountry() {

  }


  public darkLight() {
    if (this.dark == "dark") this.setDaylight();
    else this.setDark();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
      this.doResize();
  }

  doResize() {
  let divCont=<HTMLElement>document.querySelector('div#container');
    let ww=getComputedStyle(divCont.parentElement);
    let pl=parseInt(ww.paddingLeft);
    let pr=parseInt(ww.paddingRight);
    let w=window.innerWidth;
    let h=window.innerHeight;
    w-=pl;
    w-=pr;

    var pt=parseInt(ww.paddingTop);
    var pb=parseInt(ww.paddingBottom);
    h-=pt;
    h-=pb;
    h-=128;

    let perc=1364/1819;
    if (w/h > perc) {
      divCont.style.height=''+h+'px';
      divCont.style.width=''+(h*perc)+'px';
    } else {
      divCont.style.height=''+(w/perc)+'px';
      divCont.style.width=''+w+'px';
    }
  }

  showEras() {
      this.isSignalButtonsVisible=false;
      this.isTypButtonsVisible=false;
      this.isEraButtonsVisible=!this.isEraButtonsVisible;
      this.isSpeedButtonsVisible=!this.isEraButtonsVisible;
  }

  showSignals() {
      this.isSignalButtonsVisible=!this.isSignalButtonsVisible;
      this.isTypButtonsVisible=false;
      this.isEraButtonsVisible=false;
      this.isSpeedButtonsVisible=!this.isSignalButtonsVisible;
  }


  showTypes() {
      this.isSignalButtonsVisible=false;
      this.isEraButtonsVisible=false;
      this.isTypButtonsVisible=!this.isTypButtonsVisible;
      this.isSpeedButtonsVisible=!this.isTypButtonsVisible;
  }

  private goSelectedSignal() {
      let yrTyp=this.signalSelector.getSelectedTyp();
      this.navCtrl.setRoot(HomePage,yrTyp);
  }

  public selectSignal(sigtyp : any) {
      this.signalSelector.setSelectedSignal(sigtyp);
      this.goSelectedSignal();
  }


  public goSignal(typ : any) {
      this.signalSelector.setSelectedTyp(typ);
      this.goSelectedSignal();
  }

  public goEra(nr : any) {
      this.signalSelector.setSelectedYearFormEraNr(nr);
      this.goSelectedSignal();
  }






}

