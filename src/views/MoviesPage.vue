<template>
  <div class="about">

    <h2 style="margin-top:10px;margin-bottom:40px;" v-if="searchValue">RESULTS:</h2>
    <h2 style="margin-top:10px;margin-bottom:40px;" v-else-if="searchCategory">FILM CATEGORY: {{searchCategory}}</h2>
    <h2 style="margin-top:10px;margin-bottom:40px;" v-else-if="isFavourites">Favourite movies: {{searchCategory}}</h2>
    <h2 style="margin-top:10px;margin-bottom:40px;" v-else>ALL FILMS</h2>

    <movie-list-serp v-bind:mySearch="searchValue" v-bind:isPrefer="isFavourites" v-bind:myCategory="searchCategory" style="margin-top:100px;" />
    <button class="add-button" @click="goToAddFilmPage()">
      <b-icon-plus></b-icon-plus>
    </button>
  </div>
</template>

<script>
import MovieListSerp from "@/components/MovieListSerp.vue";

export default {
  name: "MoviesPage",
  components: {
    MovieListSerp
  },
  props: ["isFavourites"],
  data() {
    return {};
  },
  methods: {
    goToAddFilmPage() {
      this.$router.push("/addFilm");
    }
  },
  computed: {
    searchValue() {
      return this.$route.params.title;
    },
    searchCategory() {
      return this.$route.params.category;
    }
  }
};
</script>
<style scoped >
.add-button {
  font-size: 25px;
  color: #1b1a1a;
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  z-index: 3;
  border-radius: 50%;
  border: 0;
  box-shadow: 2px 2px 2px #6f6c6fd6;
  background-color: #bbb8ba;
  outline: none;
  padding: 10px;
}
.add-button:hover {
  background-color: #9c9a9c;
}
.add-button:active {
  background-color: #808280;
  box-shadow: 0 5px #777575;
  transform: translateY(4px);
}
</style>