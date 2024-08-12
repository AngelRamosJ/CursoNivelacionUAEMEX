import { Injectable } from '@angular/core';
import { Tema } from '../modelos/tema';

@Injectable()
export class TemaService{
	temas: Tema[];

	constructor(){
		this.temas = [];

		let subtemasAlgebra = [
			{
				tema: 'Operaciones con Números Enteros',
				subtemas: ['Suma y Resta Entera', 'Multiplicación Entera', 'Potencia Entera', 'División Entera'],
				tag: 'T1'
			},
			{
				tema: 'Operaciones con Números Fraccionarios',
				subtemas: ['Suma y Resta Fraccionaria', 'Multiplicación Fraccionaria', 'División Fraccionaria'],
				tag: 'T1'
			},
			{
				tema: 'Propiedades de los Exponentes',
				subtemas: [],
				tag: 'T1'
			},
			{
				tema: 'Propiedades de los Logaritmos',
				subtemas: [],
				tag: 'T1'
			},
			{
				tema: 'Operaciones con Polinomios',
				tag: 'T2',
				subtemas: [
					{
						tema: 'Suma y Resta de Polinomios',
						subtemas: [],
						tag: 'T1'
					},
					{
						tema: 'Multiplicación de Polinomios',
						subtemas: [],
						tag: 'T1'
					},
					{
						tema: 'División de Polinomios',
						subtemas: [],
						tag: 'T1'
					},
					{
						tema: 'Productos Notables',
						subtemas: ['Binomio al Cuadrado', 'Producto de la Suma por la Diferencia', 'Cubo de un Binomio', 'Trinomio al Cuadrado', 'Triángulo de Pascal'],
						tag: 'T1'
					},
					{
						tema: 'Factorización',
						subtemas: [
							'Generalidades', 
							'Caso 1. Factor Común',
							'Caso 2. Factor Común Agrupado',
							'Caso 3. Trinomio Cuadrado Perfecto',
							'Caso 4. Diferencia de Cuadrados Perfectos',
							'Caso 5. Trinomio Cuadrado Perfecto por Adición y Sustracción',
							'Caso 6. Trinomio x^2+bx+c',
							'Caso 7. Trinomio ax^2+bx+c',
							'Caso 8. Cubo Perfecto de Binomios',
							'Caso 9. Suma o Diferencia de Cubos Perfectos',
							'Caso 10. Suma o Diferencia de 2 Potencias Iguales'],
						tag: 'T1'
					}
				]
			},
			{
				tema: 'Racionalización',
				subtemas: ['Denominador Común','Denominador Binomio'],
				tag: 'T1'
			},
			{
				tema: 'Simplificación de Expresiones Algebraicas',
				subtemas: [],
				tag: 'T1'
			},
			{
				tema: 'Solución de Ecuaciones',
				tag: 'T2',
				subtemas: [
					{
						tema: 'Solución de Ecuaciones Lineales',
						subtemas: [],
						tag: 'T1'
					},
					{
						tema: 'Solución de Ecuaciones Cuadráticas',
						subtemas: []
					}
				],
			},
			{
				tema: 'Sistemas de Ecuaciones',
				tag: 'T2',
				subtemas: [
					{
						tema: 'Métodos de Eliminación de Sistemas de Ecuaciones de 2x2',
						subtemas: ['Eliminación por Igualación 2x2','Eliminación por Sustitución 2x2','Método de Reducción 2x2','Determinantes 2x2'],
						tag: 'T1'
					},
					{
						tema: 'Métodos de Eliminación de Sistemas de Ecuaciones de 3x3',
						subtemas: ['Eliminación por Sustitución 3x3','Reducción por Suma y Resta 3x3','Determinantes 3x3'],
						tag: 'T1'
					}
				]

			},
			{
				tema: 'Desigualdades e Inecuaciones',
				subtemas: ['Propiedades de las desigualdades','Inecuación o Desigualdad de Condición'],
				tag: 'T1'
			},
			{
				tema: 'Referencias Álgebra',
				tag: 'T1',
				subtemas: []
			}
		];
		
		let subtemasTrigonometria = [
			{
				tema: 'Conceptos Elementales',
				subtemas: [],
				tag: 'T1'
			},
			{
				tema: 'Clasificación de Ángulos',
				subtemas: [],
				tag: 'T1'
			}, 
			{
				tema: 'Rectas Cortadas por una Secante',
				subtemas: [],
				tag: 'T1'
			},
			{
				tema: 'Rectas Paralelas Cortadas por una Secante',
				subtemas: [],
				tag: 'T1'
			},
			{
				tema: 'Clasificación de los Triángulos',
				subtemas: [],
				tag: 'T1'
			},
			{
				tema: 'Solución de Triángulos Rectángulos',
				tag: 'T2',
				subtemas: [
					{
						tema: 'Razones Trigonométricas',
						subtemas: [],
						tag: 'T1'
					},
					{
						tema: 'Teorema de Pitágoras',
						subtemas: [],
						tag: 'T1'
					},
					{
						tema: 'Ejemplos Triángulos Rectángulos',
						subtemas: []
					}
					
				]
			},
			{
				tema: 'Solución de Triángulos Oblicuángulos',
				tag: 'T2',
				subtemas: [
					{
						tema: 'Leyes de Senos y Cosenos',
						subtemas: [],
						tag: 'T1'
					},
					{
						tema: 'Ejemplos Triángulos Oblicuángulos',
						subtemas: [],
						tag: 'T1'
					}
				]
			},
			{
				tema: 'Identidades Trigonométricas',
				subtemas: [],
				tag: 'T1'
			},
			{
				tema: 'Simplificación de Expresiones Trigonométricas',
				subtemas: [],
				tag: 'T1'
			},
			{
				tema: 'Solución de Ecuaciones Trinométricas',
				subtemas: [],
				tag: 'T1'
			},
			{
				tema: 'Referencias Trigonometría',
				tag: 'T1',
				subtemas: []
			}
		];

		let subtemasGeometria = [
			{
				tema: 'Recta',
				tag: 'T2',
				subtemas: [
					{
						tema: 'Definición Recta',
						subtemas: [],
						tag: 'T1'
					},
					{
						tema: 'Segmento de Recta',
						subtemas: [],
						tag: 'T1'
					},
					{
						tema: 'Distancia entre 2 puntos',
						subtemas: [],
						tag: 'T1'
					},
					{
						tema: 'Punto medio de un Segmento',
						subtemas: [],
						tag: 'T1'
					},
					{
						tema: 'Punto que divide un Segmento en una Razón dada',
						subtemas: [],
						tag: 'T1'
					},
					{
						tema: 'Pendiente',
						subtemas: [],
						tag: 'T1'
					},
					{
						tema: 'Ecuación de una Recta',
						subtemas: [],
						tag: 'T1'
					},
					{
						tema: 'Intersección de Rectas',
						subtemas: [],
						tag: 'T1'
					},
					{
						tema: 'Distancia de un Punto a una Recta',
						subtemas: [],
						tag: 'T1'
					}
				]
			},
			{
				tema: 'Circunferencia',
				tag: 'T2',
				subtemas: [
					{
						tema: 'Definición Circunferencia',
						subtemas: [],
						tag: 'T1'
					},
					{
						tema: 'Ejercicios Circunferencia',
						subtemas: [],
						tag: 'T1'
					}
				]
			},
			{
				tema: 'Parábola',
				tag: 'T2',
				subtemas: [
					{
						tema: 'Definición Parabola',
						subtemas: [],
						tag: 'T1'
					},
					{
						tema: 'Ejercicios Parabola',
						subtemas: [],
						tag: 'T1'
					}
				]
			},
			{
				tema: 'Elipse',
				tag: 'T2',
				subtemas: [
					{
						tema: 'Definiciós Elipse',
						subtemas: [],
						tag: 'T1'
					},
					{
						tema: 'Ejercicios Elipse',
						subtemas: [],
						tag: 'T1'
					}
				]
			},
			{
				tema: 'Hipérbola',
				tag: 'T2',
				subtemas: [
					{
						tema: 'Definición Hiperbola',
						subtemas: [],
						tag: 'T1'
					},
					{
						tema: 'Ejercicios Hiperbola',
						subtemas: [],
						tag: 'T1'
					}
				]
			},
			{
				tema: 'Referencias Geometría',
				tag: 'T1',
				subtemas: []
			}
		];
		
		this.temas.push(
			new Tema('Álgebra',subtemasAlgebra),
			new Tema('Trigonometría',subtemasTrigonometria),
			new Tema('Geometría',subtemasGeometria));
	}

	getTemasAlgebra(): Tema{
		return this.temas[0];
	}

	getTemasTrigonometria(): Tema{
		return this.temas[1];
	}

	getTemasGeometria(): Tema{
		return this.temas[2];
	}
	/*
		let subtemasAlgebra = [
			'Operaciones con Números Enteros',
			'Operaciones con Números Racionales',
			'Propiedades de los Exponentes',
			'Propiedades de los Logaritmos',
			'Operaciones con Polinomios',
			'Términos Semejantes',
			'Suma',
			'Resta',
			'Producto',
			'Productos Notables',
			'Binomio al Cuadrado',
			'Binomio al Cubo',
			'Trinomio al Cuadrado',
			'Triángulo de Pascal',
			'División',
			'Factorización',
			'Factor Común',
			'Diferencia de Cuadrados',
			'Diferencia de Cubos',
			'Adición de Cubos',
			'Trinomio Cuadrado Perfecto',
			'Racionalización',
			'Simplificación de Expresiones Algebráicas',
			'Solución de Ecuaciones Lineales',
			'Solución de Ecuaciones Cuadráticas',
			'Solución de Sistemas de Ecuaciones Lineales de 2x2',
			'Suma/Resta',
			'Sustitución',
			'Igualación',
			'Determinantes',
			'Solución de Sistemas de Ecuaciones Lineales de 3x3',
			'Simplificación a un Sistema 2x2',
			'Determinantes',
			'Solución de Desigualdades'
		];

		let subtemasTrigonometria2 = [
			'Conceptos Elementales',
			'Ángulo',
			'Clasificación de Ángulos',
			'Clasificación de Triángulos',
			'Sistemas de Medición de Ángulos',
			'Solución de Triángulos Rectángulos',
			'Soluciónn de Triángulos Oblicuángulos',
			'Ley de Senos',
			'Ley de Cosenos',
			'Identidades Trigonométricas',
			'Simplificación de Expresiones usando Identidades Trigonométricas',
			'Solución de Ecuaciones Trigonométricas'
		];

		let subtemasGeometria2 = [
			'Recta',
			'Circunferencia',
			'Parábola',
			'Elipse',
			'Hipérbola',
		];
		
		let subtemasAlgebra = [
			new Tema('Operaciones con Números Enteros',null),
			new Tema('Operaciones con Números Racionales',null),
			new Tema('Propiedades de los Exponentes',null),
			new Tema('Propiedades de los Logaritmos',null),
			new Tema('Operaciones con Polinomios',[
				new Tema('Términos Semejantes',null),
				new Tema('Suma',null),
				new Tema('Resta',null),
				new Tema('Producto',null),
				new Tema('Productos Notables',[
					new Tema('Binomio al Cuadrado',null),
					new Tema('Binomio al Cubo',null),
					new Tema('Trinomio al Cuadrado',null),
					new Tema('Triángulo de Pascal',null)
				]),
				new Tema('Division',null),
				new Tema('Factorización',[
					new Tema('Factor Común',null),
					new Tema('Diferencia de Cuadrados',null),
					new Tema('Diferencia de Cubos',null),
					new Tema('Adición de Cubos',null),
					new Tema('Trinomio Cuadrado Perfecto',null)
				]),
				new Tema('Racionalización',null)
			]),
			new Tema('Simplificación de Expresiones Algebráicas',null),
			new Tema('Solución de Ecuaciones Lineales',null),
			new Tema('Solución de Ecuaciones Cuadráticas',null),
			new Tema('Solución de Sistemas de Ecuaciones Lineales de 2x2',[
				new Tema('Suma/Resta',null),
				new Tema('Sustitución',null),
				new Tema('Igualación',null),
				new Tema('Determinantes',null)
			]),
			new Tema('Solución de Sistemas de Ecuaciones Lineales de 3x3',[
				new Tema('Simplificación a un Sistema 2x2',null),
				new Tema('Determinantes',null)
			]),
			new Tema('Solución de Desigualdades',null)
		];
		*/

}