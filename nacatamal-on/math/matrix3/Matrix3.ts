import { IMatrix3 } from "./IMatrix3";

/*
El orden de la matriz (3x3) es el siguiente
Referencia documental: 
https://webgl2fundamentals.org/webgl/lessons/webgl-2d-matrices.html
------------------
| a  |  b  |  0  |
------------------
| c  |  d  |  0  |
------------------
| tx | ty  |  1  |
------------------
Guardamos solo a, b, c, d, tx, ty ya que corresponden a las transformaciones 2D
- Tanto a, b, c, d se usan para escalar y angulos por eso hay un problema en el orden de multiplicación
- tx y ty se usan para translate
Para poder hacer traslación, rotación y escala hay que seguir un orden de multiplicación
1) Multiplicar traslación con rotación 
2) El resultado anterior se multiplica a escala
*/
export class Matrix3 implements IMatrix3 {
    a: number;
    b: number;
    c: number;
    d: number;
    tx: number;
    ty: number;

    constructor(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0) {
        this.set(a, b, c, d, tx, ty);
    }

    set(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0): Matrix3 {
        this.a = a;   this.b = b;
        this.c = c;   this.d = d;  
        this.tx = tx; this.ty = ty;
        return this;
    }

    /**
     * @return Devuelve la matriz identidad
     */
    identity() {
        this.set();
    }

    translate(tx: number, ty: number = 1): Matrix3 {
        this.tx = tx; 
        this.ty = ty;
        return this;
    }

    rotate(angle: number): Matrix3 {
        const sin = Math.sin(angle);
        const cos = Math.cos(angle)

        // this.identity();
        this.a = cos;
        this.b = -sin;
        this.c = sin;
        this.d = cos;
        return this;
    }

    scale(x: number, y = 1): Matrix3 {
        this.a *= x;
        this.b *= x;
        this.c *= y;
        this.d *= y;
        return this;
    }

    fromArray(src_array: number[]): Matrix3 {
        return this.set(src_array[0], src_array[1], src_array[3], src_array[4], src_array[6], src_array[7]);
    }

    /**
     * @return devuelve la matriz 3x3 en forma de array
     */
    toArray(): number[] {
        return [this.a, this.b, 0, this.c, this.d, 0, this.tx, this.ty, 1];
    }

    /**
     * @return devuelve la matriz 3x3 en forma de array bi-dimensional
     */
    toArrayBi(): Array<number[]> {
        return [
            [this.a, this.b, 0],
            [this.c, this.d, 0],
            [this.tx, this.ty, 1]
        ];
    }

    /**
     * @return Devuelve un string para poder analizar que es lo que se tiene en la matriz
     */
    toString(): string {
        return `
        -------------
        | ${this.a} | ${this.b} | 0 |
        -------------
        | ${this.c} | ${this.d} | 0 |
        -------------
        | ${this.tx} | ${this.ty} | 1 |
        -------------
        `;
    }

}

const m = new Matrix3();
console.log(m.toArrayBi().flat())