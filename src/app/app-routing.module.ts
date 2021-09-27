import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarroAlterarComponent } from './components/carro-alterar/carro-alterar.component';
import { CarroComponent } from './components/carro/carro.component';
import { PilotoAlterarComponent } from './components/piloto-alterar/piloto-alterar.component';
import { PilotoComponent } from './components/piloto/piloto.component';
import { ServicoComponent } from './components/servico/servico.component';
import { MecanicoComponent } from './components/mecanico/mecanico.component';
import { MecanicoAlterarComponent } from './components/mecanico-alterar/mecanico-alterar.component';

const routes: Routes = [
  { path: "carro", component: CarroComponent},
  { path: "carro/alterar/:id", component: CarroAlterarComponent},
  { path: "piloto", component: PilotoComponent},
  { path: "piloto/alterar/:id", component: PilotoAlterarComponent},
  { path: "servico", component: ServicoComponent},
  { path: "mecanico", component:MecanicoComponent},
  { path: "mecanico/alterar/:id", component:MecanicoAlterarComponent}
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
