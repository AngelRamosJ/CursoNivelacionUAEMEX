import { Component, OnInit } from '@angular/core';
import { TemaService } from 'src/app/servicios/tema.service';

@Component({
  selector: 'app-trigonometria',
  templateUrl: './trigonometria.component.html',
  styleUrls: ['./trigonometria.component.css'],
  providers: [TemaService]
})
export class TrigonometriaComponent implements OnInit {
  public temasTrigonometria: any;

  constructor(private _temaService: TemaService) { 
    this.temasTrigonometria = this._temaService.getTemasTrigonometria().subTemas;
  }

  ngOnInit(): void {
  }

}
