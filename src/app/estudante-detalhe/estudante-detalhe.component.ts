import { Component, OnInit, Input } from '@angular/core';
import { Estudante } from '../estudantes/estudante';
import { EstudanteService } from '../estudante.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estudante-detalhe',
  templateUrl: './estudante-detalhe.component.html',
  styleUrls: ['./estudante-detalhe.component.css']
})
export class EstudanteDetalheComponent implements OnInit {

  @Input() estudante: Estudante;

  constructor(
    private route: ActivatedRoute,
    private estudanteService: EstudanteService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getEstudante();
  }

  getEstudante(): void {
    const id = +this.route.snapshot.paramMap.get(id);
    this.estudanteService.getEstudante(id)
    .subscribe(estudante => this.estudante = estudante);
  }
}
