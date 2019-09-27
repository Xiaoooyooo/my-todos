<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './fontawesome/fontawesome.scss';
@import './fontawesome/solid.scss';
*{
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
  width: 100%;
  overflow: hidden;
  #app {
    position: relative;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to right bottom,lighten($theme-color-dark,10%),$theme-color-dark);
  }
}
</style>
