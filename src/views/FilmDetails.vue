<template>
  <div class="container">
    <div class="row">
      <div class="col-auto left">
        <b-button v-on:click="goBack()"><b-icon-chevron-left></b-icon-chevron-left>Back</b-button>
      </div>
    </div>
      
    <div class="row" v-if="filmDetail">
      <div class="col">
        <h4>{{filmDetail.title}}</h4>
        <img class="immagine" v-bind:src="filmDetail.image"  alt="Image Film"/>
        <p>{{filmDetail.description}}</p>
      </div>
      <div class="col">
        <p>CAST:{{filmDetail.cast}}</p>

<iframe width="560" height="315" v-bind:src="filmDetail.trailerPath" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </div>    
</template>


<script>
export default {
  name: "FilmDetails",
  props: {},
  data() {
    return {};
  },
  components: {},
  created() {
    console.log("creato dettaglio");
  },
  methods: {
    goBack() {
      this.$router.push("../");
    }
  },
  computed: {
    paramID() {
      return this.$route.params.id;
    },
    filmDetail() {
      return this.$store.getters.getFilmDetails(this.paramID);
    }
  }
};
</script>
<style scoped>
.immagine {
  margin-bottom: 30px;
}
img {
  max-width: 300px;
  height: auto;
}
</style>
