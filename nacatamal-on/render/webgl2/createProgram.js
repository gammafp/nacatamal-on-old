import compileShader from "./compileShader";

const createProgram = (gl, vertexShaderSource, fragmentShaderSource) => {
    const program = gl.createProgram();
    const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    const success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (success) {
        gl.useProgram(program);
        return program;
    }

    gl.deleteProgram(program);
}

export default createProgram;