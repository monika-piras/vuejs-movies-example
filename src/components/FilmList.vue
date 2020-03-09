<template>
<div>
  <h2>{{title1}}</h2>
    <div class="row space">
      <div v-for="film in this.$store.getters.getFilms"  class="col-sm">
      <p>{{film.title}}</p>
      <img v-bind:src="film.image" alt="Italian Trulli"/>
      <p>{{film.description}}</p>
      <p>{{film.categories}}</p>
      </div>
    </div>

  <h2>{{title2}}</h2>
    <div class="row space">
      <div v-for="film in this.$store.getters.getFilms"  class="col-sm">
      <p>{{film.title}}</p>
      <img v-bind:src="film.image" alt="Italian Trulli"/>
      <p>{{film.description}}</p>
      <p>{{film.categories}}</p>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: "FilmList",
  props: {
    title1: String,
    title2: String,
  },
  data() {
    return {
    };
  },
  components: {}
};
</script>
<style>
.space {
  margin: 30px;
}
img {
  width: 25%;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li img {
  display: block;
  float: left;
  padding: 8px;
  background-color: #dddddd;
}
</style>

