import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TemaService } from 'src/app/servicios/tema.service';

@Component({
  selector: 'app-trigonometria-subtemas',
  templateUrl: './trigonometria-subtemas.component.html',
  styleUrls: ['./trigonometria-subtemas.component.css'],
  providers: [TemaService]
})
export class TrigonometriaSubtemasComponent implements OnInit {
  public subTema: String; 
  public temasTrigonometria: String[];

  constructor(
    private route: ActivatedRoute,
    private _temaService: TemaService
    ) {
    this.subTema = '';
    this.temasTrigonometria = [];
    this.generarArrayTemasTrigonometria();
  }

  compruebaTema(indice: number): boolean{
    return this.temasTrigonometria.indexOf(this.subTema) == indice;
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.subTema = String(this.route.snapshot.paramMap.get('subtema'));
  }

  private generarArrayTemasTrigonometria(){
    let temasTrigonometria = this._temaService.getTemasTrigonometria().subTemas;
    let subtemasT;
    for(let i=0; i<temasTrigonometria.length; i++){
      if(temasTrigonometria[i].subtemas.length == 0){
        this.temasTrigonometria.push(temasTrigonometria[i].tema);
      }
      if(temasTrigonometria[i].tag == 'T1'){
        
        for(let j=0; j<temasTrigonometria[i].subtemas.length; j++){
          this.temasTrigonometria.push(temasTrigonometria[i].subtemas[j]);
        }
      }else{
        subtemasT = temasTrigonometria[i].subtemas;
        for(let j=0; j<subtemasT.length; j++){
          if(subtemasT[j].subtemas.length == 0){
            this.temasTrigonometria.push(subtemasT[j].tema);
          }
          for(let k=0; k<subtemasT[j].subtemas.length; k++){
            this.temasTrigonometria.push(subtemasT[j].subtemas[k]);
          }
        }
      }
    }
  }

}
