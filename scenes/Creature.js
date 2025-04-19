import {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  HemisphericLight,
  ImportMeshAsync,
} from "@babylonjs/core";
import "@babylonjs/loaders/glTF";
import gsap from "gsap";

const createScene = async (canvas) => {
  const engine = new Engine(canvas);
  const scene = new Scene(engine);
  scene.autoClear = false;

  const camera = new ArcRotateCamera(
    "Camera",
    Math.PI / 2,
    Math.PI / 2,
    5,
    Vector3.Zero(),
    scene
  );
  camera.attachControl(canvas, true);
  camera.lowerRadiusLimit = camera.radius;
  camera.upperRadiusLimit = camera.radius;

  new HemisphericLight("light", Vector3.Up(), scene);

  const results = await ImportMeshAsync("Floracub.glb");
  const mesh = results.meshes[0];

  gsap.to(mesh.position, {
    y: -0.25,
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
