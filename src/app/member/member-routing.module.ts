import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberpageComponent } from './memberpage.component';

const routes: Routes = [
  {path:'member',component: MemberpageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
