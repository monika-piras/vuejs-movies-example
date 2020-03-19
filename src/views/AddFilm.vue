<template>
  <div class="about">
    <h1> ADD FILM</h1>
            <div class="col-auto left">
            <b-button v-on:click="goBack()"><b-icon-chevron-left></b-icon-chevron-left>Back</b-button>
          </div>
          <form-component/>
  </div>
</template>

<script>
import FormComponent from "@/components/FormComponent.vue";

export default {
  name: 'AddFilm',
   components: {
    FormComponent
  },
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
  }
}

</script>