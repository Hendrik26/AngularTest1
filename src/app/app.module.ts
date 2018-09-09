import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { AppComponent } from './app.component';
import { FormularComponent } from './formular/formular.component';
import { ListeComponent } from './liste/liste.component';
import {DemoService} from './demo.service';
import { HttpModule }    from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    FormularComponent,
    ListeComponent
  ],
  imports: [HttpModule,
    BrowserModule,
      FormsModule,
  ],
  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
