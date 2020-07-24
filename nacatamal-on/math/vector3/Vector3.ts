import { IVector3 } from "./IVector3";
export class Vector3 implements IVector3 {
    x: number = 0;
    y: number = 0;
    z: number;

    constructor(x: number = 0, y: number = 0, z: number = 0) {
        this.x = x;
        this.y = y;
    }

    add(V: Vector3): Vector3 {
        this.x += V.x;
        this.y += V.y;
        this.z += V.z;
        return this;
    }

    scale(scalar: number) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
    }

    clone() {
        return new Vector3(this.x, this.y, this.z);
    }
}