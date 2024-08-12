import { Component, OnInit } from '@angular/core';
import { TemaService } from 'src/app/servicios/tema.service';
import { Tema } from 'src/app/modelos/tema';

@Component({
  selector: 'app-algebra',
  templateUrl: './algebra.component.html',
  styleUrls: ['./algebra.component.css'],
  providers: [TemaService]
})
export class AlgebraComponent implements OnInit {
  public temasAlgebra: any;

  constructor(private _temaService: TemaService) { 
    this.temasAlgebra = this._temaService.getTemasAlgebra().subTemas;
  }

  ngOnInit(): void {
  }

}
