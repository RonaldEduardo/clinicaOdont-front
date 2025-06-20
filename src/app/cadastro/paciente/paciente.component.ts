import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { Paciente } from './models/paciente';
import { CadastroService } from '../service/CadastroService.service';
import { Observable, catchError, delay, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit {
  pacientes$!: Observable<Paciente[]>;

  displayedColumns = ['id', 'nome', 'documento', 'ativo', 'actions'];

  constructor(
    private cadastroService: CadastroService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onError(errorMensage: string): void {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMensage
    });
  }

  ngOnInit(): void {
    this.pacientes$ = this.cadastroService.list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar pacientes.');
          return of([])
        })
      );
  }

  onAdd(): void {
    this.router.navigate(['create'], { relativeTo: this.route });
  }
}
