<template>
<div> <!-- {{totFilms}}  -->

  <h2> {{title1}}</h2>
    <div class="row space"> 
      <div v-for="film in this.comicFilms"  class="col-sm" >
      <h4>{{film.title}}</h4>
      <img v-bind:src="film.image"  @click="directDetails(film.id)"
                class="pointer" alt="Image Film"/>
      </div>
    </div>

  <h2>{{title2}}</h2>
    <div class="row space">
      <div v-for="film in this.romanticFilms"  class="col-sm">
      <h4>{{film.title}}</h4>
      <img v-bind:src="film.image" @click="directDetails(film.id)" 
            class="pointer" alt="Image Film"/>
      </div>
    </div>

  <h2>{{title3}}</h2>
    <div class="row space"> 
      <div v-for="film in this.adventureFilms"  class="col-sm">
      <h4>{{film.title}}</h4>
      <img v-bind:src="film.image" @click="directDetails(film.id)" 
            class="pointer" alt="Image Film"/>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: "FilmList",
  props: {
    title1: String,
    title2: String,
    title3: String,
  },
  data() {
    return {
      filmList: [],
      romanticFilms: [],
      comicFilms: [],
      adventureFilms: [],
    };
  },
  components: {},

  methods: {
    updateCategories() {
      this.comicFilms = this.filmList.filter(item =>
        item.categories.includes("comic")
      );
      this.romanticFilms = this.filmList.filter(item =>
        item.categories.includes("romantic")
      );
      this.adventureFilms = this.filmList.filter(item =>
        item.categories.includes("adventure")
      );
    },

    directDetails(id) {
      console.log("numero id: " + id);
      this.$router.push("/filmDetails/" + id);
    }
  },

  created: function() {
    console.log("ON-CREATED FilmList ");
    this.filmList = this.$store.getters.getFilms;
    this.updateCategories();

    this.$store.watch(
      state => {
        return this.$store.state.allFilms; // could also put a Getter here
      },
      (newValue, oldValue) => {
        //something changed do something
        console.log("watch: ",newValue);
        this.filmList = newValue;
        this.updateCategories();
      },
      //Optional Deep if you need it
      {
        deep: true
      }
    );
  },   
/*  computed: {
    totFilms() {
      this.filmList = this.$store.getters.getFilms;
      this.updateCategories();

      console.log("COMPUTED PROPERTY");
    }
  }  */
};
</script>
<style>
.space {
  margin: 30px;
}
img {
  width: 25%;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li img {
  display: block;
  float: left;
  padding: 8px;
  background-color: #dddddd;
}
.pointer {
  cursor: pointer;
}
</style>

