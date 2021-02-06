import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventorySimComponent } from './components/inventory-sim/inventory-sim.component';
import { PiCalcComponent } from './components/pi-calc/pi-calc.component';

const routes: Routes = [
  { path: 'pi-calc', component: PiCalcComponent },
  { path: 'inventory-sim', component: InventorySimComponent },
  {
    path: '**',
    redirectTo: 'pi-calc',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
