import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeComponent } from './products/font-size/font-size.component';
import {FormsModule} from '@angular/forms';
import { PetComponent } from './products/pet/pet.component';
import { CaculatorComponent } from './products/caculator/caculator.component';
import { ColorComponent } from './products/color/color.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeComponent,
    PetComponent,
    CaculatorComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
