import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { PublicModule } from './public/public.module';

import { MemberModule } from './member/member.module';
import { MemberpageComponent } from './member/memberpage.component'

const routes: Routes = [
  { 
    path: '', 
    component: PublicComponent, 
    children: [
      { path: '', loadChildren: () => PublicModule }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

