import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarroComponent } from './components/carro/carro.component';
import { CarroAlterarComponent } from './components/carro-alterar/carro-alterar.component';
import { PilotoComponent } from './components/piloto/piloto.component';
import { PilotoAlterarComponent } from './components/piloto-alterar/piloto-alterar.component';
import { ServicoComponent } from './components/servico/servico.component';
import { MecanicoComponent } from './components/mecanico/mecanico.component';
import { ServicoAlterarComponent } from './components/servico-alterar/servico-alterar.component';
import { CorridaComponent } from './components/corrida/corrida/corrida.component';
import { AuxiliarComponent } from './components/auxiliar/auxiliar.component';
import { AuxiliarAlterarComponent } from './components/auxiliar-alterar/auxiliar-alterar.component';
import { CorridaCarroPilotoComponent } from './components/corrida-carro-piloto/corrida-carro-piloto.component';
import { CorridaCarroPilotoAlterarComponent } from './components/corrida-carro-piloto-alterar/corrida-carro-piloto-alterar.component';
import { MecanicoAlterarComponent } from './components/mecanico-alterar/mecanico-alterar.component';
import { CarroCorridaPilotoAlterarComponent } from './components/carro-corrida-piloto-alterar/carro-corrida-piloto-alterar.component';
import { CarroCorridaPilotoComponent } from './components/carro-corrida-piloto/carro-corrida-piloto.component';

@NgModule({
  declarations: [
    AppComponent,
    CarroComponent,
    CarroAlterarComponent,
    PilotoComponent,
    PilotoAlterarComponent,
    CorridaComponent,
    ServicoComponent,
    MecanicoComponent,
    ServicoAlterarComponent,
    AuxiliarComponent,
    AuxiliarAlterarComponent
    CorridaCarroPilotoComponent,
    CorridaCarroPilotoAlterarComponent,
    MecanicoAlterarComponent,
    CarroCorridaPilotoAlterarComponent,
    CarroCorridaPilotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
