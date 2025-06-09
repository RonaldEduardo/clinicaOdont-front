import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { SituacaoPipe } from './pipes/situacao.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    SituacaoPipe
  ],
  imports: [
    AppMaterialModule,
    CommonModule
  ],
  exports: [
    ErrorDialogComponent,
    SituacaoPipe
  ]
})
export class SharedModule { }
