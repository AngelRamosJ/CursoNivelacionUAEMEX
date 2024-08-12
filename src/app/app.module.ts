import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { AlgebraComponent } from './componentes/algebra/algebra.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { OperacionesEnterosComponent } from './componentes/algebra/operaciones-enteros/operaciones-enteros.component';
import { OperacionesRacionalesComponent } from './componentes/algebra/operaciones-racionales/operaciones-racionales.component';
import { PropiedadesExponentesComponent } from './componentes/algebra/propiedades-exponentes/propiedades-exponentes.component';
import { PropiedadesLogaritmosComponent } from './componentes/algebra/propiedades-logaritmos/propiedades-logaritmos.component';
import { AlgebraSubtemasComponent } from './componentes/algebra/algebra-subtemas/algebra-subtemas.component';
import { TrigonometriaComponent } from './componentes/trigonometria/trigonometria.component';
import { TrigonometriaSubtemasComponent } from './componentes/trigonometria/trigonometria-subtemas/trigonometria-subtemas.component';
import { GeometriaComponent } from './componentes/geometria/geometria.component';
import { GeometriaSubtemasComponent } from './componentes/geometria/geometria-subtemas/geometria-subtemas.component';
import { SumaRestaOperacionesEnterosComponent } from './componentes/algebra/suma-resta-operaciones-enteros/suma-resta-operaciones-enteros.component';
import { MultiplicacionOperacionesEnterosComponent } from './componentes/algebra/multiplicacion-ops-ent/multiplicacion-operaciones-enteros.component';
import { PotenciaOperacionesEnterosComponent } from './componentes/algebra/potencia-operaciones-enteros/potencia-operaciones-enteros.component';
import { DivisionOperacionesEnterosComponent } from './componentes/algebra/division-operaciones-enteros/division-operaciones-enteros.component';
import { SumaRestaOperacionesFraccionariosComponent } from './componentes/algebra/suma-resta-ops-fracc/suma-resta-operaciones-fraccionarios.component';
import { MultiplicacionOperacionesFraccionariosComponent } from './componentes/algebra/multiplicacion-ops-fracc/multiplicacion-operaciones-fraccionarios.component';
import { DivisionOperacionesFraccionariosComponent } from './componentes/algebra/division-ops-fracc/division-operaciones-fraccionarios.component';
import { AyudaComponent } from './componentes/ayuda/ayuda.component';
import { SumaRestaPolinomiosComponent } from './componentes/algebra/suma-resta-polinomios/suma-resta-polinomios.component';
import { MultiplicacionPolinomiosComponent } from './componentes/algebra/multiplicacion-polinomios/multiplicacion-polinomios.component';
import { ProductoSumaDiferenciaComponent } from './componentes/algebra/producto-suma-diferencia/producto-suma-diferencia.component';
import { CuboBinomioComponent } from './componentes/algebra/cubo-binomio/cubo-binomio.component';
import { GeneralidadesFactorizacionComponent } from './componentes/algebra/generalidades-factorizacion/generalidades-factorizacion.component';
import { FactorComunAgrupadoComponent } from './componentes/algebra/factor-comun-agrupado/factor-comun-agrupado.component';
import { TrinomioPerfectoAdicionSustraccionComponent } from './componentes/algebra/trinomio-perf-adicion-sustra/trinomio-perfecto-adicion-sustraccion.component';
import { TrinomioEstandarX2Component } from './componentes/algebra/trinomio-estandar-x2/trinomio-estandar-x2.component';
import { TrinomioEstandarAx2Component } from './componentes/algebra/trinomio-estandar-ax2/trinomio-estandar-ax2.component';
import { CuboPerfectoBinomioComponent } from './componentes/algebra/cubo-perfecto-binomio/cubo-perfecto-binomio.component';
import { DiferenciaPotenciasIgualesComponent } from './componentes/algebra/diferencia-potencias-iguales/diferencia-potencias-iguales.component';
import { RacionalizacionDenominadorComunComponent } from './componentes/algebra/racionalizacion-denominador-comun/racionalizacion-denominador-comun.component';
import { RacionalizacionDenominadorBinomioComponent } from './componentes/algebra/racionalizacion-deno-binomio/racionalizacion-denominador-binomio.component';
import { SistemasEcuacionesBiIgualacionComponent } from './componentes/algebra/sistemas-ecuaciones-bi-igualacion/sistemas-ecuaciones-bi-igualacion.component';
import { SistemasEcuacionesBiSustitucionComponent } from './componentes/algebra/sistemas-ecs-bi-sustitucion/sistemas-ecuaciones-bi-sustitucion.component';
import { SistemasEcuacionesBiReduccionComponent } from './componentes/algebra/sistemas-ecuaciones-bi-reduccion/sistemas-ecuaciones-bi-reduccion.component';
import { SistemasEcuacionesBiDeterminantesComponent } from './componentes/algebra/sistemas-ecs-bi-determinantes/sistemas-ecuaciones-bi-determinantes.component';
import { SistemasEcuacionesTriSustitucionComponent } from './componentes/algebra/sistemas-ecs-tri-sustitucion/sistemas-ecuaciones-tri-sustitucion.component';
import { SistemasEcuacionesTriReduccionComponent } from './componentes/algebra/sistemas-ecuaciones-tri-reduccion/sistemas-ecuaciones-tri-reduccion.component';
import { SistemasEcuacionesTriDeterminantesComponent } from './componentes/algebra/sistemas-ecs-tri-determ/sistemas-ecuaciones-tri-determinantes.component';
import { PropiedadesDesigualdadesComponent } from './componentes/algebra/propiedades-desigualdades/propiedades-desigualdades.component';
import { InecuacionComponent } from './componentes/algebra/inecuacion/inecuacion.component';
import { EcuacinoesTrignometricasComponent } from './componentes/trigonometria/ecuacinoes-trignometricas/ecuacinoes-trignometricas.component';
import { ExpresionesTrigonometricasComponent } from './componentes/trigonometria/expresiones-trigonometricas/expresiones-trigonometricas.component';
import { GeneralidadesComponent } from './componentes/trigonometria/generalidades/generalidades.component';
import { IdentidadesTrigonometricasComponent } from './componentes/trigonometria/identidades-trigonometricas/identidades-trigonometricas.component';
import { LeyesSenosCosenosComponent } from './componentes/trigonometria/leyes-senos-cosenos/leyes-senos-cosenos.component';
import { RazonesTrigonometricasComponent } from './componentes/trigonometria/razones-trigonometricas/razones-trigonometricas.component';
import { RectasCortadasSecanteComponent } from './componentes/trigonometria/rectas-cortadas-secante/rectas-cortadas-secante.component';
import { RectasParalelasSecanteComponent } from './componentes/trigonometria/rectas-paralelas-secante/rectas-paralelas-secante.component';
import { DefinicionCircunferenciaComponent } from './componentes/geometria/definicion-circunferencia/definicion-circunferencia.component';
import { DefinicionElipseComponent } from './componentes/geometria/definicion-elipse/definicion-elipse.component';
import { DefinicionHiperbolaComponent } from './componentes/geometria/definicion-hiperbola/definicion-hiperbola.component';
import { DefinicionParabolaComponent } from './componentes/geometria/definicion-parabola/definicion-parabola.component';
import { DefinicionRectaComponent } from './componentes/geometria/definicion-recta/definicion-recta.component';
import { DistanciaDosPuntosComponent } from './componentes/geometria/distancia-dos-puntos/distancia-dos-puntos.component';
import { DistanciaPuntoRectaComponent } from './componentes/geometria/distancia-punto-recta/distancia-punto-recta.component';
import { EcuacionRectaComponent } from './componentes/geometria/ecuacion-recta/ecuacion-recta.component';
import { EjerciciosCircunferenciaComponent } from './componentes/geometria/ejercicios-circunferencia/ejercicios-circunferencia.component';
import { EjerciciosElipseComponent } from './componentes/geometria/ejercicios-elipse/ejercicios-elipse.component';
import { EjerciciosHiperbolaComponent } from './componentes/geometria/ejercicios-hiperbola/ejercicios-hiperbola.component';
import { EjerciciosParabolaComponent } from './componentes/geometria/ejercicios-parabola/ejercicios-parabola.component';
import { InterseccionRectasComponent } from './componentes/geometria/interseccion-rectas/interseccion-rectas.component';
import { PendienteComponent } from './componentes/geometria/pendiente/pendiente.component';
import { PuntoMedioSegmentoComponent } from './componentes/geometria/punto-medio-segmento/punto-medio-segmento.component';
import { PuntoSegmentoRazonComponent } from './componentes/geometria/punto-segmento-razon/punto-segmento-razon.component';
import { SegmentoRectaComponent } from './componentes/geometria/segmento-recta/segmento-recta.component';
import { DivisionPolinomiosComponent } from './componentes/algebra/division-polinomios/division-polinomios.component';
import { BinomioCuadradoComponent } from './componentes/algebra/binomio-cuadrado/binomio-cuadrado.component';
import { TrinomioCuadradoComponent } from './componentes/algebra/trinomio-cuadrado/trinomio-cuadrado.component';
import { TrianguloPascalComponent } from './componentes/algebra/triangulo-pascal/triangulo-pascal.component';
import { FactorComunComponent } from './componentes/algebra/factor-comun/factor-comun.component';
import { TrinomioPerfectoComponent } from './componentes/algebra/trinomio-perfecto/trinomio-perfecto.component';
import { DiferenciaCuadradosComponent } from './componentes/algebra/diferencia-cuadrados/diferencia-cuadrados.component';
import { DiferenciaCubosComponent } from './componentes/algebra/diferencia-cubos/diferencia-cubos.component';
import { SimplificacionExpresionesAlgebraicasComponent } from './componentes/algebra/simplificacion-exprs-algebra/simplificacion-expresiones-algebraicas.component';
import { EcuacionesLinealesComponent } from './componentes/algebra/ecuaciones-lineales/ecuaciones-lineales.component';
import { EcuacionesCuadraticasComponent } from './componentes/algebra/ecuaciones-cuadraticas/ecuaciones-cuadraticas.component';
import { ClasificacionAngulosComponent } from './componentes/trigonometria/clasificacion-angulos/clasificacion-angulos.component';
import { ClasificacionTriangulosComponent } from './componentes/trigonometria/clasificacion-triangulos/clasificacion-triangulos.component';
import { TriangulosRectangulosEjemplosComponent } from './componentes/trigonometria/triangulos-rectangulos-ej/triangulos-rectangulos-ejemplos.component';
import { TriangulosOblicuangulosEjemplosComponent } from './componentes/trigonometria/triangulos-oblicuangulos-ej/triangulos-oblicuangulos-ejemplos.component';
import { TeoremaPritagorasComponent } from './componentes/trigonometria/teorema-pritagoras/teorema-pritagoras.component';
import { ReferenciasAlgebraComponent } from './componentes/algebra/referencias-algebra/referencias-algebra.component';
import { ReferenciasTrigonometriaComponent } from './componentes/trigonometria/referencias-trigonometria/referencias-trigonometria.component';
import { ReferenciasGeometriaComponent } from './componentes/geometria/referencias-geometria/referencias-geometria.component';


@NgModule({
  declarations: [
    AppComponent,
    AlgebraComponent,
    InicioComponent,
    OperacionesEnterosComponent,
    OperacionesRacionalesComponent,
    PropiedadesExponentesComponent,
    PropiedadesLogaritmosComponent,
    AlgebraSubtemasComponent,
    TrigonometriaComponent,
    TrigonometriaSubtemasComponent,
    GeometriaComponent,
    GeometriaSubtemasComponent,
    SumaRestaOperacionesEnterosComponent,
    MultiplicacionOperacionesEnterosComponent,
    PotenciaOperacionesEnterosComponent,
    DivisionOperacionesEnterosComponent,
    SumaRestaOperacionesFraccionariosComponent,
    MultiplicacionOperacionesFraccionariosComponent,
    DivisionOperacionesFraccionariosComponent,
    AyudaComponent,
    SumaRestaPolinomiosComponent,
    MultiplicacionPolinomiosComponent,
    ProductoSumaDiferenciaComponent,
    DivisionPolinomiosComponent,
    BinomioCuadradoComponent,
    CuboBinomioComponent,
    TrinomioCuadradoComponent,
    TrianguloPascalComponent,
    GeneralidadesFactorizacionComponent,
    FactorComunComponent,
    FactorComunAgrupadoComponent,
    TrinomioPerfectoComponent,
    DiferenciaCuadradosComponent,
    TrinomioPerfectoAdicionSustraccionComponent,
    TrinomioEstandarX2Component,
    TrinomioEstandarAx2Component,
    CuboPerfectoBinomioComponent,
    DiferenciaCubosComponent,
    DiferenciaPotenciasIgualesComponent,
    RacionalizacionDenominadorComunComponent,
    RacionalizacionDenominadorBinomioComponent,
    SimplificacionExpresionesAlgebraicasComponent,
    EcuacionesLinealesComponent,
    EcuacionesCuadraticasComponent,
    SistemasEcuacionesBiIgualacionComponent,
    SistemasEcuacionesBiSustitucionComponent,
    SistemasEcuacionesBiReduccionComponent,
    SistemasEcuacionesBiDeterminantesComponent,
    SistemasEcuacionesTriSustitucionComponent,
    SistemasEcuacionesTriReduccionComponent,
    SistemasEcuacionesTriDeterminantesComponent,
    PropiedadesDesigualdadesComponent,
    InecuacionComponent,
    ClasificacionAngulosComponent,
    ClasificacionTriangulosComponent,
    EcuacinoesTrignometricasComponent,
    ExpresionesTrigonometricasComponent,
    GeneralidadesComponent,
    IdentidadesTrigonometricasComponent,
    LeyesSenosCosenosComponent,
    RazonesTrigonometricasComponent,
    RectasCortadasSecanteComponent,
    RectasParalelasSecanteComponent,
    DefinicionCircunferenciaComponent,
    DefinicionElipseComponent,
    DefinicionHiperbolaComponent,
    DefinicionParabolaComponent,
    DefinicionRectaComponent,
    DistanciaDosPuntosComponent,
    DistanciaPuntoRectaComponent,
    EcuacionRectaComponent,
    EjerciciosCircunferenciaComponent,
    EjerciciosElipseComponent,
    EjerciciosHiperbolaComponent,
    EjerciciosParabolaComponent,
    InterseccionRectasComponent,
    PendienteComponent,
    PuntoMedioSegmentoComponent,
    PuntoSegmentoRazonComponent,
    SegmentoRectaComponent,
    TriangulosRectangulosEjemplosComponent,
    TriangulosOblicuangulosEjemplosComponent,
    TeoremaPritagorasComponent,
    ReferenciasAlgebraComponent,
    ReferenciasTrigonometriaComponent,
    ReferenciasGeometriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
