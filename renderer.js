import { Renderer } from 'obj-renderer'; // Ensure this is installed via npm

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('webglCanvas');
    const renderer = new Renderer(canvas);

    // Set background color
    renderer.setClearColor(0, 0, 0); // Black background

    // Load a sample OBJ model
    const modelPath = 'dog toy.obj'; // Ensure this path is correct
    renderer.loadOBJFile(modelPath, 'SampleModel');

    // Render the scene
    renderer.renderScene();
});
