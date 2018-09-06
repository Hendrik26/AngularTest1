import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formular',
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.css']
})
export class FormularComponent implements OnInit {

    ZEILEN;
    pFeld01: string;
    pFeld02: string;


    addZeile(): void {
        this.ZEILEN.push({feld01: this.pFeld01, feld02: this.pFeld02});
        this.pFeld01 = "Feld01";
        this.pFeld02 = "Feld02";
        console.log("Zeile hinzugefügt");
    }

  constructor() { }

  ngOnInit() {
     this.ZEILEN =  [{ feld01: 11, feld02: 'Mr. Nice' }, { feld01: 12, feld02: 'Narco' }];
     this.pFeld01 = "Feld01";
     this.pFeld02 = "Feld02";
  }

}
