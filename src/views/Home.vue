<template>
  <div class="hello">
    <h1>{{msg}}</h1>

<div>
    <b-carousel 
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with custom text -->
      
        <template v-for="film in this.topRatedFilms"  >
          <b-carousel-slide v-bind:img-src="film.imageHd" :key="film.id">
            <h1 @click="directDetails(film.id)" style="cursor:pointer;">{{film.title}}</h1>
          </b-carousel-slide>
        </template>
    </b-carousel> 
    <!-- <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->
  </div>

    <film-list title="Film Comici" category="comic" />
    <film-list title="Film Romantici"  category="romantic"/>
    <film-list title="Film Avventura"  category="adventure"/>
    <film-list title="Film Preferiti" prefer/>
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
      return this.$store.getters.getFilms.filter(item =>
        item.categories.includes("top-rated")
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
.carousel-item {
  height: 300px;
}
</style>
