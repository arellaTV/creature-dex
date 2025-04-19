import {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  HemisphericLight,
  ImportMeshAsync,
  DirectionalLight,
  SpotLight,
} from "@babylonjs/core";
import "@babylonjs/loaders/glTF";
import gsap from "gsap";

const createScene = async (canvas) => {
  const engine = new Engine(canvas);
  const scene = new Scene(engine);
  scene.autoClear = false;

  const camera = new ArcRotateCamera(
    "Camera",
    Math.PI / 2 + 0.3,
    Math.PI / 2,
    5,
    Vector3.Zero(),
    scene
  );
  camera.attachControl(canvas, true);
  camera.lowerRadiusLimit = camera.radius;
  camera.upperRadiusLimit = camera.radius;

  new HemisphericLight("light1", Vector3.Up(), scene);
  new HemisphericLight("light2", Vector3.Down(), scene);

  const results = await ImportMeshAsync("creatures/models/5.glb");
  const mesh = results.meshes[0];

  gsap.to(mesh.position, {
    y: -0.06,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });

  engine.runRenderLoop(() => {
    scene.render();
  });
};

export { createScene };
