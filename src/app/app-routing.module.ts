import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableFilterComponent } from './table-filter/table-filter.component';

const routes: Routes = [
  {
    path:'', component: TableFilterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
