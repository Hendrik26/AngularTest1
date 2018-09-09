import { Component, OnInit } from '@angular/core';
import {DemoService} from '../demo.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-formular',
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.css']
})
export class FormularComponent implements OnInit {

    zeilen;
    pFeld01: string;
    pFeld02: string;
    public foods;
    public food_name;


    addZeile(): void {
        if (this.pFeld01 === '') return;
        if (this.pFeld02 === '') return;
        if (this.zeilen === undefined) {
            this.zeilen = [{feld01: this.pFeld01, feld02: this.pFeld02}];}
        else {
            this.zeilen.push({feld01: this.pFeld01, feld02: this.pFeld02});}

        this.pFeld01 = '';
        this.pFeld02 = '';
        console.log('Zeile hinzugefügt');

    }

    delZeile(index): void {
        this.zeilen.splice(index ,1);
    }

  constructor(public _demoService: DemoService) { }

  ngOnInit() {
      this.pFeld01 = "";
      this.pFeld02 = "";
      //
  }

    getFoods() {
        this._demoService.getFoods().subscribe(
            // the first argument is a function which runs on success
            data => { this.foods = data},
            // the second argument is a function which runs on error
            err => console.error(err),
            // the third argument is a function which runs on completion
            () => console.log('done loading foods')
        );
    }

    createFood() {
        let food = {name: 'mmm'};
        this._demoService.createFood(food).subscribe(
            data => {
                // refresh the list
                this.getFoods();
                return true;
            },
            error => {
                console.error("Error saving food!");
                return Observable.throw(error);
            }
        );
    }


}
