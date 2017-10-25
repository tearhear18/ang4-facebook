import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistrationComponent } from './components/body/registration/registration.component';
import { LoginComponent } from './components/header/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule
  ],
  declarations: [PublicComponent, HeaderComponent, BodyComponent, FooterComponent, RegistrationComponent, LoginComponent]
})
export class PublicModule { }
