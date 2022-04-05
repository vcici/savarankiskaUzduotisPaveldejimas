"use strict";
class Darbuotojas {
    constructor(_vardas, _pavarde, _atlyginimas) {
        this._vardas = _vardas;
        this._pavarde = _pavarde;
        this._atlyginimas = _atlyginimas;
    }
    get atlyginimas() {
        return this._atlyginimas;
    }
    get vardas() {
        return this._vardas;
    }
    get pavarde() {
        return this._pavarde;
    }
    set atlyginimas(atlyginimas) {
        this._atlyginimas = atlyginimas;
    }
    gpm() {
        return this._atlyginimas * 0.2;
    }
    psd() {
        return this._atlyginimas * 0.0698;
    }
    vsd() {
        return this._atlyginimas * 0.1252;
    }
}
class PirmaeilisDarbuotojas extends Darbuotojas {
    constructor() {
        super(...arguments);
        this._npd = 0;
    }
    perskaiciuotiNPD() {
        if (this._atlyginimas < 730) {
            this._npd = 460;
        }
        if (this._atlyginimas > 730 && this._atlyginimas < 1678) {
            this._npd = 460 - 0.26 * (this._atlyginimas - 730);
        }
        if (this._atlyginimas > 1678) {
            this._npd = 460 - 0.18 * (this._atlyginimas - 642);
        }
    }
    get npd() {
        this.perskaiciuotiNPD();
        return this._npd;
    }
    gpm() {
        return (this._atlyginimas - this.npd) * 0.2;
    }
}
class PraktikantasDarbuotojas extends Darbuotojas {
    constructor(_vardas, _pavarde) {
        super(_vardas, _pavarde, 0);
    }
}
const d1 = new PirmaeilisDarbuotojas("Jonas", "Jonaitis", 1000);
const d2 = new Darbuotojas("Petras", "Petraitis", 1000);
const d3 = new PraktikantasDarbuotojas("Petras", "Petraitis");
console.log(d1.gpm());
console.log(d2.gpm());
console.log(d3.gpm());
