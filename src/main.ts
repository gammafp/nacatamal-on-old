import rendering from '../nacatamal-on/render/webgl2/rendering';
import triangle from '../nacatamal-on/render/shapes/triangle';

import { fragmentShaderSource, vertexShaderSource, vertexShaderSource2D } from '../nacatamal-on/render/shaders/shaders';
import { createProgram, createWebGlContext, getAttribLocation } from '../nacatamal-on/render/webgl2';
import draw from '../nacatamal-on/render/webgl2/draw';

declare var webglLessonsUI: any;

// Variables globales de UI
let translation = [200, 150];
let angleInRadians = 0;
let scale = [1, 1];

// Gl Está en contexto global
const gl = createWebGlContext({
    parent: 'canvas',
    width: 300,
    height: 300
});

const program = createProgram(gl, vertexShaderSource2D, fragmentShaderSource);

// Attribs
const position_attrib = getAttribLocation(gl, program, 'a_position');

// Uniforms
const u_resolution = gl.getUniformLocation(program, "u_resolution");
gl.uniform2f(u_resolution, gl.canvas.width, gl.canvas.height);

// Buffer position
const position_buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, position_buffer);

const drawScene = () => {
    rendering(gl, () => {
        // Proyección
        // Se inicia la proyección con el tamaño del canvas
        // let matrix = m3.projection(gl.canvas.clientWidth, gl.canvas.clientHeight);
        // matrix = m3.translate(matrix, translation[0], translation[1]);
        // matrix = m3.rotate(matrix, angleInRadians);
        // matrix = m3.scale(matrix, scale[0], scale[1]);


        gl.vertexAttribPointer(position_attrib, 2, gl.FLOAT, gl.false, 0, 0);

        const triangle_shape = triangle(gl);
        draw(gl, triangle_shape);

    });
}

// Set UI
function updatePosition(index) {
    return function (event, ui) {
        translation[index] = ui.value;
        drawScene();
    };
}

function updateAngle(event, ui) {
    var angleInDegrees = 360 - ui.value;
    angleInRadians = angleInDegrees * Math.PI / 180;
    drawScene();
}

function updateScale(index) {
    return function (event, ui) {
        scale[index] = ui.value;
        drawScene();
    };
}

webglLessonsUI.setupSlider("#x", { value: translation[0], slide: updatePosition(0), max: gl.canvas.width });
webglLessonsUI.setupSlider("#y", { value: translation[1], slide: updatePosition(1), max: gl.canvas.height });
webglLessonsUI.setupSlider("#angle", { slide: updateAngle, max: 360 });
webglLessonsUI.setupSlider("#scaleX", { value: scale[0], slide: updateScale(0), min: -5, max: 5, step: 0.01, precision: 2 });
webglLessonsUI.setupSlider("#scaleY", { value: scale[1], slide: updateScale(1), min: -5, max: 5, step: 0.01, precision: 2 });

drawScene();