<template>
 
  <div @click="change()" style="cursor:pointer;"> 
      <i v-if="value" class="material-icons">star</i>
      <i v-if="!value" class="material-icons">star_border</i>
 </div> 
 
</template>
<script>
export default {
  name: "Star",
  props: {
    value:Boolean
  },
  data() {
    return {
    };
  },
  methods: {
    change() {
      this.$emit("input", !this.value);
    }
  }
};
</script>

