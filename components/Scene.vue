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
  <div id="page-container">
    <div id="character-container">
      <canvas
        id="babylon-canvas"
        ref="bjsCanvas"
        width="300px"
        height="400px"
      />
    </div>
    <div id="metadata-container">
      <div id="entry-banner">
        <div id="number-container">No. 005</div>
        <div id="name-container">
          <h1>Floracub</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style type="text/css">
#page-container {
  display: flex;
  position: relative;
  z-index: 1;
}
#metadata-container {
  width: 50%;
  height: 100%;
  padding: 50px;
}
#entry-banner {
  display: flex;
  align-items: stretch;
  justify-content: center;
  width: 100%;
}
#number-container {
  background-color: #ff490f;
  color: white;
  padding: 15px;
  display: flex;
  align-items: center;
  width: 25%;
}
#name-container h1 {
  display: inline;
}
#name-container {
  background-color: black;
  color: white;
  padding: 15px;
  width: 75%;
}
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
  cursor: grab;
}

#babylon-canvas:active {
  cursor: grabbing;
}
</style>
