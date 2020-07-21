const rendering = (gl, loop_callback) => {
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.flush();

    loop_callback();
    // window.requestAnimationFrame(rendering(gl, loop_callback));
}

export default rendering;