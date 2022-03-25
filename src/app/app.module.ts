import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
// import { HeroesComponent } from './heroes/heroes.component';
import { HeroesComponent } from './hero-module/heroes/heroes.component';
// import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroDetailComponent } from './hero-module/hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './Service/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
// import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroSearchComponent } from './hero-module/hero-search/hero-search.component';
import { AddNavComponent } from './hero-module/add-nav/add-nav.component';
import { AddHeroComponent } from './hero-module/add-nav/add-hero/add-hero.component';
// import { AddHeroComponent } from './hero-module/Add-nav/add-hero/add-hero.component';
import { AddPowerComponent } from './hero-module/add-nav/add-power/add-power.component';
// import { AddPowerComponent } from './hero-module/Add-nav/add-power/add-power.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    AddNavComponent,
    AddHeroComponent,
    AddPowerComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation : false}
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
