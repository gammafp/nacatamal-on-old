import rendering from '../nacatamal-on/render/webgl2/rendering';
import triangle from '../nacatamal-on/render/shapes/triangle';

import { fragmentShaderSource, vertexShaderSource, vertexShaderSource2D } from '../nacatamal-on/render/shaders/shaders';
import { createProgram, createWebGlContext, getAttribLocation } from '../nacatamal-on/render/webgl2';
import draw from '../nacatamal-on/render/webgl2/draw';
import { Matrix3 } from '../nacatamal-on/math/matrix3/Matrix3';
import Color from '../nacatamal-on/colors';

declare var webglLessonsUI: any;

// Variables globales de UI
let translation = [200, 150];
let angleInRadians = 0;
let scale = [1, 1];

// Gl Está en contexto global
const gl = createWebGlContext({
    parent: 'canvas',
    width: 600,
    height: 600
});

const program = createProgram(gl, vertexShaderSource2D, fragmentShaderSource);

// Attribs
const position_attrib = getAttribLocation(gl, program, 'a_position');

// Uniforms
const u_resolution = gl.getUniformLocation(program, "u_resolution");
gl.uniform2f(u_resolution, gl.canvas.width, gl.canvas.height);

const color = new Color('orangered').getArrayNormalizeColor();
console.log('color: ', color)

const u_color = gl.getUniformLocation(program, "u_color");
gl.uniform3fv(u_color, color);


let matrix = new Matrix3();
const u_matrix = gl.getUniformLocation(program, "u_matrix");
gl.uniformMatrix3fv(u_matrix, false, matrix.toArray());

// Buffer position
const position_buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, position_buffer);

const drawScene = () => {
    rendering(gl, () => {
        // Proyección
        // Se inicia la proyección con el tamaño del canvas
        // let matrix = m3.projection(gl.canvas.clientWidth, gl.canvas.clientHeight);
        matrix = matrix.translate(translation[0], translation[1]);
        matrix = matrix.rotate(angleInRadians);
        matrix = matrix.scale(scale[0], scale[1]);

        gl.uniformMatrix3fv(u_matrix, false, matrix.toArray());
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