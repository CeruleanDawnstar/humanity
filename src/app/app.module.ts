import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InventionComponent } from './invention/invention.component';
import { EvenementComponent } from './evenement/evenement.component';
import { FooterComponent } from './footer/footer.component';
import { DetailInventionComponent } from './detail-invention/detail-invention.component';
import { DetailEvenementComponent } from './detail-evenement/detail-evenement.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    InventionComponent,
    EvenementComponent,
    FooterComponent,
    DetailInventionComponent,
    DetailEvenementComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
