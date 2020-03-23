<template>
 
  <div @click="change()" style="cursor:pointer;"> 
      <i v-if="valore" class="material-icons">star</i>
      <i v-if="!valore" class="material-icons">star_border</i>
 </div> 
 
</template>
<script>
export default {
  name: "Star",
  props: {
    valore: Boolean
  },
  data() {
    return {};
  },
  methods: {
    change() {
      this.$emit("starValueChanged");
    }
  }
};
</script>

