import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

const routes: Routes = [
  {path:'', component: HeroesComponent},
  {path:'heroes', component: HeroesComponent},
  {path:'heroe/:id', component: HeroeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'home', component:HomeComponent},
  {path: 'busqueda/:id', component: BusquedaComponent},
  {path: '**', component:HomeComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

