import {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  MeshBuilder,
  StandardMaterial,
  Color3,
  Color4,
  HemisphericLight,
} from "@babylonjs/core";
const createScene = (canvas) => {
  const engine = new Engine(canvas);
  const scene = new Scene(engine);
  scene.clearColor = new Color4(0, 0, 0, 0.0000000000000001);

  const camera = new ArcRotateCamera(
    "Camera",
    Math.PI / 2,
    Math.PI / 2,
    10,
    Vector3.Zero(),
    scene
  );
  camera.attachControl(canvas, true);

  new HemisphericLight("light", Vector3.Up(), scene);

  const box = MeshBuilder.CreateBox("box", { size: 2 }, scene);
  const material = new StandardMaterial("box-material", scene);
  material.diffuseColor = Color3.Green();
  box.material = material;

  engine.runRenderLoop(() => {
    scene.render();
  });
};

export { createScene };
