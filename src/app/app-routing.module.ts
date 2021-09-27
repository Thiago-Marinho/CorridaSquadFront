import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarroAlterarComponent } from './components/carro-alterar/carro-alterar.component';
import { CarroComponent } from './components/carro/carro.component';

const routes: Routes = [
  { path: "carro", component: CarroComponent},
  { path: "carro/alterar/:id", component: CarroAlterarComponent}
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: },
  // { path: "", component: }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
