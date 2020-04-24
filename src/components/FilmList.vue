<template>
  <div>
    <h3 v-if="title">{{title}}</h3>
    <div class="scroll-parent">
      <button class="move-left" @click="less()">
        <b-icon-chevron-left></b-icon-chevron-left>
      </button>
      <ul class="scrollable">
        <li v-for="film in this.filmsToDisplay" class="relative">
          <i v-if="film.prefer" class="material-icons star">star</i>
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
export default {
  name: "FilmList",
  components: {},

  props: {
    title: String,
    category: String,
    prefer: Boolean
  },
  data() {
    return {
      filmList: [],
      filmsToDisplay: []
    };
  },
  created: function() {
    console.log("ON-CREATED FilmList ");
    this.filmList = this.$store.getters['filmsStore/getFilms'];
    this.updateListToDisplay();

    this.$store.watch(
      state => {
        // return this.$store.state.allFilms; // could also put a Getter here
        return this.$store.getters['filmsStore/getFilms'];
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
      } else {
        this.filmsToDisplay = this.filmList.filter(
          item => item.prefer === true
        );
      }
    },

    directDetails(id) {
      console.log("numero id: " + id);
      this.$router.push("/filmDetails/" + id);
    }
  }
};
</script>
<style scoped>
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
  /* background: rgba(179, 179, 204, 0.5); */
  cursor: pointer;
  position: relative;
}

.relative {
  position: relative;
}
.star {
  color: #e0e03e;
  position: absolute;
  top: 0;
  right: 0;
  border: 1px solid gray;
  opacity: 1;
  background-color: rgb(251, 251, 251);
  z-index: 2;
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
}
.move-left {
  position: absolute;
  height: 100%;
  width: 50px;
  top: 0;
  left: 0;
  border: none;
  background-color: #e1e1ea7a;
}
.scrollItem {
  overflow: hidden;
}

.scroll-parent {
  position: relative;
}
button {
  outline: none !important;
}
</style>