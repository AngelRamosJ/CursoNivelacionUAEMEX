import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TemaService } from 'src/app/servicios/tema.service';

@Component({
  selector: 'app-algebra-subtemas',
  templateUrl: './algebra-subtemas.component.html',
  styleUrls: ['./algebra-subtemas.component.css'],
  providers: [TemaService]
})
export class AlgebraSubtemasComponent implements OnInit, DoCheck {
  public subTema: String; 
  public temasAlgebra: String[];

  constructor(
    private route: ActivatedRoute,
    private _temaService: TemaService
    ) {
    this.subTema = '';
    this.temasAlgebra = [];
    this.generarArrayTemasAlgebra();
  }

  compruebaTema(indice: number): boolean{
    return this.temasAlgebra.indexOf(this.subTema) == indice;
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.subTema = String(this.route.snapshot.paramMap.get('subtema'));
  }

  private generarArrayTemasAlgebra(){
    let temasAlgebra = this._temaService.getTemasAlgebra().subTemas;
    let subtemasA;
    for(let i=0; i<temasAlgebra.length; i++){
      if(temasAlgebra[i].subtemas.length == 0){
        this.temasAlgebra.push(temasAlgebra[i].tema);
      }
      if(temasAlgebra[i].tag == 'T1'){
        
        for(let j=0; j<temasAlgebra[i].subtemas.length; j++){
          this.temasAlgebra.push(temasAlgebra[i].subtemas[j]);
        }
      }else{
        subtemasA = temasAlgebra[i].subtemas;
        for(let j=0; j<subtemasA.length; j++){
          if(subtemasA[j].subtemas.length == 0){
            this.temasAlgebra.push(subtemasA[j].tema);
          }
          for(let k=0; k<subtemasA[j].subtemas.length; k++){
            this.temasAlgebra.push(subtemasA[j].subtemas[k]);
          }
        }
      }
    }
  }

}
