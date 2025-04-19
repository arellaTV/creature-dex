import {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  Color4,
  HemisphericLight,
  ImportMeshAsync,
} from "@babylonjs/core";
import "@babylonjs/loaders/glTF";

const createScene = (canvas) => {
  const engine = new Engine(canvas);
  const scene = new Scene(engine);
  scene.autoClear = false;

  const camera = new ArcRotateCamera(
    "Camera",
    Math.PI / 2,
    Math.PI / 2,
    3,
    Vector3.Zero(),
    scene
  );
  // camera.attachControl(canvas, true);

  new HemisphericLight("light", Vector3.Up(), scene);

  ImportMeshAsync("Floracub.glb");

  engine.runRenderLoop(() => {
    scene.render();
  });
};

export { createScene };
