import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UniversitiesTableComponent} from "./components/universities-table/universities-table.component";

const routes: Routes = [
  {path: 'universities-table', component: UniversitiesTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
