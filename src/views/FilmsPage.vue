<template>
  <div class="about">
    <h1 style="margin-bottom:40px;" v-if="searchValue">Results:</h1>
    <h1 style="margin-bottom:40px;" v-else>All Films</h1>

    <film-list-all v-bind:search="searchValue" />
    <button class="add-button" @click="goToAddFilmPage()">
      <b-icon-plus></b-icon-plus>
    </button>
  </div>
</template>

<script>
import FilmListAll from "@/components/FilmListAll.vue";

export default {
  name: "FilmsPage",
  components: {
    FilmListAll
  },
  props: {},
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