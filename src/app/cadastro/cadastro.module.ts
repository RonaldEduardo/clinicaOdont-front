import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { PessoaComponent } from './pessoa/pessoa.component';



@NgModule({
  declarations: [
    PessoaComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    AppMaterialModule
  ]
})
export class CadastroModule { }
