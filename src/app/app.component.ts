import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'curso-nivelacion-uaemex';
  
  ngOnInit(): void{
    $("#linea-horizontal-inicio").animate({
      width: '60px'
    });
    $("#link-inicio").css("color","#0A262B");
    $("#img-inicio").css("filter","invert(0)");
  }

  mantenLineaInicio(){
    
    $("#linea-horizontal-inicio").animate({
      width: '60px'
    });
    $("#linea-horizontal-algebra").animate({
      width: '0px'
    });
    $("#linea-horizontal-trigonometria").animate({
      width: '0px'
    });
    $("#linea-horizontal-geometria").animate({
      width: '0px'
    });
    $("#linea-horizontal-ayuda").animate({
      width: '0px'
    });
    $("#img-inicio").css("filter","invert(0)");
    $("#link-algebra").css("color","#FFFFFF");
    $("#img-algebra").css("filter","invert(1)");
    $("#link-trigonometria").css("color","#FFFFFF");
    $("#img-trigonometria").css("filter","invert(1)");
    $("#link-geometria").css("color","#FFFFFF");
    $("#img-geometria").css("filter","invert(1)");
    $("#img-ayuda").css("filter","invert(1)");

  }

  mantenLineaAlgebra(){
    $("#linea-horizontal-inicio").animate({
      width: '0px'
    });
    $("#linea-horizontal-algebra").animate({
      width: '145px'
    });
    $("#linea-horizontal-trigonometria").animate({
      width: '0px'
    });
    $("#linea-horizontal-geometria").animate({
      width: '0px'
    });
    $("#linea-horizontal-ayuda").animate({
      width: '0px'
    });
    $("#img-inicio").css("filter","invert(1)");
    $("#link-algebra").css("color","#0A262B");
    $("#img-algebra").css("filter","invert(0)");
    $("#link-trigonometria").css("color","#FFFFFF");
    $("#img-trigonometria").css("filter","invert(1)");
    $("#link-geometria").css("color","#FFFFFF");
    $("#img-geometria").css("filter","invert(1)");
    $("#img-ayuda").css("filter","invert(1)");
  }

  mantenLineaTrigonometria(){
    $("#linea-horizontal-inicio").animate({
      width: '0px'
    });
    $("#linea-horizontal-algebra").animate({
      width: '0px'
    });
    $("#linea-horizontal-trigonometria").animate({
      width: '205px'
    });
    $("#linea-horizontal-geometria").animate({
      width: '0px'
    });
    $("#linea-horizontal-ayuda").animate({
      width: '0px'
    });
    $("#img-inicio").css("filter","invert(1)");
    $("#link-algebra").css("color","#FFFFFF");
    $("#img-algebra").css("filter","invert(1)");
    $("#link-trigonometria").css("color","#0A262B");
    $("#img-trigonometria").css("filter","invert(0)");
    $("#link-geometria").css("color","#FFFFFF");
    $("#img-geometria").css("filter","invert(1)");
    $("#img-ayuda").css("filter","invert(1)");
  }

  mantenLineaGeometria(){
    $("#linea-horizontal-inicio").animate({
      width: '0px'
    });
    $("#linea-horizontal-algebra").animate({
      width: '0px'
    });
    $("#linea-horizontal-trigonometria").animate({
      width: '0px'
    });
    $("#linea-horizontal-geometria").animate({
      width: '170px'
    });
    $("#linea-horizontal-ayuda").animate({
      width: '0px'
    });
    $("#img-inicio").css("filter","invert(1)");
    $("#link-algebra").css("color","#FFFFFF");
    $("#img-algebra").css("filter","invert(1)");
    $("#link-trigonometria").css("color","#FFFFFF");
    $("#img-trigonometria").css("filter","invert(1)");
    $("#link-geometria").css("color","#0A262B");
    $("#img-geometria").css("filter","invert(0)");
    $("#img-ayuda").css("filter","invert(1)");
  }

  mantenLineaAyuda(){
    
    $("#linea-horizontal-inicio").animate({
      width: '0px'
    });
    $("#linea-horizontal-algebra").animate({
      width: '0px'
    });
    $("#linea-horizontal-trigonometria").animate({
      width: '0px'
    });
    $("#linea-horizontal-geometria").animate({
      width: '0px'
    });
    $("#linea-horizontal-ayuda").animate({
      width: '60px'
    });
    $("#img-inicio").css("filter","invert(1)");
    $("#link-algebra").css("color","#FFFFFF");
    $("#img-algebra").css("filter","invert(1)");
    $("#link-trigonometria").css("color","#FFFFFF");
    $("#img-trigonometria").css("filter","invert(1)");
    $("#link-geometria").css("color","#FFFFFF");
    $("#img-geometria").css("filter","invert(1)");
    $("#img-ayuda").css("filter","invert(0)");
  
  }

}

