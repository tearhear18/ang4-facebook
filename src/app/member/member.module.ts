import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { MemberpageComponent } from './memberpage.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { PostComponent } from './components/body/post/post.component';

@NgModule({
  imports: [
    CommonModule,
    MemberRoutingModule
  ],
  declarations: [MemberpageComponent, HeaderComponent, BodyComponent, PostComponent]
})
export class MemberModule { }
