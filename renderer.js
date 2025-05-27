import { Renderer } from 'obj-renderer'; // Ensure this package is installed via npm

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('webglCanvas');
    const renderer = new Renderer(canvas);

    // Set background color
    renderer.setClearColor(0, 0, 0); // Black background

    // Load both .OBJ and .MTL files
    const objPath = './models/sample.obj'; // Ensure correct path
    const mtlPath = './models/sample.mtl'; // Ensure correct path

    renderer.loadOBJWithMTL(objPath, mtlPath, 'SampleModel');

    // Render the scene
    renderer.renderScene();
});
