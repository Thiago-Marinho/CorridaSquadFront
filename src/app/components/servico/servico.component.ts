import { Component, OnInit } from '@angular/core';
import { servico } from 'src/app/entities/servico';
import { ServicoService } from 'src/app/services/servico.service';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {

  boolPostForm: boolean = false
  servico: servico = {
    id: 0,
    id_carro: 0,
    id_mecanico: 0,
    descricao: '',
    data_servico: ''
  }

  servicos: servico[] = []

  constructor(private servicoService: ServicoService) { }

  ngOnInit(): void {
    this.listar()
  }

  showPostForm(): void{
    this.boolPostForm = true
  }

  hidePostForm(): void{
    this.boolPostForm = false
  }

  save(descricao: string, data_servico: string, id_mecanico: number, id_carro: number): void {
    this.servico = {
      id: 0,
      id_carro: id_carro,
      id_mecanico: id_mecanico,
      descricao: descricao,
      data_servico: data_servico
    }
    this.servicoService.incluir(this.servico).subscribe(servico => {this.servicos.push(servico); this.listar()})
    
    this.hidePostForm()
  }

  listar(): void
  {
    this.servicoService.listar().subscribe(resp => this.servicos = resp)
  }



}
