import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { PacienteComponent } from './paciente/paciente.component';
import { PacienteFormComponent } from './paciente-form/paciente-form.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    PacienteComponent,
    PacienteFormComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CadastroModule { }
