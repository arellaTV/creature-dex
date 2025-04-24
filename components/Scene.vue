<script setup lang="ts">
import { loadNewMesh } from "../scenes/Creature";
import creatures from "./creatures.json";
const route = useRoute();
const audioRef = ref<HTMLAudioElement | null>(null);
const number = parseInt(route?.params?.id as string) || 5;
const creature = creatures.find((creature) => creature.number == number);

onMounted(() => {
  setTimeout(() => {
    loadNewMesh(number);
  }, 0);
  loadNewMesh();

  if (audioRef.value) {
    audioRef.value.play();
  }
});
</script>

<template>
  <audio ref="audioRef" src="/mouse-click-290204.mp3" />
  <div id="metadata-container">
    <NuxtLink
      :style="[
        number - 1 >= 1
          ? { opacity: '1' }
          : { opacity: '0', pointerEvents: 'none', cursor: 'default' },
      ]"
      class="nav-arrow"
      :to="{
        name: 'creatures-id',
        params: {
          id: number > 1 ? number - 1 : number,
        },
      }"
      ><Icon
        name="material-symbols:arrow-drop-up-rounded"
        style="color: white"
        size="4em"
    /></NuxtLink>
    <div id="entry-banner">
      <div id="number-container">
        No. {{ (number.toString() as string).padStart(3, "0") }}
      </div>
      <div id="name-container">
        <h1>{{ creature?.name }}</h1>
      </div>
    </div>
    <NuxtLink
      :style="[
        number + 1 <= 10
          ? { opacity: '1' }
          : { opacity: '0', pointerEvents: 'none', cursor: 'default' },
      ]"
      class="nav-arrow"
      :to="{
        name: 'creatures-id',
        params: {
          id: number < 100 ? number + 1 : number,
        },
      }"
      ><Icon
        name="material-symbols:arrow-drop-down-rounded"
        style="color: white"
        size="4em"
      />
    </NuxtLink>
    <div id="metadata-table-container">
      <div id="category">{{ creature?.category }}</div>
      <div id="properties-table">
        <div class="row">
          <div>Type</div>
          <div>{{ creature?.type }}</div>
        </div>
        <div class="row">
          <div>Height</div>
          <div>{{ creature?.height }}</div>
        </div>
        <div class="row">
          <div>Weight</div>
          <div>{{ creature?.weight }}</div>
        </div>
        <div class="row">
          <div>Number Battled</div>
          <div>{{ creature?.numberBattled }}</div>
        </div>
      </div>
      <div id="description">
        {{ creature?.description }}
      </div>
    </div>
  </div>
</template>

<style type="text/css">
#page-container {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}
#page-container * {
  box-sizing: border-box;
}
#metadata-container {
  width: 55%;
  height: 100%;
  padding-top: 50px;
  padding-right: 50px;
  padding-left: 0px;
}
.row:last-child div {
  border-bottom: 0px !important;
}
#metadata-table-container {
  width: 100%;
  height: 100%;
  padding: 50px;
  font-size: 22px;
  padding-bottom: 0px;
  padding-top: 0px;
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
  margin: 0px;
}
#name-container {
  background-color: black;
  color: white;
  padding: 15px;
  width: 75%;
  display: flex;
  align-items: center;
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

.nav-arrow {
  display: flex;
  width: 100%;
  justify-content: center;
  transition: 150ms ease-in-out;
}

.nav-arrow:hover {
  transform: scale(1.5);
}

@media screen and (max-height: 800px) {
  #metadata-container {
    padding-top: 0px;
  }
}

@media screen and (max-width: 1200px) {
  #character-container {
    width: 40%;
  }
  #metadata-container {
    width: 60%;
  }
  #metadata-table-container {
    font-size: 18px;
  }
}

@media screen and (max-width: 800px) {
  #page-container {
    flex-direction: column;
    padding: 0px;
  }
  #character-container {
    width: 100%;
    height: 40vh;
    margin-top: -50px;
    margin-bottom: -50px;
    padding: 0px;
  }
  #metadata-container {
    width: 100%;
    padding: 0px;
    padding-left: 15px;
    padding-right: 15px;
  }
  #metadata-table-container {
    padding: 0px;
  }
  #number-container,
  #name-container h1 {
    font-size: 20px;
  }
}
</style>
