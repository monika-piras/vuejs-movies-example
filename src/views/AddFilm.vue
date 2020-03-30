<template>
  <div class="container">
    <div class="row">
        <div class="col-auto left">
            <b-button style= "margin-top:30px; margin-bottom:30px;" 
            v-on:click="goBack()"><b-icon-chevron-left></b-icon-chevron-left>Back</b-button>
          </div>
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