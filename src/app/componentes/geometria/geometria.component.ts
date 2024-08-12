import { Component, OnInit } from '@angular/core';
import { TemaService } from 'src/app/servicios/tema.service';

@Component({
  selector: 'app-geometria',
  templateUrl: './geometria.component.html',
  styleUrls: ['./geometria.component.css'],
  providers: [TemaService]
})
export class GeometriaComponent implements OnInit {
  public temasGeometria: any;
  
  constructor(private _temaService: TemaService) { 
    this.temasGeometria = this._temaService.getTemasGeometria().subTemas;
  }

  ngOnInit(): void {
  }

}
