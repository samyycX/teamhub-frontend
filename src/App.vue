<template>
  <div>
    <MenuBar class="flex flex-column"></MenuBar>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <MainPage></MainPage> -->
    <router-view class="body flex flex-column"></router-view>
  </div>
</template>

<script>
import MenuBar from './layouts/MenuBar.vue';

export default {
  name: 'App',
  components: {
    MenuBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.body {
  padding-top: 20px;
}
</style>
