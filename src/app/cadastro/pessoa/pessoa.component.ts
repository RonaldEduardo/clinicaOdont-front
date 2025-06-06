import { Component, OnInit } from '@angular/core';
import { Pessoa } from './models/pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {
  pessoas: Pessoa[] = [];

  displayedColumns = ['nome', 'idade'];

  constructor() {
    this.pessoas = [
      { _id: '1' ,nome: 'João da Silva', idade: 30 },
      { _id: '2' ,nome: 'Maria Oliveira', idade: 25 },
      { _id: '3' ,nome: 'Pedro Santos', idade: 40 },
      { _id: '4' ,nome: 'Ana Costela', idade: 35 },
      { _id: '5' ,nome: 'Lucas Pereira', idade: 28 },
      { _id: '6' ,nome: 'Fernanda Lima', idade: 32 },
      { _id: '7' ,nome: 'Roberto Almeida', idade: 45 },
      { _id: '8' ,nome: 'Carla Souza', idade: 29 },
      { _id: '9' ,nome: 'Marcos Rocha', idade: 38 },
      { _id: '10' ,nome: 'Luciana Martins', idade: 27 }
    ]
  }

  ngOnInit(): void {

  }
}
