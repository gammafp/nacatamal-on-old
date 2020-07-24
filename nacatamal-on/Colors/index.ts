import { colorKey } from "./colorKey";

export default class Color {
    color: string;
    constructor(color: string) {
        this.color = color.toLowerCase();
    }
    getColor(): number {
        return colorKey[this.color] as number;
    }
    getArrayColor(): Array<number> {
        const color = this.getColor();
        console.log(color)
        var arrBuff = new ArrayBuffer(4);
        var vw = new DataView(arrBuff);
        vw.setUint32(0, color, false);
        var arrByte = new Uint8Array(arrBuff);
      
        return [arrByte[1], arrByte[2], arrByte[3]];
    }
    getArrayNormalizeColor(): Array<number> {
        const array_color = this.getArrayColor();
        return [array_color[0] / 255, this.getArrayColor()[1] / 255, this.getArrayColor()[2] / 255];
    }
}