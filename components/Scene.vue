<script setup lang="ts">
import { createScene } from "../scenes/Creature";

const bjsCanvas = ref(null);

onMounted(() => {
  if (bjsCanvas.value) {
    createScene(bjsCanvas.value);
  }
});
</script>

<template>
  <div id="character-container">
    <canvas id="babylon-canvas" ref="bjsCanvas" width="300px" height="400px" />
  </div>
</template>

<style type="text/css">
#character-container {
  height: 100vh;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  box-sizing: border-box;
}

#babylon-canvas {
  margin: 0;
  padding: 0;
  width: auto;
  height: 100%;
  outline: 0;
  position: relative;
  z-index: 1;
  cursor: grab;
}

#babylon-canvas:active {
  cursor: grabbing;
}
</style>
