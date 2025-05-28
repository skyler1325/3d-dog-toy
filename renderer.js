document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('webglCanvas');
    const renderer = new window.ObjRenderer.Renderer(canvas);

    // Set background color
    renderer.setClearColor(0, 0, 0); // Black background

    // Load both .OBJ and .MTL files
    const objPath = './models/sample.obj'; // Ensure this path is correct
    const mtlPath = './models/sample.mtl'; // Ensure this path is correct

    renderer.loadOBJWithMTL(objPath, mtlPath, 'SampleModel');

    // Render the scene
    renderer.renderScene();
});
