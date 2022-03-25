import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HeroesComponent } from './heroes/heroes.component';
import { HeroesComponent } from './hero-module/heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroDetailComponent } from './hero-module/hero-detail/hero-detail.component';
import { AddNavComponent } from './hero-module/add-nav/add-nav.component';
import { AddHeroComponent } from './hero-module/add-nav/add-hero/add-hero.component';
import { AddPowerComponent } from './hero-module/add-nav/add-power/add-power.component';
const routes: Routes = [
  {path: 'addheroes', component: AddHeroComponent},
  {path: 'addpower', component: AddPowerComponent},
  { path: 'add', component: AddNavComponent},
  {path: 'heroes', component : HeroesComponent},
   {path: 'dashboard', component: DashboardComponent},
   {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
   {path: 'detail/:id', component: HeroDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}
)
export class AppRoutingModule { }
