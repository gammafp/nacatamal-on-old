const triangle = (gl) => {

    const array = new Float32Array([
        150, 70,
        100, 150,
        200, 150
    ]);
    return {
        data: array,
        vertex: 3
    };
}

export default triangle;