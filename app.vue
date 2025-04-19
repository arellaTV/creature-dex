<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <div id="background" />
  </div>
</template>

<script setup lang="ts">
if (import.meta.browser) {
  const audio = new Audio("/cute-creatures-150622.mp3");
  audio.volume = 0.5;
  audio.addEventListener("canplaythrough", () => {
    audio.play().catch(() => {
      window.addEventListener(
        "click",
        () => {
          audio.play();
        },
        { once: true }
      );
    });
  });
}
</script>

<style type="text/css">
body {
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
#background {
  background: #e9e3e6;
  background: linear-gradient(
    90deg,
    rgb(255, 255, 255) 0%,
    rgb(255, 255, 255) 10%,
    rgba(255, 87, 58, 1) 10%,
    rgba(255, 87, 58, 1) 20%,
    rgba(255, 126, 74, 1) 20%,
    rgba(255, 126, 74, 1) 80%,
    rgba(255, 87, 58, 1) 80%,
    rgba(255, 87, 58, 1) 90%,
    rgb(255, 255, 255) 90%,
    rgb(255, 255, 255) 100%
  );
  transform: skew(-15deg, 0deg);
  position: fixed;
  top: 0px;
  left: -12.5%;
  width: 125vw;
  height: 100vh;
}

@media screen and (max-width: 800px) {
  #background {
    width: 150vw;
    left: -25%;
  }
}
</style>
