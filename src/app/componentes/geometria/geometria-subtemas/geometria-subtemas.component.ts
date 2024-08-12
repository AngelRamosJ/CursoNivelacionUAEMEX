import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TemaService } from 'src/app/servicios/tema.service';

@Component({
  selector: 'app-geometria-subtemas',
  templateUrl: './geometria-subtemas.component.html',
  styleUrls: ['./geometria-subtemas.component.css'],
  providers: [TemaService]
})
export class GeometriaSubtemasComponent implements OnInit {
  public subTema: String; 
  public temasGeometria: String[];

  constructor(
    private route: ActivatedRoute,
    private _temaService: TemaService
    ) {
    this.subTema = '';
    this.temasGeometria = [];
    this.generarArrayTemasGeometria();
  }

  compruebaTema(indice: number): boolean{
    return this.temasGeometria.indexOf(this.subTema) == indice;
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.subTema = String(this.route.snapshot.paramMap.get('subtema'));
  }

  private generarArrayTemasGeometria(){
    let temasGeometria = this._temaService.getTemasGeometria().subTemas;
    let subtemasG;
    for(let i=0; i<temasGeometria.length; i++){
      if(temasGeometria[i].subtemas.length == 0){
        this.temasGeometria.push(temasGeometria[i].tema);
      }
      if(temasGeometria[i].tag == 'T1'){
        
        for(let j=0; j<temasGeometria[i].subtemas.length; j++){
          this.temasGeometria.push(temasGeometria[i].subtemas[j]);
        }
      }else{
        subtemasG = temasGeometria[i].subtemas;
        for(let j=0; j<subtemasG.length; j++){
          if(subtemasG[j].subtemas.length == 0){
            this.temasGeometria.push(subtemasG[j].tema);
          }
          for(let k=0; k<subtemasG[j].subtemas.length; k++){
            this.temasGeometria.push(subtemasG[j].subtemas[k]);
          }
        }
      }
    }
  }

}
