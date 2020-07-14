<template>
  <div>
    <ul class="scrollable">
      <li v-for="elementoCorrente in this.allFilms">
        <div class="image">
          <star class="star" v-bind:class="{ 'isPreferred':elementoCorrente.prefer }" v-model="elementoCorrente.prefer" />
          <img v-bind:src="elementoCorrente.image" alt="Image Film" @click="directDetails(elementoCorrente.id)" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Star from "@/components/Star.vue";
export default {
  name: "MovieListSerp",
  components: {
    Star
  },
  props: ["mySearch", "myCategory", "isPrefer"],

  data() {
    return {};
  },
  methods: {
    directDetails(id) {
      console.log("numero id: " + id);
      this.$router.push("/movieDetails/" + id);
    }
  },

  computed: {
    allFilms() {
      if (this.mySearch) {
        return this.$store.getters["filmsStore/getFilms"].filter(item =>
          item.title.toLowerCase().includes(this.mySearch.toLowerCase())
        );
      } else if (this.myCategory) {
        return this.$store.getters["filmsStore/getFilms"].filter(item =>
          item.categories.includes(this.myCategory)
        );
      } else if (this.isPrefer) {
        return this.$store.getters["filmsStore/getFilms"].filter(
          item => item.prefer == true
        );
      } else {
        return this.$store.getters["filmsStore/getFilms"];
      }
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
  position: relative;
  z-index: 1;
}

.image:hover {
  /* background: rgba(179, 179, 204, 0.5); */
  cursor: pointer;
}

.image:hover .star {
  opacity: 1;
}
.isPreferred {
  opacity: 1 !important;
}
.image {
  position: relative;
}

.star {
  opacity: 0;
  position: absolute;
  top: 10px;
  right: 15px;
  background-color: rgba(148, 148, 184, 0.8);
  z-index: 2;
}
</style>