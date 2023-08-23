import { Component } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroeComponent } from "./components/heroes/heroe.component";

const app_routes:Routes=[
    {path:'**',pathMatch:'full',redirectTo:'home'}, 
    {path:'heroes',component: HeroesComponent},
    {path:'heroe/:id',component: HeroeComponent}
]

export const APP_ROUTING = RouterModule.forRoot(app_routes);

