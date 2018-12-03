import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { EstudantesComponent } from './estudantes/estudantes.component';
import { PainelComponent } from './painel/painel.component';
import { EstudanteDetalheComponent } from './estudante-detalhe/estudante-detalhe.component';

const routes: Routes = [
{ path: '', redirectTo: '/painel', pathMatch: 'full' },
{ path: 'painel', component: PainelComponent },
{ path: 'estudantes', component: EstudantesComponent },
{ path: 'detalhe/:id', component: EstudanteDetalheComponent }
];

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ],

})


export class AppRoutingModule {}
