<template>
<div>
  <h2>{{title1}}</h2>
    <div class="row space">
      <div v-for="film in this.comicFilms"  class="col-sm">
      <p>{{film.title}}</p>
      <img v-bind:src="film.image" alt="Italian Trulli"/>
      <p>{{film.description}}</p>
      <p>{{film.categories}}</p>
      </div>
    </div>

  <h2>{{title2}}</h2>
    <div class="row space">
      <div v-for="film in this.romanticFilms"  class="col-sm">
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
    title2: String
  },
  data() {
    return {
      filmList: [],
      romanticFilms: [],
      comicFilms: []
    };
  },
  created: function() {
    console.log("on created listfilm");
    this.filmList = this.$store.getters.getFilms;
    this.updateCategories();

    this.$store.watch(
      state => {
        return this.$store.state.allFilms; // could also put a Getter here
      },
      (newValue, oldValue) => {
        //something changed do something
        console.log("watch: ",newValue);
        this.filmList = newValue;
        this.updateCategories();
      },
      //Optional Deep if you need it
      {
        deep: true
      }
    );
  },
  components: {},
  methods: {
    updateCategories() {
      this.comicFilms = this.filmList.filter(item =>
        item.categories.includes("comic")
      );
      this.romanticFilms = this.filmList.filter(item =>
        item.categories.includes("romantic")
      );
    }
  }
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

