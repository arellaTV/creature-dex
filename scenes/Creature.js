import {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  HemisphericLight,
  ImportMeshAsync,
  AssetsManager,
} from "@babylonjs/core";
import "@babylonjs/loaders/glTF";
import gsap from "gsap";

const createScene = async (canvas) => {
  const engine = new Engine(canvas);
  window.scene = new Scene(engine);
  window.assetsManager = new AssetsManager(window.scene);

  window.scene.autoClear = false;
  const camera = new ArcRotateCamera(
    "Camera",
    Math.PI / 2 + 0.3,
    Math.PI / 2,
    5,
    Vector3.Zero(),
    window.scene
  );
  camera.attachControl(canvas, true);
  camera.lowerRadiusLimit = camera.radius;
  camera.upperRadiusLimit = camera.radius;

  new HemisphericLight("light1", Vector3.Up(), window.scene);
  new HemisphericLight("light2", Vector3.Down(), window.scene);

  engine.runRenderLoop(() => {
    window.scene.render();
  });
};

const loadNewMesh = async (id) => {
  if (!id) return;
  const { meshes } = window.scene;
  console.log({ meshes });
  let foundMesh = false;
  meshes.forEach((mesh) => {
    console.log({ mesh });
    mesh.setEnabled(false);
    if (mesh.name === id) {
      mesh.setEnabled(true);
      foundMesh = true;
    }
  });

  if (!foundMesh) {
    const results = await ImportMeshAsync(
      `/creatures/models/${id}.glb`,
      window.scene
    );

    console.log(results.meshes);
    results.meshes[0].name = id;
    results.meshes[1].name = id;
    gsap.to(results.meshes[0].position, {
      y: -0.06,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }
};

export { createScene, loadNewMesh };
