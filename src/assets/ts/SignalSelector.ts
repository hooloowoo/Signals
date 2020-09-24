import {Injectable} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {TranslateService} from "@ngx-translate/core";

@Injectable()
export class SignalSelector {




    public signals=[{id:"FORM",title:"FORM_SIGNALS"},{id:"LIGHT",title:"LIGHT_SIGNALS"},{id:"BLOCK_I",title:"AUT_BLOCK"}];

    public eras=[
        {from: 0, to: 1938,
         types: [
            {typ: "ENTRY",subtyp:"THREEASPECT",state:"on",disttyp:"",diststate:"on"},
            {typ: "EXIT",subtyp:"TWOASPECT",state:"on",disttyp:"",diststate:"on"},
            {typ: "EXIT",subtyp:"THREEASPECT",state:"on",disttyp:"",diststate:"on"},
            {typ: "EXIT",subtyp:"FOURASPECT",state:"on",disttyp:"",diststate:"on"},
            {typ: "PROTECTION",subtyp:"PLATE",state:"on",disttyp:"",diststate:"on"},
            {typ: "PROTECTION",subtyp:"DISC",state:"on",disttyp:"",diststate:"on"},
            {typ: "PROTECTION",subtyp:"CONE",state:"on",disttyp:"",diststate:"on"},
            {typ: "PROTECTION",subtyp:"TWOASPECT",state:"on",disttyp:"",diststate:"on"},
            {typ: "DISTANT",subtyp:"PLATE",state:"on",disttyp:"",diststate:"on"},
            {typ: "DISTANT",subtyp:"DISC",state:"on",disttyp:"",diststate:"on"},
            {typ: "SHUNT",subtyp:"TWOASPECT",state:"on",disttyp:"",diststate:"on"},
            ]
        },{from: 1939, to: 1946,
            types: [
                {typ: "ENTRY",subtyp:"THREEASPECT",state:"on",disttyp:"TWOASPECT",diststate:"on"},
                {typ: "EXIT",subtyp:"TWOASPECT",state:"on",disttyp:""},
                {typ: "ENTRY",subtyp:"THREEASPECT",state:"on",disttyp:"THREEASPECT",diststate:"on"},
                {typ: "EXIT",subtyp:"THREEASPECT",state:"on",disttyp:""},
                {typ: "DISTANT",subtyp:"",state:"on",disttyp:"TWOASPECT"},
                {typ: "EXIT",subtyp:"FOURASPECT",state:"on",disttyp:""},
                {typ: "DISTANT",subtyp:"",state:"on",disttyp:"THREEASPECT"},
                {typ: "PROTECTION",subtyp:"TWOASPECT",state:"on",disttyp:"",diststate:"on"},
                {typ: "DISTANT",subtyp:"PROTECTION",state:"on",disttyp:"TWOASPECT"},
                {typ: "PROTECTION",subtyp:"CONE",state:"on",disttyp:"",diststate:"on"},
                {typ: "SHUNT",subtyp:"TWOASPECT",state:"on",disttyp:"",diststate:"on"},
            ]
        },{from: 1947, to: 1966,
            types: [
                {typ: "ENTRY",subtyp:"THREEASPECT",state:"on",disttyp:"TWOASPECT",diststate:"on"},
                {typ: "EXIT",subtyp:"TWOASPECT",state:"on",disttyp:""},
                {typ: "ENTRY",subtyp:"THREEASPECT",state:"on",disttyp:"THREEASPECT",diststate:"on"},
                {typ: "EXIT",subtyp:"THREEASPECT",state:"on",disttyp:""},
                {typ: "ENTRY",subtyp:"FOURASPECT",state:"on",disttyp:"TWOASPECT",diststate:"on"},
                {typ: "EXIT",subtyp:"FOURASPECT",state:"on",disttyp:""},
                {typ: "ENTRY",subtyp:"FOURASPECT",state:"on",disttyp:"THREEASPECT",diststate:"on"},
                {typ: "DISTANT",subtyp:"",state:"on",disttyp:"TWOASPECT"},
                {typ: "DISTANT",subtyp:"",state:"on",disttyp:"THREEASPECT"},
                {typ: "PROTECTION",subtyp:"TWOASPECT",state:"on",disttyp:"",diststate:"on"},
                {typ: "DISTANT",subtyp:"PROTECTION",state:"on",disttyp:"TWOASPECT"},
                {typ: "PROTECTION",subtyp:"CONE",state:"on",disttyp:"",diststate:"on"},
                {typ: "SHUNT",subtyp:"TWOASPECT",state:"on",disttyp:"",diststate:"on"},
            ]
        },{from: 1967, to: 1981,
            types: [
                {typ: "ENTRY",subtyp:"THREEASPECT",state:"on",disttyp:"TWOASPECT",diststate:"on"},
                {typ: "EXIT",subtyp:"TWOASPECT",state:"on",disttyp:""},
                {typ: "ENTRY",subtyp:"THREEASPECT",state:"on",disttyp:"THREEASPECT",diststate:"on"},
                {typ: "EXIT",subtyp:"THREEASPECT",state:"on",disttyp:""},
                {typ: "DISTANT",subtyp:"",state:"on",disttyp:"TWOASPECT"},
                {typ: "DISTANT",subtyp:"",state:"on",disttyp:"THREEASPECT"},
                {typ: "PROTECTION",subtyp:"TWOASPECT",state:"on",disttyp:"",diststate:"on"},
                {typ: "DISTANT",subtyp:"PROTECTION",state:"on",disttyp:"TWOASPECT"},
                {typ: "PROTECTION",subtyp:"CONE",state:"on",disttyp:"",diststate:"on"},
                {typ: "SHUNT",subtyp:"TWOASPECT",state:"on",disttyp:"",diststate:"on"},
            ]
        },{from: 1982, to: 2002,
            types: [
                {typ: "ENTRY",subtyp:"THREEASPECT",state:"on",disttyp:"TWOASPECT",diststate:"on"},
                {typ: "EXIT",subtyp:"TWOASPECT",state:"on",disttyp:""},
                {typ: "ENTRY",subtyp:"THREEASPECT",state:"on",disttyp:"THREEASPECT",diststate:"on"},
                {typ: "DISTANT",subtyp:"",state:"on",disttyp:"TWOASPECT"},
                {typ: "DISTANT",subtyp:"",state:"on",disttyp:"THREEASPECT"},
                {typ: "PROTECTION",subtyp:"TWOASPECT",state:"on",disttyp:"",diststate:"on"},
                {typ: "DISTANT",subtyp:"PROTECTION",state:"on",disttyp:"TWOASPECT"},
                {typ: "SHUNT",subtyp:"TWOASPECT",state:"on",disttyp:"",diststate:"on"},
            ]
        },{from: 2003, to: 3000,
            types: [
                {typ: "ENTRY",subtyp:"THREEASPECT",state:"on",disttyp:"TWOASPECT",diststate:"on"},
                {typ: "EXIT",subtyp:"TWOASPECT",state:"on",disttyp:""},
                {typ: "ENTRY",subtyp:"THREEASPECT",state:"on",disttyp:"THREEASPECT",diststate:"on"},
                {typ: "DISTANT",subtyp:"",state:"on",disttyp:"TWOASPECT"},
                {typ: "DISTANT",subtyp:"",state:"on",disttyp:"THREEASPECT"},
                {typ: "PROTECTION",subtyp:"TWOASPECT",state:"on",disttyp:"",diststate:"on"},
                {typ: "DISTANT",subtyp:"PROTECTION",state:"on",disttyp:"TWOASPECT"},
                {typ: "SHUNT",subtyp:"TWOASPECT",state:"on",disttyp:"",diststate:"on"},
            ]
        }
    ];

    public selectedSignal="FORM"; // LIGHT

    public selectedYear=1939;
    public selectedTyp : any;

    constructor(public translate : TranslateService) {
        this.selectedTyp={typ:"ENTRY",subtyp:"THREEASPECT", disttyp: "THREEASPECT", diststate: "slow"};

    }


    public getName(typ : any) : string {
        if ((typ.typ == "ENTRY") && (typ.subtyp == "THREEASPECT") && ((typ.disttyp == "TWOASPECT") || (typ.disttyp == ""))) return "ENTRY";
        if ((typ.typ == "PROTECTION") && (typ.subtyp == "PLATE")) return "PROTECTION_PLATE";
        if ((typ.typ == "PROTECTION") && (typ.subtyp == "DISC")) return "PROTECTION_DISC";
        if ((typ.typ == "PROTECTION") && (typ.subtyp == "CONE")) return "PROTECTION_CONE";
        if ((typ.typ == "ENTRY") && (typ.subtyp == "THREEASPECT") && (typ.disttyp == "THREEASPECT")) return "ENTRY_DIST_THREEASPECT";
        if ((typ.typ == "ENTRY") && (typ.subtyp == "FOURASPECT") && (typ.disttyp == "TWOASPECT")) return "ENTRY_DIST_TWOASPECT";
        if ((typ.typ == "ENTRY") && (typ.subtyp == "FOURASPECT") && (typ.disttyp == "THREEASPECT")) return "ENTRY_FOURASPECT_DIST_THREEASPECT";
        if ((typ.typ == "EXIT") && (typ.subtyp == "TWOASPECT")) return "EXIT";
        if ((typ.typ == "EXIT") && (typ.subtyp == "THREEASPECT")) return "EXIT_THREEASPECT";
        if ((typ.typ == "EXIT") && (typ.subtyp == "FOURASPECT")) return "EXIT_FOURASPECT";

        if ((typ.typ == "EXIT") && (typ.subtyp == "TWOASPECT_BRAKE")) return "EXIT_TWOASPECT_BRAKE";
        if ((typ.typ == "EXIT") && (typ.subtyp == "THREEASPECT_BRAKE")) return "EXIT_THREEASPECT_BRAKE";
        if ((typ.typ == "EXIT") && (typ.subtyp == "FOURASPECT_BRAKE")) return "EXIT_FOURASPECT_BRAKE";

        if ((typ.typ == "DISTANT") && (typ.disttyp == "TWOASPECT")) {
            return (typ.subtyp == "PROTECTION" ? "DISTANT_PROTECTION" : "DISTANT");
        }
        if ((typ.typ == "DISTANT") && (typ.subtyp == "PLATE")) return "DISTANT_PLATE";
        if ((typ.typ == "DISTANT") && (typ.subtyp == "DISC")) return "DISTANT_DISC";

        if ((typ.typ == "DISTANT") && (typ.subtyp == "REPEATER")) return "DISTANT_REPEATER";

        if ((typ.typ == "DISTANT") && (typ.disttyp == "THREEASPECT")) return "DISTANT_THREEASPECT";
        if (typ.typ == "PROTECTION") return "PROTECTION";
        if (typ.typ == "SHUNT" && ((typ.subtyp == "") || (typ.subtyp == "TWOASPECT"))) return "SHUNT";
        if (typ.typ == "SHUNT" && (typ.subtyp == "DWARF")) return "SHUNT_DWARF";
        if (typ.typ == "HUMP") return "HUMP";

        if (typ.typ == "MAIN" && (typ.subtyp == "MAIN")) return "MAIN";
        if (typ.typ == "MAIN" && (typ.subtyp == "BLOCK")) return "MAIN_BLOCK";
        if (typ.typ == "MAIN" && (typ.subtyp == "BLOCK_BRAKE")) return "MAIN_BLOCK_BRAKE";
        if (typ.typ == "MAIN" && (typ.subtyp == "LASTBLOCK")) return "MAIN_LASTBLOCK";
        if (typ.typ == "MAIN" && (typ.subtyp == "LASTBLOCK_BRAKE")) return "MAIN_LASTBLOCK_BRAKE";

        return typ.typ+":"+typ.subtyp;
    }


    private getEraNrOfYear(year : Number) : any {
        let pEras=this.getErasOfSelectedSignal();
        for(let i=0;i < pEras.length;i++) {
            if ((pEras[i].from <= year) && (pEras[i].to >= year)) return i;
        }
        return 0;
    }


    private getEraOfYear(year : Number) : any {
        let pEras=this.getErasOfSelectedSignal();
        for(let i=0;i < pEras.length;i++) {
            if ((pEras[i].from <= year) && (pEras[i].to >= year)) return pEras[i];
        }
    }


    public getSignalButtons() : any {
        return this.signals;
    }


    public getEraName(year : Number) : string {
        let era=this.getEraOfYear(year);
        if (era !== undefined) {
            return ""+(era.from == 0 ? " - " : era.from)+" "+(era.to > 2100 ? " - " : era.to);
        }
    }


    public getTypeButtons() : any {
        let era=this.getEraOfYear(this.selectedYear);
        if (era !== undefined) {
            let ret=[];
            for(let j=0;j < era.types.length;j++) {
                let t=era.types[j];
                ret.push({title: this.getName(t),typ:t});
            }
            return ret;
        }
    }

    public getSelectedTyp() : any {
        this.setSelectedYearFormEraNr(this.getEraNrOfYear(this.selectedYear));
        return {signal:this.selectedSignal, typ : this.selectedTyp,year: this.selectedYear};
    }



    public setSelectedTyp(typ : any) {
        this.selectedTyp=typ;
    }

    public setSelectedSignal(typ : any) {
        this.selectedSignal=typ;
    }

    public getEraButtons() : any {
        let pEras=this.getErasOfSelectedSignal();
        let ret=[];
        for(let i=0;i < pEras.length;i++) {
            ret.push({nr: i,title:""+(pEras[i].from == 0 ? "\n" : pEras[i].from)+" - "+(pEras[i].to > 2100 ? "\n" : pEras[i].to)});
        }
        return ret;
    }

    public setSelectedYearFormEraNr(nr : any) {
        let pEras=this.getErasOfSelectedSignal();
        if (nr < pEras.length) {
            this.selectedYear=(pEras[nr].from == 0 ? pEras[nr].to : pEras[nr].from);
        }
        let fnd=false;
        for(let i=0;i < pEras[nr].types.length;i++) {
            let typ=pEras[nr].types[i];
            if ((typ.typ == this.selectedTyp.typ) && (typ.subtyp == this.selectedTyp.subtyp) && (typ.disttyp == this.selectedTyp.disttyp)) {
                fnd=true;
                this.selectedTyp=pEras[nr].types[i];
                break;
            }
        }
        if (!fnd) {
            this.selectedTyp=pEras[nr].types[0];
        }

    }

    public getSignalTypeName() {
        for(let i=0;i < this.signals.length;i++) {
            if (this.signals[i].id == this.selectedSignal) return this.signals[i].title;
        }
    }


    getErasOfSelectedSignal() {
        switch(this.selectedSignal) {
            case "FORM" : return this.eras;
            case "LIGHT" : return this.lighteras;
            case "BLOCK_I" : return this.lgblockeras;
        }
    }

// LIGHT SIGNAL


    public lighteras=[
        {from: 1939, to: 1946,
            types: [
                {typ: "EXIT",subtyp:"TWOASPECT",state:"on",disttyp:""},
                {typ: "ENTRY",subtyp:"THREEASPECT",state:"on",disttyp:"TWOASPECT",diststate:"on"},
                {typ: "EXIT",subtyp:"THREEASPECT",state:"on",disttyp:""},
                {typ: "SHUNT",subtyp:"",state:"on",disttyp:"",diststate:"on"},
                {typ: "EXIT",subtyp:"FOURASPECT",state:"on",disttyp:""},
                {typ: "DISTANT",subtyp:"",state:"on",disttyp:"TWOASPECT"},
                {typ: "PROTECTION",subtyp:"TWOASPECT",state:"on",disttyp:"",diststate:"on"},
                {typ: "DISTANT",subtyp:"PROTECTION",state:"on",disttyp:"TWOASPECT"},
            ]
        },{from: 1947, to: 1951,
            types: [
                {typ: "EXIT",subtyp:"TWOASPECT",state:"on",disttyp:""},
                {typ: "ENTRY",subtyp:"THREEASPECT",state:"on",disttyp:"TWOASPECT",diststate:"on"},
                {typ: "EXIT",subtyp:"THREEASPECT",state:"on",disttyp:""},
                {typ: "ENTRY",subtyp:"THREEASPECT",state:"on",disttyp:"THREEASPECT",diststate:"on"},
                {typ: "EXIT",subtyp:"FOURASPECT",state:"on",disttyp:""},
                {typ: "DISTANT",subtyp:"",state:"on",disttyp:"TWOASPECT"},
                {typ: "PROTECTION",subtyp:"TWOASPECT",state:"on",disttyp:"",diststate:"on"},
                {typ: "DISTANT",subtyp:"",state:"on",disttyp:"THREEASPECT"},
                {typ: "SHUNT",subtyp:"",state:"on",disttyp:"",diststate:"on"},
                {typ: "DISTANT",subtyp:"PROTECTION",state:"on",disttyp:"TWOASPECT"},
            ]
        },{from: 1952, to: 1966,
            types: [
                {typ: "EXIT",subtyp:"TWOASPECT",state:"on",disttyp:""},
                {typ: "ENTRY",subtyp:"THREEASPECT",state:"on",disttyp:"TWOASPECT",diststate:"on"},
                {typ: "EXIT",subtyp:"THREEASPECT",state:"on",disttyp:""},
                {typ: "ENTRY",subtyp:"THREEASPECT",state:"on",disttyp:"THREEASPECT",diststate:"on"},
                {typ: "EXIT",subtyp:"FOURASPECT",state:"on",disttyp:""},
                {typ: "ENTRY",subtyp:"FOURASPECT",state:"on",disttyp:"TWOASPECT",diststate:"on"},
                {typ: "ENTRY",subtyp:"FOURASPECT",state:"on",disttyp:"THREEASPECT",diststate:"on"},
                {typ: "DISTANT",subtyp:"",state:"on",disttyp:"TWOASPECT"},
                {typ: "PROTECTION",subtyp:"TWOASPECT",state:"on",disttyp:"",diststate:"on"},
                {typ: "DISTANT",subtyp:"",state:"on",disttyp:"THREEASPECT"},
                {typ: "SHUNT",subtyp:"",state:"on",disttyp:"",diststate:"on"},
                {typ: "DISTANT",subtyp:"PROTECTION",state:"on",disttyp:"TWOASPECT"},
            ]
        },{from: 1967, to: 3000,
            types: [
                {typ: "MAIN",subtyp:"MAIN",state:"on",disttyp:"",diststate:""},
                {typ: "DISTANT",subtyp:"",state:"on",disttyp:"TWOASPECT"},
                {typ: "DISTANT",subtyp:"REPEATER",state:"on",disttyp:"THREEASPECT"},
                {typ: "MAIN",subtyp:"BLOCK",state:"on",disttyp:"",diststate:""},
                {typ: "MAIN",subtyp:"LASTBLOCK",state:"on",disttyp:"",diststate:""},
                {typ: "PROTECTION",subtyp:"TWOASPECT",state:"on",disttyp:"",diststate:"on"},
                {typ: "DISTANT",subtyp:"PROTECTION",state:"on",disttyp:"TWOASPECT"},
                {typ: "SHUNT",subtyp:"",state:"on",disttyp:"",diststate:"on"},
                {typ: "SHUNT",subtyp:"DWARF",state:"on",disttyp:"",diststate:"on"},
//                {typ: "HUMP",subtyp:"TWOASPECT",state:"on",disttyp:"",diststate:"on"},
            ]
        }
    ];

    public lgblockeras=[{from: 1952, to: 1966,
            types: [
                {typ: "MAIN",subtyp:"LASTBLOCK",state:"on",disttyp:"",diststate:""},
//                {typ: "MAIN",subtyp:"LASTBLOCK_BRAKE",state:"on",disttyp:"",diststate:""},
                {typ: "MAIN",subtyp:"BLOCK",state:"on",disttyp:"",diststate:""},
                {typ: "MAIN",subtyp:"BLOCK_BRAKE",state:"on",disttyp:"",diststate:""},
                {typ: "EXIT",subtyp:"TWOASPECT",state:"on",disttyp:""},
                {typ: "EXIT",subtyp:"TWOASPECT_BRAKE",state:"on",disttyp:""},
                {typ: "EXIT",subtyp:"THREEASPECT",state:"on",disttyp:""},
                {typ: "EXIT",subtyp:"THREEASPECT_BRAKE",state:"on",disttyp:""},
                {typ: "EXIT",subtyp:"FOURASPECT",state:"on",disttyp:""},
                {typ: "EXIT",subtyp:"FOURASPECT_BRAKE",state:"on",disttyp:""},
            ]
        }];


}
