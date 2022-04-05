class Darbuotojas{
    constructor (
        private _vardas:string,
        private _pavarde:string,
        protected _atlyginimas:number
    ){

    }

    public get atlyginimas(){
        return this._atlyginimas;
    }
    public get vardas(){
        return this._vardas;
    }
    public get pavarde(){
        return this._pavarde;
    }

    public set atlyginimas(atlyginimas){
        this._atlyginimas = atlyginimas;
    }

    public gpm(){
        return this._atlyginimas*0.2;
    }
    public psd(){
        return this._atlyginimas*0.0698;
    }
    public vsd(){
        return this._atlyginimas*0.1252;
    }
}

class PirmaeilisDarbuotojas extends Darbuotojas{
    private _npd:number = 0;

    private perskaiciuotiNPD(){
        if (this._atlyginimas < 730){
            this._npd = 460;
        }
        if (this._atlyginimas > 730 && this._atlyginimas < 1678){
            this._npd = 460 - 0.26*(this._atlyginimas - 730);
        }
        if (this._atlyginimas > 1678){
            this._npd = 460- 0.18*(this._atlyginimas - 642);
        }
    }

    public get npd(){
        this.perskaiciuotiNPD()
        return this._npd;
    }

    public override gpm(){
        return (this._atlyginimas - this.npd)*0.2;
    }
}

class PraktikantasDarbuotojas extends Darbuotojas{
    constructor(
        _vardas:string,
        _pavarde:string,
    ){
        super(_vardas, _pavarde, 0);
    }
}

const d1 = new PirmaeilisDarbuotojas("Jonas", "Jonaitis", 1000);
const d2 = new Darbuotojas("Petras", "Petraitis", 1000);
const d3 = new PraktikantasDarbuotojas("Petras", "Petraitis");

console.log(d1.gpm());
console.log(d2.gpm());
console.log(d3.gpm());