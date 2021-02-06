import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiCalcComponent } from './components/pi-calc/pi-calc.component';
import { InventorySimComponent } from './components/inventory-sim/inventory-sim.component';

@NgModule({
  declarations: [AppComponent, PiCalcComponent, InventorySimComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
