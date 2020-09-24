import {Component, Injectable} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { Hu1EntryPage } from '../hu_1_entry/hu_1_entry';
import { Hu2EntryPage } from '../hu_2_entry/hu_2_entry';
import {Hu3EntryPage} from "../hu_3_entry/hu_3_entry";
import {Hu4EntryPage} from "../hu_4_entry/hu_4_entry";
import {Hu5EntryPage} from "../hu_5_entry/hu_5_entry";
import {Hu6EntryPage} from "../hu_6_entry/hu_6_entry";
import {HuShuntPage} from "../hu_shunt/hu_shunt";
import {Hu1PlatePage} from "../hu_1_plate/hu_1_plate";
import {Hu1DiscPage} from "../hu_1_disc/hu_1_disc";
import {HuConePage} from "../hu_cone/hu_cone";
import {Hu1LightPage} from "../hu_1_light/hu_1_light";
import {Hu2LightPage} from "../hu_2_light/hu_2_light";
import {Hu3BlockPage} from "../hu_3_block/hu_3_block";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public translate : TranslateService) {

      this.translate.setDefaultLang('hu');

  }

    ionViewDidEnter() {
        if (this.navParams.data.typ !== undefined) {
            this.goPage(this.navParams.data);
        } else {
            this.goPage({signal:"FORM",year:1946,typ:{typ:"ENTRY",subtyp:"THREEASPECT",
                    disttyp: "THREEASPECT"}});
        }
    }

  public goPage(params : any) {
      let pg=this.getPage(params.signal,params.typ.typ,params.typ.subtyp,params.year);
      if (pg !== undefined) this.navCtrl.setRoot(pg,params);
  }



  public getPage(signal: string,typ: string,subtyp: string,year : Number) : any {
      switch(signal) {
          case "FORM": return this.getFormPage(typ,subtyp,year);
          case "LIGHT": return this.getLightPage(typ,subtyp,year);
          case "BLOCK_I": return Hu3BlockPage;
      }
  }


  public getFormPage(typ: string,subtyp: string,year : Number) : any {
    if (typ == "SHUNT") return HuShuntPage;
    if (subtyp == "CONE") return HuConePage;

    else if ((year < 1939) && (typ == "ENTRY")) return Hu1EntryPage;
    else if ((year < 1939) && (typ == "EXIT")) return Hu1EntryPage;
    else if ((year < 1939) && (typ == "PROTECTION")) {
        if (subtyp == "PLATE") return Hu1PlatePage;
        else if (subtyp == "DISC") return Hu1DiscPage;
        else return Hu1EntryPage;
    }
    else if ((year < 1939) && (typ == "DISTANT")) {
        if (subtyp == "PLATE") return Hu1PlatePage;
        else if (subtyp == "DISC") return Hu1DiscPage;
        else return Hu1EntryPage;
    }

    else if ((year >= 1939) && (year < 1947) && (typ == "ENTRY")) return Hu2EntryPage;
    else if ((year >= 1939) && (year < 1947) && (typ == "PROTECTION")) return Hu2EntryPage;
    else if ((year >= 1939) && (year < 1947) && (typ == "EXIT")) return Hu2EntryPage;
    else if ((year >= 1939) && (year < 1947) && (typ == "DISTANT")) return Hu2EntryPage;

    else if ((year >= 1947) && (year < 1967) && (typ == "ENTRY")) return Hu3EntryPage;
    else if ((year >= 1947) && (year < 1967) && (typ == "DISTANT")) return Hu3EntryPage;
    else if ((year >= 1947) && (year < 1967) && (typ == "EXIT")) return Hu3EntryPage;
    else if ((year >= 1947) && (year < 1967) && (typ == "PROTECTION")) return Hu3EntryPage;

    else if ((year >= 1967) && (year < 1982) && (typ == "ENTRY")) return Hu4EntryPage;
    else if ((year >= 1967) && (year < 1982) && (typ == "DISTANT")) return Hu4EntryPage;
    else if ((year >= 1967) && (year < 1982) && (typ == "EXIT")) return Hu4EntryPage;
    else if ((year >= 1967) && (year < 1982) && (typ == "PROTECTION")) return Hu4EntryPage;

    else if ((year >= 1982) && (year < 2003) && (typ == "ENTRY")) return Hu5EntryPage;
    else if ((year >= 1982) && (year < 2003) && (typ == "EXIT")) return Hu5EntryPage;
    else if ((year >= 1982) && (year < 2003) && (typ == "DISTANT")) return Hu5EntryPage;
    else if ((year >= 1982) && (year < 2003) && (typ == "PROTECTION")) return Hu5EntryPage;

    else if ((year >= 2003) && (typ == "ENTRY")) return Hu6EntryPage;
    else if ((year >= 2003) && (typ == "EXIT")) return Hu6EntryPage;
    else if ((year >= 2003) && (typ == "DISTANT")) return Hu6EntryPage;
    else if ((year >= 2003) && (typ == "PROTECTION")) return Hu6EntryPage;
  }


    public getLightPage(typ: string,subtyp: string,year : Number) : any {
      if (year < 1967) return Hu1LightPage;
      else return Hu2LightPage;
    }


}

