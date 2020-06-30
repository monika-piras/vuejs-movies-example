<template>
  <div class="hello">


  <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab" img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
        <b-carousel-slide v-for="film in this.topRatedFilms">
          <template v-slot:img>
            <img @click="directDetails(film.id)" style="cursor:pointer;"class="d-block img-fluid-grow w-100" width="1024" height="270" v-bind:src="film.imageHd" :key="film.id" alt="image slot">
            <!-- <h1 @click="directDetails(film.id)" style="cursor:pointer;">{{film.title}}</h1> -->
          </template>
        </b-carousel-slide>
      </b-carousel>
   
    <film-list title="Comic Movies" category="comic" />
    <film-list title="Romantic Movies" category="romantic" />
    <film-list title="Adventure Movies" category="adventure" />
    <!-- <film-list title="Preferred Movies" prefer/> -->
  </div>
</template>

<script>
import FilmList from "@/components/FilmList.vue";

export default {
  name: "Home",
  components: {
    FilmList
  },
  props: {
    msg: String
  },
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    directDetails(id) {
      console.log("numero id: " + id);
      this.$router.push("/filmDetails/" + id);
    }
  },
  computed: {
    topRatedFilms() {
      return this.$store.getters['filmsStore/getFilms'].filter(item =>
        item.categories.includes("top-rated")
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
/* .carousel-item {
  height: 300px;
} */
</style>