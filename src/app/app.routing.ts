import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './componentes/inicio/inicio.component';
import { AlgebraComponent } from './componentes/algebra/algebra.component';
import { OperacionesEnterosComponent } from './componentes/algebra/operaciones-enteros/operaciones-enteros.component';
import { OperacionesRacionalesComponent } from './componentes/algebra/operaciones-racionales/operaciones-racionales.component';
import { PropiedadesExponentesComponent } from './componentes/algebra/propiedades-exponentes/propiedades-exponentes.component';
import { PropiedadesLogaritmosComponent } from './componentes/algebra/propiedades-logaritmos/propiedades-logaritmos.component';
import { AlgebraSubtemasComponent } from './componentes/algebra/algebra-subtemas/algebra-subtemas.component';
import { TrigonometriaComponent } from './componentes/trigonometria/trigonometria.component';
import { TrigonometriaSubtemasComponent } from './componentes/trigonometria/trigonometria-subtemas/trigonometria-subtemas.component';
import { GeometriaComponent } from './componentes/geometria/geometria.component';
import { GeometriaSubtemasComponent } from './componentes/geometria/geometria-subtemas/geometria-subtemas.component';
import { AyudaComponent } from './componentes/ayuda/ayuda.component';

const appRoutes: Routes = [
	{path: 'inicio', component: InicioComponent},
    {path: 'algebra', component: AlgebraComponent,
        children:[
            {path: ':subtema', component: AlgebraSubtemasComponent}
        ]},
    {path: 'trigonometria', component: TrigonometriaComponent,
        children:[
            {path: ':subtema', component: TrigonometriaSubtemasComponent}
        ]},
    {path: 'geometria', component: GeometriaComponent,
        children:[
            {path: ':subtema', component: GeometriaSubtemasComponent}
        ]},
    {path: 'ayuda', component: AyudaComponent},
	{path: '**', component: InicioComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
