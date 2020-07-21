const draw = (gl, shape) => {
    gl.bufferData(
        gl.ARRAY_BUFFER,
        shape.data,
        gl.STATIC_DRAW);

    gl.drawArrays(gl.TRIANGLES, 0, shape.vertex);
}

export default draw;