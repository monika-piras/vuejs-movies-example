<template>
  <div class="about">
     <select v-model="selected" @change="onCategorySelection($event)" 
        style="width:200px;">
      <option disabled value="">Category Films
      </option>
      <option v-for="option in options" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>

    <h2 style="margin-top:10px;margin-bottom:40px;" v-if="searchValue">RESULTS:</h2>
    <h2 style="margin-top:10px;margin-bottom:40px;" v-else-if="searchCategory">FILM CATEGORY: {{searchCategory}}</h2>
    <h2 style="margin-top:10px;margin-bottom:40px;" v-else>ALL FILMS</h2>

    <film-list-all v-bind:search="searchValue" v-bind:category="searchCategory" 
      style="margin-top:100px;"/>
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
    return {
      selected: "",
      options: [
        { text: "Comic", value: "comic" },
        { text: "Romantic", value: "romantic" },
        { text: "Adventure", value: "adventure" }
      ]
    };
  },
  methods: {
    onCategorySelection(param) {
      this.$router.push("/film/categories/" + param.target.value);
    },
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
select {
  position: relative;
  font-family: Arial;
  background-color: #90959a78;
  outline:none;
  padding: 10px;
  border-radius: 3px;
  float: right;
  margin-top: 10px;
  margin-right: 10px;
}

</style>