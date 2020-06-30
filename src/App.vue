<template>
  <div id="app">
    <NavigationBar/>
    <router-view/>
    <footer-component/>
  </div>
</template>
<script>
import NavigationBar from "@/components/NavigationBar.vue";
import FooterComponent from "@/components/FooterComponent.vue";

import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Install BootstrapVue
Vue.use(BootstrapVue);

export default {
  name: "App",
  components: {
    NavigationBar,
    FooterComponent
  },
  created: function() {
    // `this` points to the vm instance
    console.log("ON-CREATED APP");
    this.$store.dispatch("filmsStore/loadFilms");
  }
};
</script>
 
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-family: 'Orbitron', sans-serif;
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color:  #1a1a1a;
}
</style>