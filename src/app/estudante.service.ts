import { Injectable } from '@angular/core';
import {Estudante} from './estudantes/estudante';
import { ESTUDANTES } from './mock-estudantes';
import { Observable, of } from 'rxjs';
import { MensagemService } from './mensagem.service';


@Injectable({
  providedIn: 'root'
})

export class EstudanteService {

  constructor(private mensagemService: MensagemService) { }

  getEstudantes(): Observable<Estudante[]> {
    this.mensagemService.adicionar('EstudanteService: estudantes obtidos');
      return of(ESTUDANTES);
  }

 getEstudante(id: number): Observable<Estudante> {
   this.mensagemService.adicionar('EstudanteService: obtido estudante com id=${id}');
   return of(ESTUDANTES.find(estudantes => estudantes.id === id));
 }

}
