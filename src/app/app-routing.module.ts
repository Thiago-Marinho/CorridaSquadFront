import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarroAlterarComponent } from './components/carro-alterar/carro-alterar.component';
import { CarroComponent } from './components/carro/carro.component';
import { CorridaComponent } from './components/corrida/corrida/corrida.component';
import { PilotoAlterarComponent } from './components/piloto-alterar/piloto-alterar.component';
import { PilotoComponent } from './components/piloto/piloto.component';
import { ServicoAlterarComponent } from './components/servico-alterar/servico-alterar.component';
import { ServicoComponent } from './components/servico/servico.component';
import { MecanicoComponent } from './components/mecanico/mecanico.component';
import { MecanicoAlterarComponent } from './components/mecanico-alterar/mecanico-alterar.component';


const routes: Routes = [
  { path: "carro", component: CarroComponent},
  { path: "carro/alterar/:id", component: CarroAlterarComponent},
  { path: "piloto", component: PilotoComponent},
  { path: "piloto/alterar/:id", component: PilotoAlterarComponent},
<<<<<<< HEAD
  { path: "servico", component: ServicoComponent},
  { path: "mecanico", component:MecanicoComponent},
  { path: "mecanico/alterar/:id", component:MecanicoAlterarComponent}
=======
  { path: "corrida", component: CorridaComponent},
  { path: "servico", component: ServicoComponent},
  { path: "servico/alterar/:id", component: ServicoAlterarComponent}
  // { path: "", component: },
  // { path: "", component: },
>>>>>>> 56c559047402da50d5d5d764a8cda2c0e623a435
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
