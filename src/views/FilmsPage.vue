<template>
  <div class="about">
    <h1 style="margin-bottom:40px;">ALL FILMS</h1>
  <film-list-all v-bind:search="searchValue"/>
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
    };
  },
  computed: {
    searchValue() {
      return this.$route.params.title;
    }
  }
};
</script>