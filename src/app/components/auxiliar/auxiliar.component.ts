import { Component, OnInit } from '@angular/core';
import { Auxiliar } from 'src/app/entities/auxiliar';
import { AuxiliarService } from 'src/app/services/auxiliar.service';

@Component({
  selector: 'app-auxiliar',
  templateUrl: './auxiliar.component.html',
  styleUrls: ['./auxiliar.component.css']
})
export class AuxiliarComponent implements OnInit {
  boolPostForm=false;
  auxiliar!: Auxiliar;
  auxiliares: Auxiliar[] = []

  constructor(private auxiliarService : AuxiliarService) { }

  ngOnInit(): void {
    this.listar()
  }

  showPostForm(){
    this.boolPostForm = true
  }

  hidePostForm(){
    this.boolPostForm = false
  }

  save(nome: string, id_mecanico: string, idEquipe: string){
    this.auxiliar = {
      id:0,
      id_equipe:Number(idEquipe),
      id_mecanico:Number(id_mecanico),
      nome:nome
    }
    this.auxiliarService.incluir(this.auxiliar).subscribe(auxiliar => {this.auxiliares.push(auxiliar); this.listar()})
    
    this.hidePostForm()
  }

  listar(): void
  {
    this.auxiliarService.listar().subscribe(resp => this.auxiliares = resp)
  }

}
