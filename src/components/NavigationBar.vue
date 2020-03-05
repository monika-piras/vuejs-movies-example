<template>
<div>
  <ul class="nav nav-tabs">
<img alt="Vue logo" src="../../public/img/icons/favicon-32x32.png"> 
    
  <li class="nav-item">
    <router-link to="/" class="nav-link">Home</router-link> 
  </li>
  <li class="nav-item">
    <router-link to="/film" class="nav-link">Film</router-link>
  </li>
  
</ul>
</div>
  
</template>

<script>
export default {
  name: "NavigationBar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 img {
   width: 30px;
 }
</style>
