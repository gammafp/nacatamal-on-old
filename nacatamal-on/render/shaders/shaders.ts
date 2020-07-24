export const fragmentShaderSource = `#version 300 es
precision highp float;

uniform vec3 u_color;

out vec4 outColor;

void main() {

  outColor = vec4(u_color, 1.0);
  // outColor = vec4(255, 65, 0, 1.0);
}
`;

// 3D
export const vertexShaderSource = `#version 300 es 
in vec4 a_position;
void main() {
 
  gl_Position = a_position;
}
`;

// 2D
export const vertexShaderSource2D = `#version 300 es

in vec2 a_position;
uniform vec2 u_resolution;
uniform mat3 u_matrix;

void main() {

  vec2 position = (u_matrix * vec3(a_position, 1)).xy;

  vec2 zeroToOne = position / u_resolution;

  vec2 zeroToTwo = zeroToOne * 2.0;

  vec2 clipSpace = zeroToTwo - 1.0;
  vec2 reverse_clip_space = clipSpace * vec2(1, -1);
  gl_Position = vec4(reverse_clip_space, 0, 1);

}
`;