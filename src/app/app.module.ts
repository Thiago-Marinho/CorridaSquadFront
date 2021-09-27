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
import { CorridaComponent } from './components/corrida/corrida/corrida.component';

@NgModule({
  declarations: [
    AppComponent,
    CarroComponent,
    CarroAlterarComponent,
    PilotoComponent,
    PilotoAlterarComponent,
    CorridaComponent,
    ServicoComponent,
    MecanicoComponent
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
