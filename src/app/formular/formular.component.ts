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
        if (this.pFeld01 == "") return;
        if (this.pFeld02 == "") return;
        if (this.ZEILEN == undefined) {
            this.ZEILEN = [{feld01: this.pFeld01, feld02: this.pFeld02}];}
        else {
            this.ZEILEN.push({feld01: this.pFeld01, feld02: this.pFeld02});}

        this.pFeld01 = "";
        this.pFeld02 = "";
        console.log("Zeile hinzugefügt");
    }

    delZeile(index): void {
        this.ZEILEN.splice(index ,1);
    }

  constructor() { }

  ngOnInit() {
      this.pFeld01 = "";
      this.pFeld02 = "";
  }


}
