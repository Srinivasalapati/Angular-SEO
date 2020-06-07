import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from '../app/about-us/about-us.component'
import { Inner1Component } from '../app/inner1/inner1.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'about' , component: AboutUsComponent},
  {path: 'inner' , component: Inner1Component},
  {path: 'custom' , loadChildren: './custom/custom.module#CustomModule'},
  {path: '**' , component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
