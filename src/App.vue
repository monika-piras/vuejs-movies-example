<template>
  <div id="app">
    <NavigationBar/>
    <router-view/>
    </div>
  </div>
</template>
<script>

import NavigationBar from "@/components/NavigationBar.vue";
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)

export default {
  name: "App",
  components: {
    NavigationBar
  },
  created: function() {
    // `this` points to the vm instance
    console.log("on created APP");
    this.$store.dispatch("loadFilms");
  }
};
</script>
 
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav {
  padding: 10px 30px;
  margin-bottom: 20px;
  background-color: black;

  img {
    margin-right: 40px;
  }

  a {
    font-weight: bold;
    color: #5f748a;
  }
}

.left {
  text-align: left;
}
</style>
