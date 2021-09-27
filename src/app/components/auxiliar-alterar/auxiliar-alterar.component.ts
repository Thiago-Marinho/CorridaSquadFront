import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Auxiliar } from 'src/app/entities/auxiliar';
import { AuxiliarService } from 'src/app/services/auxiliar.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-auxiliar-alterar',
  templateUrl: './auxiliar-alterar.component.html',
  styleUrls: ['./auxiliar-alterar.component.css']
})
export class AuxiliarAlterarComponent implements OnInit {
  auxiliar: Auxiliar = {
    id:0,
    id_equipe:0,
    id_mecanico:0,
    nome:''
  }
  @Input() id?:Number
  constructor(private route: ActivatedRoute, private location: Location, private auxiliarService : AuxiliarService) { }

  ngOnInit(): void {
    this.loadAuxiliar()
  }

  loadAuxiliar(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.auxiliar.id = id
  }

  alterar(): void
  {
    if(this.auxiliar){
      this.auxiliarService.alterar(this.auxiliar).subscribe(resp => {console.log(resp)})
    }
    
  }

  goBack():void {
    this.location.back()
  }

}
