import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';
import { PersonaComponent } from './persona/persona.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { Calculadora2Component } from './calculadora2/calculadora2.component';
import { CedulasComponent } from './cedulas/cedulas.component';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { PokeTableComponent } from './components/poke-table/poke-table.component';



const routes: Routes = [
  { path: 'Producto', component: ProductoComponent },
  { path: 'Persona', component: PersonaComponent },
  { path: 'Noticias', component: NoticiasComponent },
  { path: 'Calculadora', component: Calculadora2Component },
  { path: 'Cedulas', component: CedulasComponent },
  { path: 'home', component: PokeTableComponent },
  { path: 'pokeDetail/:id', component: PokeDetailComponent },
  // para link vacios
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  //para rutas distorcionadas
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
