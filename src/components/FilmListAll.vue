<template>
<div>
    <ul class="scrollable">
        <li v-for="elementoCorrente in this.allFilms">
          <!-- titolo: {{elementoCorrente.title}} -->
            <img v-bind:src="elementoCorrente.image"  @click="directDetails(elementoCorrente.id)"
                  class="pointer" alt="Image Film"/>
        </li>
    </ul>
</div>
</template>

<script>
export default {
  name: "FilmListAll",
  props: {
  },
  data() {
    return {
    };
  },
  components: {},

  methods: {
    directDetails(id) {
      console.log("numero id: " + id);
      this.$router.push("/filmDetails/" + id);
    }
  },

  computed: {
    allFilms() {
      return this.$store.getters.getFilms;
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
li {
  margin: 6px 6px;
}
img {
  width: 190px;
  height: 300px;
}
</style>