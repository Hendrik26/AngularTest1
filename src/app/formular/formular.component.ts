import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formular',
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.css']
})
export class FormularComponent implements OnInit {

    const ZEILEN: Zeile[] = [
        { feld01: 11, feld02: 'Mr. Nice' },
        { feld01: 12, feld02: 'Narco' }
    ];

  constructor() { }

  ngOnInit() {
  }

}
