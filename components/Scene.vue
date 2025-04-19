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
      <div id="metadata-table-container">
        <div id="category">Seedling Bear</div>
        <div id="properties-table">
          <div class="row">
            <div>Type</div>
            <div>Grass</div>
          </div>
          <div class="row">
            <div>Height</div>
            <div>2' 9"</div>
          </div>
          <div class="row">
            <div>Weight</div>
            <div>45.0 lbs</div>
          </div>
          <div class="row">
            <div>Number Battled</div>
            <div>53</div>
          </div>
        </div>
        <div id="description">
          A small sprout grows on its head, which blooms when it's happy. Loves
          basking in the sun.
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
  width: 100%;
}
#page-container * {
  box-sizing: border-box;
}
#metadata-container {
  width: 55%;
  height: 100%;
  padding: 50px;
  padding-left: 0px;
}
.row:last-child div {
  border-bottom: 0px !important;
}
#metadata-table-container {
  width: 100%;
  height: 100%;
  padding: 50px;
  font-size: 26px;
  padding-bottom: 0px;
}
#properties-table {
  width: 100%;
  margin-bottom: 5px;
}
.row {
  display: flex;
  width: 100%;
}

.row div:first-child {
  background: #ececea;
  padding: 20px;
  width: 40%;
  border-bottom: 5px solid #e2e2e2;
  text-align: center;
}
.row div:last-child {
  background: white;
  padding: 20px;
  width: 60%;
  border-bottom: 5px solid white;
}
#category {
  background: #ececea;
  color: black;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
}
#description {
  background: white;
  color: black;
  width: 100%;
  padding: 20px;
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
  font-size: 24px;
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
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  padding-right: 0px;
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
