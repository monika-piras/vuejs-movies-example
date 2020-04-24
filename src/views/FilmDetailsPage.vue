<template>
  <div class="container">
    <div class="row">
      <div class="col-auto left">
        <b-button style="margin-top:30px; margin-bottom:30px;" v-on:click="goBack()">
          <b-icon-chevron-left></b-icon-chevron-left>Back</b-button>
      </div>
    </div>

    <div class="row" v-if="filmDetail">
      <div class="col">
        <h4>{{filmDetail.title}}</h4>
        <img class="immagine" v-bind:src="filmDetail.image" alt="Image Film" />
        <p>{{filmDetail.description}}</p>
      </div>
      <div class="col">
        <p>CAST:{{filmDetail.cast}}</p>
        <iframe width="100%" height="315" v-bind:src="filmDetail.trailerPath" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <div>
          <label for="">Preferiti</label>
          <star v-model="filmDetail.prefer"></star>
          <p>Preferito: {{filmDetail.prefer}}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Star from "@/components/Star.vue";
import FormComponent from "@/components/FormComponent.vue";
export default {
  name: "FilmDetailsPage",
  props: {},
  data() {
    return {};
  },
  components: {
    Star
  },
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
      return this.$store.getters['filmsStore/getFilmDetails'](this.paramID);
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
