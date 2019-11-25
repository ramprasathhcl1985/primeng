import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimeNgComponent } from './prime-ng/prime-ng.component';


const routes: Routes = [
  {path: 'primeng', component: PrimeNgComponent},
  { path: '',  redirectTo: '/primeng', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
