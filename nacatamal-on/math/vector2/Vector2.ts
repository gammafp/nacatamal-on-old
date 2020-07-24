import { IVector2 } from "./IVector2";
export class Vector2 implements IVector2 {
    x: number = 0;
    y: number = 0;
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    add(V: Vector2): Vector2 {
        this.x += V.x;
        this.y += V.y;
        return this;
    }

    scale(scalar: number) {
        this.x *= scalar;
        this.y * scalar;
    }

    clone() {
        return new Vector2(this.x, this.y);
    }
}