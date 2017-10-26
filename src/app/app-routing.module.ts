import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { PublicModule } from './public/public.module';


const routes: Routes = [
  { 
    path: '', 
    component: PublicComponent, 
    children: [
      { path: 'public', loadChildren: './public/public.module#PublicModule' },
      { path: '', redirectTo: 'public', pathMatch: 'full' } 
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

