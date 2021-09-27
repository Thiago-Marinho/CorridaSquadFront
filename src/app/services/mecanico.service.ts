import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mecanico } from '../entities/mecanico';
@Injectable({
  providedIn: 'root'
})
export class MecanicoService {

  url = 'http://localhost:8080/mecanico'

  constructor(private http: HttpClient) { }


  loadMecanico(id: number): Observable<mecanico>
  {
    const getUrl = `${this.url}/${id}`
    return this.http.get<mecanico>(getUrl)
  }

  listar()
  {
    return this.http.get<mecanico[]>(`${this.url}/listar`)
  }

  incluir(novoMecanico: mecanico): Observable<mecanico>
  {
    return this.http.post<mecanico>(`${this.url}/incluir`, novoMecanico)
  }

  alterar(mecanico: mecanico): Observable<any>
  {
    return this.http.put<any>(`${this.url}/alterar`, mecanico)
  }
}
