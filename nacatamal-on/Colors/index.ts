import { colorKey } from "./colorKey";

export default class Color {
    color: string;
    constructor(color: string) {
        this.color = color.toLowerCase();
    }
    getColor(): number {
        return colorKey[this.color] as number;
    }
}