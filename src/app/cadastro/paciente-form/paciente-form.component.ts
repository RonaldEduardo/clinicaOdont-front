import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.scss']
})
export class PacienteFormComponent implements OnInit {

  form: FormGroup

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      nomeCompleto: [null],
      documento: [null]
    })
   }

  ngOnInit(): void {
  }

}
