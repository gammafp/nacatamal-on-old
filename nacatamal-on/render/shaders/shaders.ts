export const fragmentShaderSource = `#version 300 es
precision highp float;

out vec4 outColor;

void main() {
  // gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
  outColor = vec4(1, 0, 0.5, 1);
}
`;

// 3D
export const vertexShaderSource = `#version 300 es 
// an attribute is an input (in) to a vertex shader.
// It will receive data from a buffer
in vec4 a_position;
// all shaders have a main function
void main() {
 
  // gl_Position is a special variable a vertex shader
  // is responsible for setting
  gl_Position = a_position;
}
`;

// 2D
export const vertexShaderSource2D = `#version 300 es

in vec2 a_position;
uniform vec2 u_resolution;

void main() {
  vec2 zeroToOne = a_position / u_resolution;

  vec2 zeroToTwo = zeroToOne * 2.0;

  vec2 clipSpace = zeroToTwo - 1.0;
  vec2 reverse_clip_space = clipSpace * vec2(1, -1);
  gl_Position = vec4(reverse_clip_space, 0, 1);

}
`;