// Obtenemos el contexto de la aplicación
const createWebGlContext = ({parent, width, height}) => {
    const canvas = document.querySelector(`#${parent}`);
    canvas.width = width;
    canvas.height = height;
    const gl = canvas.getContext('webgl2');
    if(!gl) {
        console.error('No soportas el poder de webgl lo siento');
    } else {
        return gl;
    }
}

export default createWebGlContext;