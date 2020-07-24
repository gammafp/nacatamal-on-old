export const create = (x: number = 0, y: number = 0) => ({ x, y });
export const add = (A, B) => ({
    x: A.x + B.x,
    y: A.y + B.y
});
export const clone = (A) => Object.assign({}, A);