import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AppComponent } from './app.component';
import { InventionComponent } from './invention/invention.component';
import { EvenementComponent } from './evenement/evenement.component';
import { DetailInventionComponent } from './detail-invention/detail-invention.component';
import { DetailEvenementComponent } from './detail-evenement/detail-evenement.component';


const routes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "invention", component: InventionComponent},
  {path: "evenement", component: EvenementComponent},
  {path: "invention/detail", component: DetailInventionComponent},
  {path: "evenement/detail", component: DetailEvenementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
