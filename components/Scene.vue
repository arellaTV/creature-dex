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
  <canvas id="renderCanvas" ref="bjsCanvas" />
</template>

<style type="text/css">
#renderCanvas {
  margin: 0;
  padding: 0;
  width: 300px;
  height: 400px;
  outline: 0;
  position: relative;
  z-index: 1;
}
</style>
