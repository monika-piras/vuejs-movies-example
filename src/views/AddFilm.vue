<template>
  <div class="about">
    <h1> ADD FILM</h1>
            <div class="col-auto left">
            <b-button v-on:click="goBack()"><b-icon-chevron-left></b-icon-chevron-left>Back</b-button>
          </div>
  </div>
</template>

<script>

export default {
  name: 'AddFilm',
  props:{
  },
  data() {
    return {
    };
  },
   methods: {
    goBack() {
      this.$router.push("/");
    }
  },
  components: {
    
  }
}

</script>