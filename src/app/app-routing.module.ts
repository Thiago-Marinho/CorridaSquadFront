import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarroAlterarComponent } from './components/carro-alterar/carro-alterar.component';
import { CarroComponent } from './components/carro/carro.component';
import { CorridaComponent } from './components/corrida/corrida/corrida.component';
import { PilotoAlterarComponent } from './components/piloto-alterar/piloto-alterar.component';
import { PilotoComponent } from './components/piloto/piloto.component';
import { ServicoAlterarComponent } from './components/servico-alterar/servico-alterar.component';
import { ServicoComponent } from './components/servico/servico.component';


const routes: Routes = [
  { path: "carro", component: CarroComponent},
  { path: "carro/alterar/:id", component: CarroAlterarComponent},
  { path: "piloto", component: PilotoComponent},
  { path: "piloto/alterar/:id", component: PilotoAlterarComponent},
  { path: "corrida", component: CorridaComponent},
  { path: "servico", component: ServicoComponent},
  { path: "servico/alterar/:id", component: ServicoAlterarComponent}
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
