import { Vector2 } from './vector2';
import { fVector2 } from './fvector2'

// // POO
// const A = new Vector2(20, 10);
// const B = new Vector2(30, 20);
// const suma = A.add(B);

// console.log('Clásico: ', A);

// // Functional
// const fA = fVector2.create(20, 10);
// const fB = fVector2.create(30, 20);
// const fsuma = fVector2.add(fA, fB);

// console.log('Functional: ', fA);

var start = new Date()

for (let i = 0; i < 1000000; i++) {
    const A = new Vector2(20, 10);
    const B = new Vector2(30, 20);
    const suma = A.add(B);
    console.log(suma);

}
// for (let i = 0; i < 1000000; i++) {
//     const fA = fVector2.create(20, 10);
//     const fB = fVector2.create(30, 20);
//     const fsuma = fVector2.add(fA, fB);

//     console.log('Functional: ', fsuma);
// }

var end: any = Number(new Date()) - Number(start);
console.info('Execution time: %dms', end);