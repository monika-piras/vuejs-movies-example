<template>
  <div>
     <!-- {{this.category}}  -->
    <h4 v-if="title" style="margin:20px;text-align:left;">{{title}}
      <router-link :to ="{ path: '/categories/'+ this.category}" 
       style="margin-left:20px;text-decoration:none;font-size:1rem;line-height:1.5;">
       Explore</router-link>
    </h4>

    <div class="scroll-parent">
      <button class="move-left" @click="less()">
        <b-icon-chevron-left></b-icon-chevron-left>
      </button>
      <ul class="scrollable">
        <li v-for="film in this.filmsToDisplay" class="relative">
          <star class="star" v-bind:class="{ 'isPreferred':film.prefer }" v-model="film.prefer" />
          <!-- <i v-if="film.prefer" class="material-icons star">star</i> -->
          <img v-bind:src="film.image" @click="directDetails(film.id)" alt="Image Film" />
        </li>
      </ul>
      <button class="move-right" @click="more()">
        <b-icon-chevron-right></b-icon-chevron-right>
      </button>
    </div>
  </div>
</template>

<script>
import Star from "@/components/Star.vue";
export default {
  name: "CategorySlider",
  components: {
    Star
  },

  props: {
    title: String,
    category: String
  },
  data() {
    return {
      filmList: [],
      filmsToDisplay: []
    };
  },
  created: function() {
    console.log("ON-CREATED FilmList ");
    this.filmList = this.$store.getters["filmsStore/getFilms"];
    this.updateListToDisplay();

    this.$store.watch(
      state => {
        // return this.$store.state.allFilms; // could also put a Getter here
        return this.$store.getters["filmsStore/getFilms"];
      },
      (newValue, oldValue) => {
        //something changed do something
        console.log("watch: ", newValue);
        this.filmList = newValue;
        this.updateListToDisplay();
      },
      //Optional Deep if you need it
      {
        deep: true
      }
    );
  },
  methods: {
    more() {
      this.$el.querySelector(".scrollable").scrollLeft += +300;
    },
    less() {
      this.$el.querySelector(".scrollable").scrollLeft += -300;
    },
    updateListToDisplay() {
      if (this.category) {
        this.filmsToDisplay = this.filmList.filter(item =>
          item.categories.includes(this.category)
        );
      } 
    },

    directDetails(id) {
      console.log("numero id: " + id);
      this.$router.push("/movieDetails/" + id);
    }
  }
};
</script>
<style scoped>

.scroll-parent {
  position: relative;
}

.scroll-parent ul {
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
  list-style: none;
}

.scroll-parent li {
  margin: 0 0.3rem;
}

.scroll-parent li:hover {
  cursor: pointer;
  position: relative;
}

.relative {
  position: relative;
}

.scroll-parent li:hover .star{
  opacity:1;
}

.star {
  position: absolute;
  top: 10px;
  right: 15px;
  opacity: 0;
  background-color: rgba(148, 148, 184, 0.8);
  z-index: 2;
}

.isPreferred {
  opacity: 1 !important;
}

.scroll-parent li > img {
  margin: 0;
  height: 300px;
  width: 200px;
}

.scroll-parent:first-child {
  margin-left: 50px;
}

.move-right {
  position: absolute;
  height: 100%;
  width: 50px;
  top: 0;
  right: 0;
  border: none;
  background-color: #e1e1ea7a;
  z-index: 2;
}

.move-left {
  position: absolute;
  height: 100%;
  width: 50px;
  top: 0;
  left: 0;
  border: none;
  background-color: #e1e1ea7a;
  z-index: 2;
}
.scrollItem {
  overflow: hidden;
}

button {
  outline: none !important;
}
</style>