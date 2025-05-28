document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("webglCanvas");
    console.log(window.ObjRenderer);
    const renderer = new window.ObjRenderer.Renderer(canvas);

    // Set background color
    renderer.setClearColor(0, 0, 0);

    // Load OBJ and MTL files
    const objPath = "./models/sample.obj";
    const mtlPath = "./models/sample.mtl";

    renderer.loadOBJWithMTL(objPath, mtlPath, "SampleModel");

    // Render the scene
    renderer.renderScene();
});
